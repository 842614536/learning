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

let qian = ['a', 'b', 'd', 'e', 'c', 'f', 'g']
let zhong = ['d', 'b', 'e', 'a', 'f', 'c', 'g']
let hou = ['d', 'e', 'b', 'f', 'g', 'c', 'a']


// 根据后序和中序 推出原二叉树
function restoreTreeByhouzhong (hou, zhong) {
  if (hou.length === 0 || zhong.length === 0) return null
  let root = new Node(hou.slice(-1)[0])
  let rootIndexInZhong = zhong.indexOf(root.value)
  let houLeft = hou.slice(0, rootIndexInZhong)
  let houRight = hou.slice(rootIndexInZhong, -1)
  let zhongLeft = zhong.slice(0, rootIndexInZhong)
  let zhongRight = zhong.slice(rootIndexInZhong + 1)
  root.left = restoreTreeByhouzhong(houLeft, zhongLeft)
  root.right = restoreTreeByhouzhong(houRight, zhongRight)
  return root
}
console.log(restoreTreeByhouzhong(hou, zhong))

// // 根据前序和中序 推出原二叉树
// function restoreTreeByqianzhong (qian, zhong) {
//   if (qian.length === 0 || zhong.length === 0) return null
//   let root = new Node(qian[0]) // 从前序的第一个获取到跟节点
//   let rootIndexInZhong = zhong.indexOf(root.value) // 从中序中获取root节点的位置 左边是左节点 右边是右节点
//   let qianLeft = qian.slice(1, 1 + rootIndexInZhong)
//   let qianRight = qian.slice(1 + rootIndexInZhong)
//   let zhongLeft = zhong.slice(0, rootIndexInZhong)
//   let zhongRight = zhong.slice(rootIndexInZhong + 1)
//   root.left = restoreTreeByqianzhong(qianLeft, zhongLeft)
//   root.right = restoreTreeByqianzhong(qianRight, zhongRight)
//   return root
// }
// let root1 = restoreTreeByqianzhong(qian, zhong)
// console.log(root1.left)
// console.log(root1.right)


// function frontFn (node) {
//   if (node === null) return
//   console.log(node.value)
//   frontFn(node.left)
//   frontFn(node.right)
// }
// frontFn(a)

// function middleFn (node) {
//   if (node === null) return
//   middleFn(node.left)
//   console.log(node.value)
//   middleFn(node.right)
// }
// middleFn(a)

// function endFn (node) {
//   if (node === null) return
//   endFn(node.left)
//   endFn(node.right)
//   console.log(node.value)
// }
// endFn(a)
