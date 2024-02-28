

class User {
  readonly id: number
  private a: string = 'value'
  constructor (public name: string) {
    this.name = name
    this.id = 2
  }
  getA () {
    return this.a
  }
}

let user = new User('小鲁')
console.log(user)
