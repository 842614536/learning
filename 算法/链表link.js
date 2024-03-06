function Node (value) {
  this.value = value
  this.next = null
}

let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
let node5 = new Node(5)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

function link (node) {
  if (node === null) return
  console.log(node.value)
  link(node.next)
}


function link1 (root) {
  let temp = root
  while (true) {
    if (temp !== null) {
      console.log(temp.value)
    } else {
      break
    }
    temp = temp.next
  }
}

// 链表逆置
//  1 => 2 => 3 => 4 => 5 => null
//  null <= 1 <= 2 <= 3 <= 4 <= 5
function reverseLink (root) {
  if (root.next.next === null) {
    root.next.next = root
    return root.next
  } else {
    let result = reverseLink(root.next)
    root.next.next = root
    root.next = null
    return result 
  }
}
let newLink = reverseLink(node1)
link(newLink)
// link1(node1)