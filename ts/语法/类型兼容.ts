
// 类型兼容:
// 基本类型: 严格对比
// 对象的非字面量复制 遵循鸭子辨型法  可以比接口定义的多 不能少
// 函数类型: 函数的形参可以少 但不能多
// arr.forEach(item => 比如forEach的回调函数 形参有三个 可以只定义一个)



interface User {
  name: string,
  id: number
}

let obj = {
  name: '111',
  id: 3333,
}

let obj1: User = obj
let obj2: User = {
  name: '333',
  id: 3334
}
console.log(obj1, '===')

type Fn = (a: number, b: number) => number

// 比定义的函数少了一个形参
let fn: Fn = (c) => {
  return c
}

fn(3, 4)  

type s = 'ss' | ''