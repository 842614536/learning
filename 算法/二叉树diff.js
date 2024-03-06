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


let a1 = new Node('a')
let b1 = new Node('b')
let c1 = new Node('c')
let d1 = new Node('d')
let e1 = new Node('e')
let f1 = new Node('f')
let g1 = new Node('g')

let h1 = new Node('h')
let i1 = new Node('i')
let j1 = new Node('j')
let k1 = new Node('k')

a1.left = b1
a1.right = c1
b1.left = d1
b1.right = e1
c1.left = f1
c1.right = g1
f1.left = h1
f1.right = i1
h1.left = j1
h1.right = k1

// {type: '新增', old: null, new: root}
// {type: '删除', old: root, new: null}
// {type: '修改', old: root, new: root}
let diffList = []
function diff (root1, root2) {
  console.log(root1, root2)
  if (root1 === root2) return
  if (root1 === null && root2 !== null) {
    diffList.push({
      type: '新增',
      old: null,
      new: root2
    })
  } else if (root1 !== null && root2 === null) {
    diffList.push({
      type: '删除',
      old: root1,
      new: null
    })
  } else if (root1.value !== root2.value) {
    diffList.push({
      type: '修改',
      old: root1,
      new: root2
    })
    diff(root1.left, root2.left)
    diff(root1.right, root2.right)
  } else {
    diff(root1.left, root2.left)
    diff(root1.right, root2.right)
  }
}

diff(a, a1)
console.log(diffList)