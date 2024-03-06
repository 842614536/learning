export default void 0

function sayHello (this: IUser) {
  console.log(this.name)
}

interface IUser {
  name: string
  sayHello: () => void
}

let user: IUser = {
  name: '',
  sayHello
}


class User {
  constructor (public name?: string) {
    this.name = '3'
  }
  sayHello (this: User) {
    console.log(this.name)
  }
}

let user1 = new User()
let say = user1.sayHello

// 会报错
// say()

















