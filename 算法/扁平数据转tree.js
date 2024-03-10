// let arr = [
//   {id: 1, name: '部门1', pid: 0},
//   {id: 2, name: '部门2', pid: 1},
//   {id: 3, name: '部门3', pid: 1},
//   {id: 4, name: '部门4', pid: 3},
//   {id: 5, name: '部门5', pid: 4},
//   {id: 6, name: '部门5', pid: 4},
//   {id: 7, name: '部门5', pid: 4},
// ]
var arr = Array.from({length:1000},(item,index)=> ({id:index+1,name:`dep:${index+1}`,pid:index}))

// 时间复杂度 n^2
let fn = (arr) => {
  let result = []
  let getChildren = (result, pid) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].pid === pid) {
        if (!arr[i].children) {
          arr[i] = {
            ...arr[i],
            children: []
          }
        }
        result.push(arr[i])
        getChildren(arr[i].children, arr[i].id)
      }
    }
  }
  getChildren(result, 0)
  return result
}

// 时间复杂度 2n
let fn1 = (arr) => {
  let result = []
  let obj = {}
  arr.forEach(item => {
    obj[item.id] = {
      ...item,
      children: []
    }
  })

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].pid === 0) {
      result.push(obj[arr[i].id])
    } else {
      obj[arr[i].pid].children.push(obj[arr[i].id])
    }
  }

  return result
}

// 时间复杂度 n
let fn2 = (arr) => {
  let result = []
  let obj = {}

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]

    if (!obj[item.id]) {
      obj[item.id] = {
        children: []
      }
    }

    obj[item.id] = {
      ...item,
      children: obj[item.id].children
    }

    if (item.pid === 0) {
      result.push(item)
    } else {
      if (!obj[item.id].children) {
        obj[item.id] = {
          children: []
        }
      }
      obj[item.id].children.push(item)
    }
  }
  return result
}

// console.time()
// console.log(JSON.stringify(fn(arr)))
// console.timeEnd()

// console.time()
// console.log(JSON.stringify(fn1(arr)))
// console.timeEnd()

console.time()
console.log(JSON.stringify(fn2(arr)))
console.timeEnd()