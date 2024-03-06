function Node (value) {
  this.value = value
  this.left = null
  this.right = null
}

let a = new Node('a')
let b = new Node('b')
let c = new Node('c')
let d = new Node('d')
let e = new Node('e')
let f = new Node('f')
let g = new Node('g')

a.left = b
a.right = c
b.left = d
b.right = e
c.left = f
c.right = g

// 深度优先搜索 DFS
function depthFirstSearch (root, target) {
  if (root === null) return false
  if (root.value === target) return true
  return depthFirstSearch(root.left, target) || depthFirstSearch(root.right, target)
}

// console.log(depthFirstSearch(a, 'b'))

// 广度优先搜索 BFS
function breadthFirstSearch (rootList, target) {
  if (rootList.length === 0) return false
  let list = []
  for (let i = 0; i < rootList.length; i++) {
    if (rootList[i] === null) return false
    if (rootList[i].value === target) return true
    list.push(rootList[i].left)
    list.push(rootList[i].right)
  }
  return breadthFirstSearch(list, target)
}

console.log(breadthFirstSearch([a], 'b'))
