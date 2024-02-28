let arr = [9, 1, 3, 2, 8, 6]
let arr1 = [4, 1, 6, 9, 3, 2, 8, 7]

function bubbleSort (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
}

function chooseSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    let maxIndex = 0
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[maxIndex] > arr[j]) {
        maxIndex = j
      }
    }
    let temp = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = arr[maxIndex]
    arr[maxIndex] = temp
  }
}

function quickSort1 (arr) {
  if (arr.length === 0) return []
  let leader = arr[0]
  let left = []
  let right = []
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < leader) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  left = quickSort(left)
  right = quickSort(right)
  left.push(leader)
  return left.concat(right)
}

function quickSort2 (arr) {
  function quick (arr, begin, end) {
    if (begin >= end) return
    let left = begin
    let right = end
    while (left < right) {
      let leftValIdx
      let rightValIdx
      if (arr[left] > arr[begin]) {
        leftVal = left
      }
      if (arr[right] > arr[begin]) {
        rightVal = right
      }
      let temp = arr[leftValIdx]
      arr[leftValIdx] = arr[rightValIdx]
      arr[rightValIdx] = temp
      left++
      right--
    }
    let centerIdx = right - 1
    let temp = arr[begin]
    arr[begin] = arr[centerIdx]
    arr[centerIdx] = temp
    console.log(centerIdx)
    quick(arr, begin, centerIdx)
    quick(arr, centerIdx, end)
  }
  quick(arr, 1, arr.length)
}


// bubbleSort(arr)
// chooseSort(arr)
console.log(quickSort2(arr1))
// console.log(arr)