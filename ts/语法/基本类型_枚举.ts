let a: number = 1

let b: any = 'sddfs'

interface TypeUser {

}

if (typeof b === 'number') {
  a = b
}
console.log(typeof a)

/**
 * sdfs
 * @param a 
 * @param b 
 */
function combine (a: number, b: number): number
function combine (a: string, b: string): string
function combine (a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a * b
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a + b
  }
  throw new Error('a b 类型必须相同')
}

let aa = combine(1, 2)


enum num {
  c = '哈哈哈'
}

enum num1 {
  a = 'sss',
  b = 'ddd'
}

console.log(num['c'])

type arr = ReadonlyArray<number>
let arr1: arr = [1, 2]
arr1 = [1,3 ]

interface In1 {
  name: string
}

// 接口的继承 不能更改父接口的类型  如下会报错
// interface In2 extends In1 {
//   name: number
// }