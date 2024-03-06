
export default void 0

function description (desc: string) {
  // 类装饰器的参数是类本身
  function decorator(target: new () => object): void
  // 方法或者属性的参数是 类的 prototype 和 属性的名称
  function decorator(target: object, propName: string): void
  function decorator (target: any, propName?: string) {
    if (propName) {
      if (target.$descriptions) {
        target.$descriptions.push({
          name: propName,
          desc
        })
      } else {
        target.$descriptions = [{
          name: propName,
          desc
        }]
      }
    } else {
      target.prototype.$desc = desc
    }
  }
  return decorator
}

function printObj (obj: any) {
  console.log(obj.$desc)
  obj.$descriptions.forEach((item: any) => {
    if (obj.hasOwnProperty(item.name)) {
      console.log(`${item.name}: ${item.desc}`)
    }
  })
}

@description('用户类') // 后调用了类的装饰器
class User {
  @description('名字') // 先调用了属性的装饰器
  name!: string
  
  @description('说') // 先调用了属性的装饰器
  say () {
    console.log('hello')
  }
}

let user = new User()
user.name = '333'
printObj(user)

// console.log(user)

let a: '222'
let b: typeof a = '222'