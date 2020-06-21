function LinkedList() {

  function Node(data) {
    this.data = data;
    this.next = null;
  }

  this.head = null
  this.length = 0

  // 1. 追加方法：append

  LinkedList.prototype.append = (data) => {
    // 1. 创建新的节点
    let newNode = new Node(data)

    // 2. 判断是否添加的是第一个节点
    if (this.length === 0) { // 2.1 是第一个节点       
      this.head = newNode
    } else { // 2.2 不是第一个节点
      let current = this.head;

      // 找到最后一个节点
      while (current.next) { // 判断current是否为空，一旦为空，就代表是最后一个节点
        current = current.next;
      }

      // 让最后节点的next指向新的节点
      current.next = newNode
    }

    this.length += 1
  }

  // 2. toString方法

  LinkedList.prototype.toString = () => {
    // 1.定义变量
    let current = this.head;
    let listString = '';
    // 2.循环获取一个个的节点
    while (current) {
      listString += current.data + ';';
      current = current.next;
    }

    return listString
  }

  // 3. insert方法
  LinkedList.prototype.insert = (position, data) => {
    // 1.对position做越界判断   负数/超过长度
    if (position < 0 || position > this.length) return false

    // 2.根据data创建newNode
    let newNode = new Node(data)

    // 3.判断插入的位置是否是第一个
    if (position == 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else { // 1 < position < length
      let index = 0;
      let current = this.head;
      let previous = null;
      while (index++ < position) {
        previous = current
        current = current.next
      }

      newNode.next = current
      previous.next = newNode
    }

    // 4.length+1
    this.length += 1
    return true
  }

  // 4. removeAt方法
  LinkedList.prototype.removeAt = (position) => {
    // 1.对position做越界判断   负数/超过长度
    if (position < 0 || position >= this.length) return null;

    // 2.是否删除的是第一个节点
    let current = this.head;
    if (position == 0) {
      this.head = this.head.next;
    } else { // 1 < position < length
      let index = 0;
      let previous = null;
      while (index++ < position) {
        previous = current
        current = current.next
      }

      // 前一个节点的next指向current.next即可
      previous.next = current.next
    }

    // 3.length-1
    this.length -= 1
    return current
  }

  // 5. indexOf方法
  LinkedList.prototype.indexOf = (data) => {
    // 定义变量
    let current = this.head;
    let index = 0;

    // 开始查找
    while (current) {
      if (current.data === data) {

        return index
      }
      current = current.next
      index += 1
    }

    // 找到最后没有找到
    return -1
  }

  // 6. remove 方法
  LinkedList.prototype.remove = (data) => {
    let currentIndex = this.indexOf(data);

    return this.removeAt(currentIndex)
  }

  // 7. get 方法
  LinkedList.prototype.get = (position) => {
    // 1. 越界判断
    if (position < 0 || position >= this.length) return null

    // 2.获取对应的data
    let current = this.head;
    let index = 0;
    while (index++ < position) {
      current = current.next
    }

    return current
  }
}

// 测试代码：
// 1.创建LinkedList
let list = new LinkedList()

// 2.测试append方法
list.append('aaa')
list.append('bbb')
list.append('ccc')
list.insert(1, 'cssscc')

alert(list)
// list.remove('bbb')
let value = list.get(2)

console.log(value);