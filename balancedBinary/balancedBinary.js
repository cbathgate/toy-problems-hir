// Write a function to see if a binary tree is superbalance
// Superbalanced is a tree where the diff between the depths 
// of any two leaf nodes is no greater than one

// Problem courtesy of interview cakes

var BinaryTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinaryTree.prototype.addNode = function(value) {
  if (this.value < value) {
    if (this.right) {
      this.right.addNode(value);
    } else {
      this.right = new BinaryTree(value);
    }
  } else {
    if (this.left) {
      this.left.addNode(value);
    } else {
      this.left = new BinaryTree(value);
    }
  }
};

BinaryTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  }
  if (this.value < value) {
    if (this.right) {
      return this.right.contains(value);
    } else {
      return false;
    }
  } else {
    if (this.left) {
      return this.left.contains(value);
    } else {
      return false;
    }
  }
};


BinaryTree.prototype.checkBalanced = function() {
  console.log('yay');
};