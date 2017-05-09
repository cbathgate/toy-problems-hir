// Implement a queue with 2 stacks
// Include enqueue and dequeue methods


var Stack = function() {
  this._size = 0;
  this._stack = {};
}

Stack.prototype.size = function() {
  return this._size;
}

Stack.prototype.pop = function() {
  this._size--;
  var size = this.size();
  var deletedItem = this._stack[size];
  delete this._stack[size];
  return deletedItem;
}

Stack.prototype.push = function(item) {
  var size = this.size();
  this._stack[size] = item;
  this._size++;
}


var Queue = function() {
  this._enqueue = new Stack();
  this._dequeue = new Stack();
}

Queue.prototype.size = function() {
  return this._enqueue.size() + this._dequeue.size();
}

Queue.prototype.enqueue = function(item) {
  this._enqueue.push(item);
}

Queue.prototype.dequeue = function() {
  if (!this._dequeue.size()) {
    var i = 0;
    var size = this.size();
    while (i < size) {
      var item = this._enqueue.pop();
      this._dequeue.push(item);
      i++;
    }
  }

  var result = this._dequeue.pop();
  return result;
}




