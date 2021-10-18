const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
  this.data = data;
  this.left = null;
  this.right = null;
  }
}

module.exports = class BinarySearchTree {
  constructor(data) {
    this.poppy = null;
  }

  root() {
    return this.poppy;
    // remove line with error and write your code here
  }

  add(data) {
    this.poppy = insertNode(this.poppy, data);

    function insertNode(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data == data) {
        return node;
      }

      if (data < node.data) {
        node.left = insertNode(node.left, data);
      } else {
        node.right = insertNode(node.right, data);
      }
      return node;
    }
    // remove line with error and write your code here
  }

  has(data) {
    return search(this.poppy, data);
    function search(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (data < node.data) {
        return search(node.left, data);
      } else {
        return search(node.right, data);
      }
    }
    // remove line with error and write your code here
  }

  find(data) {
    return search(this.poppy, data);
    function search(node, data) {
      if (node === null) {
        return null;
      } else if (data < node.data) {
        return this.search(node.left, data);
      } else if (data > node.data) {
        return this.search(node.right, data);
      } else {
        return node;
      }
    }
    // remove line with error and write your code here
  }

  remove(data) {
    
    // remove line with error and write your code here
  }

  min() {
    let actual = this.poppy;
    while(actual.left) {
      actual = actual.left;
    }
    return actual.data;
    // remove line with error and write your code here
  }

  max() {
    let actual = this.poppy;
    while(actual.right) {
      actual = actual.right;
    }
    return actual.data;
    // remove line with error and write your code here
  }

}