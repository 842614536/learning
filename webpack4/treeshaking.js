
// 导出方法
export const fn1 = () => {
  console.log('fn1')
}

// ----- 分割线 ----

// 导入方法
import { fn } from 'xxx'
fn()


// 导出方法
const fn1 = () => {
  console.log('fn1')
}

export default {
  fn1
}

// ----- 分割线 ----

// 导入方法
import util from 'xxx'

let name = Math.random() > 0.5 ? 'fn1' : 'fn2'
util[name]()
