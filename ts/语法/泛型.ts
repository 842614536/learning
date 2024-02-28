/**
 * 泛型对比与any类型 在使用时候会有类型提示
 * 在调用泛型函数时 可以不传泛型 ts可以自动推导泛型的具体类型
 * 泛型就等于是一个形参
 * 泛型约束 用于限制泛型的取值
 * 
 */


function fn1<T> (arr: T[]): T[] {
  return arr.slice(1)
}

type A = '?'

let arr = fn1<A>(['?'])

// 泛型约束
interface hasName {
  name: string
}

function nameToUpcase <T extends hasName> (obj: T): T {
  obj.name = obj.name.toLocaleUpperCase()
  return obj
}

console.log(nameToUpcase({
  age: 1,
  name: 'sdfdsf'
}), '---')

// 多泛型
function mixinArray <T, K> (arr1: T[], arr2: K[]): (T | K)[] {
  let newArr: (T | K)[] = []
  newArr = [...arr1, ...arr2]
  return newArr
}

mixinArray([1, true], ['2'])


type Callback<K, V> = (k: K, v: V) => void

class Dictionary <K, V> {
  private keys: K[] = []
  private vals: V[] = []

  get size () {
    return this.keys.length
  }

  set (key: K, val: V) {
    let idx = this.keys.indexOf(key)
    if (idx > 0) {
      this.vals[idx] = val
    } else {
      this.keys.push(key)
      this.vals.push(val)
    }
  }
  forEach (callback: Callback<K, V>) {
    for (let i = 0; i < this.keys.length; i++) {
      callback(this.keys[i], this.vals[i])
    }
  }

  delete (key: K) {
    let idx = this.keys.indexOf(key)
    if (idx > 0) {
      this.keys.splice(idx, 1)
      this.vals.splice(idx, 1)
    }
  }
}


let dict = new Dictionary<string, number>()

dict.set('a', 1)
dict.set('b', 2)
dict.set('c', 3)
dict.delete('c')
dict.forEach((k, v) => {
  console.log(k, v)
})


console.log(dict)