enum AnimalType {
  lion = '狮子',
  tiger = '老虎',
  monkey = '猴子',
  dog = '狗'
}

interface IFireShow {
  singleFire(): void
  doubleFire(): void
}

abstract class Animal {
  abstract readonly type: AnimalType
  constructor (public name: string, public age: number) {
    this.name = name
    this.age = age
  }
  sayHello () {
    console.log(`大家好,我叫${this.name}, 今年${this.age}岁了,我是一个${this.type}`)
  }
}

/**
 * @implements 限制了类中必须拥有该接口中的所有类型
 */
class Lion extends Animal implements IFireShow {
  readonly type: AnimalType = AnimalType.lion
  singleFire(): void {
    console.log(`${this.name}表演了单火圈`)
  }
  doubleFire(): void {
    console.log(`${this.name}表演了双火圈`)
  }
}

let lion = new Lion('', 3)

let animals: Animal[] = [
  new Lion('狮子1', 2),
  new Lion('狮子2', 3)
]

animals.forEach(item => {
  item.sayHello()
})

// 类型保护函数
function hasFireShow (ani: object): ani is IFireShow {
  if ((ani as IFireShow).singleFire && (ani as IFireShow).doubleFire) {
    return true
  }
  return false
}

animals.forEach(item => {
  if (hasFireShow(item)) {
    item.singleFire()
    item.doubleFire()
  }
})







export default void 0


