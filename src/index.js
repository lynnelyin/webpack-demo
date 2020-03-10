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


