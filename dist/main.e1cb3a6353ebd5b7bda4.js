/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*** IMPORTS FROM imports-loader ***/
(function () {
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

  /*
  import _ from 'lodash'
  import $ from 'jquery'
  import {ui} from './jquery.ui'
  
  ui()
  
  const dom = $('<div>')
  dom.html(_.join(['have', 'a', 'sweet', 'dream'], ' '))
  $('body').append(dom)
  */
  console.log(this == window);
}).call(window);

/***/ })
/******/ ]);
//# sourceMappingURL=main.e1cb3a6353ebd5b7bda4.js.map