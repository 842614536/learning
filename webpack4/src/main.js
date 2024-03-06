import indexCss from './css/index.css'
// import a from './a'
// import b from './b'
console.log(indexCss, '=====')
// console.log(a, b)

let dom = document.createElement('div')
dom.className = indexCss.wrap
dom.innerHTML = '??0000?'
document.body.appendChild(dom)


if (module.hot) {
  // 是否开启了热更新
  module.hot.accept(); // 接受热更新
}
