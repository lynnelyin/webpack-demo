(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(0);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = react;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(8);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
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
import React, {Component} from 'react'
import ReactDom from 'react-dom'
// import axios from 'axios'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './home'
import List from './list'

class App extends Component {
  // componentDidMount() {
  //   axios.get('/react/api/header.json')
  //         .then(res => {
  //           console.log(res)
  //         })
  // }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home}></Route>
          <Route path="/list" component={List}></Route>
        </div>
      </BrowserRouter>
    )
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

/*
console.log('hello world')

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
              .then(registration => {
                console.log('service worker registed')
              })
              .catch(err => {
                console.log('service worker register error')
              })
  }) 
}
*/



class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Home Page"));
  }

}

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById('root'));

/***/ })
],[[3,1]]]);
//# sourceMappingURL=main.f6cc34dfa076d213b2b0.js.map