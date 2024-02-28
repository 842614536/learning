
type Gander = '男' | '女'

// 抽象类
abstract class People {
  // 抽象成员 属性
  abstract readonly gander?: Gander
  abstract skill (type: string): void
  // 抽象类前边可以声明 protected  只有父类声明了protected 子类才可以声明protected 
  protected abstract eat (): void
  protected speak () {
    console.log('我是' + this.gander + '人')
    this.eat()
  }
}

class ManPeople extends People {
  // 子类中必须定义父类中的抽象属性
  readonly gander: Gander = '男'
  // 子类中必须定义父类中的抽象函数
  skill (type: string): void {
    if (type === 'speak') {
      this.speak()
    }
  }
  protected eat () {
    console.log('我爱挣钱')
  }
}

class WomanPeople extends People {
  readonly gander: Gander = '女'
  skill(type: string): void {
    throw new Error("Method not implemented.")
  }
  protected eat () {
    console.log('我爱挣钱')
  }
}

// 抽象类不能实例化
// let people = new People()

let man = new ManPeople()
let woman = new WomanPeople()
man.skill('speak')



export default void 0