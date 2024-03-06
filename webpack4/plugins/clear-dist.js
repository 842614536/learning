const fs = require('fs');
const path = require('path')

class ClearDist {
  apply (complier) {
    // - tap：注册一个同步的钩子函数，函数运行完毕则表示事件处理结束
    // - tapAsync：注册一个基于回调的异步的钩子函数，函数通过调用一个回调表示事件处理结束
    // - tapPromise：注册一个基于Promise的异步的钩子函数，函数通过返回的Promise进入已决状态表示事件处理结束
    complier.hooks.run.tap('ClearDist', function (compilation) {
      fs.rmdirSync(path.resolve(__dirname + '/../dist'), {recursive: true})
    })
  }
}

module.exports = ClearDist