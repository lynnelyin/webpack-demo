const fs = require('fs')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const path = require('path')
const babel = require('@babel/core')

const moduleAnalyser = (filename) => {
  const content = fs.readFileSync(filename, 'utf-8')
  const ast = parser.parse(content, {
    sourceType: 'module'
  })
  const dependencies = {}
  traverse(ast, {
    ImportDeclaration({node}) {
      const dirname = path.dirname(filename)
      // 相对 bundler 目录的路径
      const newFile = './' + path.join(dirname, node.source.value)
      dependencies[node.source.value] = newFile
    }
  })
  const {code} = babel.transformFromAst(ast, null, {
    presets: ['@babel/preset-env']
  })
  //console.log(ast.program.body)
  return {
    filename, 
    dependencies,
    code
  }
}

const makeDependenciesGraph = (entry) => {
  const entryModule = moduleAnalyser(entry)
  const graphArray = [entryModule]
  for(let i = 0; i < graphArray.length; i++) {
    const item = graphArray[i]
    const {dependencies} = item
    if (dependencies) {
      for(let j in dependencies) {
        graphArray.push(moduleAnalyser(dependencies[j]))
      }
    }
  }
  const graph = {}
  graphArray.forEach(item => {
    graph[item.filename] = {
      dependencies: item.dependencies,
      code: item.code
    }
  })

  return graph
}

const generateCode = (entry) => {
  const graph = JSON.stringify(makeDependenciesGraph(entry))
  return `
    // 必须加上 ;
    (function(graph) {
      function require(module) {
        // 因为代码里的是相对路径，所以需要编写一个函数将相对路径转化为相对根目录的路径
        function localRequire(relativePath) {
          return require(graph[module].dependencies[relativePath]);
        }
        var exports = {};       // 转换后的代码有这个变量，浏览器没有
        // 在立即执行函数里执行代码，避免污染全局变量
        (function(require, exports, code) {
          eval(code);
        })(localRequire, exports, graph[module].code);
        return exports;        // 将变量导出
      }
      require('${entry}')
    })(${graph});
  `
}

const code = generateCode('./src/index.js')
console.log(code)
