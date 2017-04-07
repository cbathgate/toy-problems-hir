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

// Option 1: Recursive solution
BinaryTree.prototype.checkBalanced = function() {
  // store object with depths

  var depths = {};

  var currTree = this;

  // write function to recurse through tree 
  var recurseTree = function(depth, tree) {

    // if length of depth is greater than 2
    if (Object.keys(depths).length > 2) {
      // return false
      return false;
    }

    // check to see if leaf
    if (!tree.right && !tree.left) {
      // add depth to depths object
      depths[depth] = depth;
      return;
    } else {
      // if left exists 
      if (tree.left) {
        // recurseTree on left with curr depth + 1
        recurseTree(depth + 1, tree.left);
      }
      // if right exists
      if (tree.right) {
        // recurseTree on right with curr depth + 1
        recurseTree(depth + 1, tree.right);
      }
    }
  }

  // initialize recurse function
  recurseTree(0, currTree);

  // if length of depth is 1
  if (Object.keys(depths).length === 1) {
    // return true
    return true;
  }

  // if the diff between 2 keys is only 1
  for (var key in depths) {
    if (depths[parseInt(key) + 1] || depths[parseInt(key) - 1]) {
      return true;
    } else {
      return false;
    }
  }
};


