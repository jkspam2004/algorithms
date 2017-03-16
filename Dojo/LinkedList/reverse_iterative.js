/* reverse a singly linked list iteratively */

/* singly linked list class */
function SLL() {
  this.head = null;
  this.count = 0;
}

/* node class */
function Node(val) {
  this.val = val;
  this.next = null;
}

/* reverse the linked list recursively */
SLL.prototype.reverse = function() {
  if (!this.head) {
    return;
  }
  var prev = null;
  var current = this.head;
  while (current) {
    var next = current.next;  // create a variable to save current.next
    current.next = prev;      // then point current's next to previous node
    prev = current;           // move up previous pointer
    current = next;           // move up current pointer
  }
  this.head = prev;           // set the head to previous (last node). current is pointing to null at this point. so is next
  return;
};

/* add a node to the end of the list */
SLL.prototype.add = function(val) {
  if (!this.head) {
    this.head = new Node(val);
    this.count++;
    return;
  }

  var current = this.head;
  while (current.next) {
    current = current.next;
  } 

  current.next = new Node(val);
  this.count++;
  return;
};

/* traverse the list and print each element */
SLL.prototype.print = function() {
  if (!this.head) {
    return null;
  }

  var current = this.head;
  while (current) {
    console.log(current.val);
    current = current.next;
  }

  console.log("count: ", this.count);

  return;
};

list = new SLL;
list.add(1);
list.add(2);
list.add(3);
list.print();
list.reverse();
list.print();

