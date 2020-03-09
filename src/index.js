/*
import './style.css'

var btn = document.createElement('button')
btn.innerHTML = '新增'
document.body.appendChild(btn)

btn.addEventListener('click', function() {
  var item = document.createElement('div')
  item.innerHTML = 'item'
  document.body.appendChild(item)
})
*/

/*
import counter from './counter'
import number from './number'

counter()
number()

// css-loader 已经实现 HMR, vue的 loader 和 react 的 preset 也内置了 HMR
if (module.hot) {
  // 只要第一个参数的文件发生变化，就会执行作为第二个参数的函数
  module.hot.accept('./number', () => {
    document.body.removeChild(document.getElementById('number'))
    number()
  })
}
*/

/*
import '@babel/polyfill'

const arr = [
  new Promise(() => {}),
  new Promise(() => {})
]

arr.map(item => {
  console.log(item)
})
*/

/*
import '@babel/polyfill'
import React, {Component} from 'react'
import ReactDom from 'react-dom'

class App extends Component {
  render() {
    return <div>Hello World</div>
  }
}

ReactDom.render(<App />, document.getElementById('root'))
*/
/*
import {add} from './math'

add(1, 4)
*/


// async function getComponent() {
//   const {default: _} = await import(/* webpackChunkName: "lodash" */'lodash')
 
//   const element = document.createElement('div')
//   element.innerHTML = _.join(['a', 'nice', 'day'], ' ')
//   return element
// }


// document.addEventListener('click', () => {
//   // then 的参数是 Module 对象
//   import(/* webpackPrefetch: true */ './click').then(({default: func}) => {
//     func()
//   })
// })


import './style.css'
import './style1.css'



