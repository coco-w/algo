class Node {
  constructor(val){
    this.value = val
    this.next = null
  }
}

class LinkNode {
  constructor(value) {
    this.head = new Node('head')
  }
  // 根据value查找节点
  find(value) {
    let cur = this.head.next
    while(cur !== null && cur.value !== value) {
      cur = cur.next
    }
    console.log(cur)
    return cur == null ? -1 : cur
  }
    // 根据index查找节点，下标从0开始
  findByIndex(index) {
    let cur = this.head.next
    let i = 0
    while(cur !== null && i !== index) {
      i++
      cur = cur.next
    }
    console.log(cur)
    return cur === null ? -1 : cur
  }
    // 向链表末尾追加节点
  append(val){
    let cur = this.head
    while(cur.next !== null) {
      cur = cur.next
    }
    cur.next = new Node(val)
  }
  // 指定元素向后插入
  insert(value, target) {
    let node = new Node(value)
    let res = this.find(target)
    if (res === -1) {
      console.log('没有找到')
    }else {
      node.next = res.next
      res.next = node
    }
  }
  // 查找前一个
  findPrev(value) {
    let cur = this.head.next
    while(cur.next !== null && cur.next.value !== value){
      cur = cur.next
    }
    return cur.next === null ? -1 : cur
  }
       // 根据值删除
  remove(value) {
    let cur = this.head
    while(cur.next !== null && cur.next.value !== value  ) {
      cur = cur.next
    }
    if (cur.next === null) {
      console.log('没有找到')
    }else {
      cur.next = cur.next.next
    }
  }
  // 遍历显示所有节点
  display() {
  let cur = this.head.next
    while(cur !== null) {
      console.log(cur)
      cur = cur.next
    }
  }
  reserve() {
    let cur = this.head.next
    let res = null
    while(cur !== null) {
      let temp = cur.next
      cur.next = res
      res = cur
      cur = temp
    }
    this.head = res
  }
  checkCircle() {
    let slow = this.head.next
    let fast = this.head.next
    if (fast !== null && fast.next !== null) {
      slow = slow.next
      fast = fast.next.next
      if (fast.value === slow.value) {
        return true
      }
    }
    return false
  }
  //删除链表倒数第n个结点
  removeByIndex(n) {
    if (this.checkCircle()) return false
    let cur = this.head
    let i = 0
    while(cur !== null && i !== n) {
      cur = cur.next
      ++i
    }
    if (cur !== null) {
      cur.next = cur.next.next
    }else {
      return false
    }
  }
  removeNthFromEnd (n) {
    let fast = this.head
    let slow = this.head
    let res = slow
    let i = 0
    while(fast !== null) {
        if (i > n) {
            slow = slow.next
        }else {
            i++
        }
        fast = fast.next
    }
    slow.next= slow.next.next
    return res
  }
  findMiddleNode() {
    let slow = this.head
    let fast = this.head
    while(fast.next != null && fast.next.next !== null) {
      slow = slow.next
      fast = fast.next.next
    }
    return slow
  }
}
const LList = new LinkNode()
LList.append('chen')
LList.append('curry')
LList.append('sang')
LList.append('zhao') // chen -> curry -> sang -> zhao
LList.removeByIndexFromEnd(1)
// console.log('-------------insert item------------')
// LList.insert('qian', 'chen') // 首元素后插入
// LList.insert('zhou', 'zhao') // 尾元素后插入
// LList.display() // chen -> qian -> curry -> sang -> zhao -> zhou
// console.log('-------------remove item------------')
// LList.remove('curry')
// LList.display() // chen -> qian -> sang -> zhao -> zhou
// console.log('-------------find by item------------')
// LList.find('chen')
// console.log('-------------find by index------------')
// LList.findByIndex(2)
// console.log('-------------与头结点同值元素测试------------')
// LList.insert('head', 'sang')
// LList.display() // chen -> qian -> sang -> head -> zhao -> zhou
// LList.findPrev('head') // sang
// LList.remove('head')
// LList.display() 
var mergeTwoLists = function(l1, l2) {
  let res = null
  if (!l1) {
      return l2
  }
  if (!l2) {
      return l1
  }
  if (l1.val > l2.val) {
      res = l2
      l2 = l2.next
  }else {
      res = l1
      l1 = l1.next
  }
  let cur = res
  while (l1 !== null && l2 !==null) {
      if (l1.val > l2.val) {
          cur.next = l2
          l2 = l2.next
      }else {
          cur.next = l1
          l1 = l1.next
      }
      cur = cur.next
  }
  if (l1 === null) {
      cur.next = l2
  }else {
      cur.next = l1
  }
  return res
};