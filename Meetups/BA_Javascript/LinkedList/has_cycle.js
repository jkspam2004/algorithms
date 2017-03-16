/*
  Determine if a given linked list is circular or not.
  Reference:
  - http://blog.ostermiller.org/find-loop-singly-linked-list
  - https://www.quora.com/How-does-Floyds-cycle-finding-algorithm-work
*/

// Example linked list to use:
var firstNode = { value: 1, next: null },
    secondNode = { value: 2, next: null },
    thirdNode = { value: 3, next: null },
    fourthNode = { value: 4, next: null },
    fifthNode = { value: 5, next: null };
    
/*
// Non circular example
firstNode.next = secondNode;
secondNode.next = thirdNode;
thirdNode.next = fourthNode;
fourthNode.next = fifthNode;
fifthNode.next = null;
*/

// Circular example
firstNode.next = secondNode;
secondNode.next = thirdNode;
thirdNode.next = fourthNode;
fourthNode.next = fifthNode;
fifthNode.next = secondNode;

/* 
    Create two pointers: slowNode and fastNode
    slowNode moves one step at a time while fastNode moves two steps ahead
*/
function linkedListIsCircular(node) {
    if (!node) { // empty list
        return false;
    }

    var slowNode = node;
    var fastNode = node.next ? node.next.next : null;
    while (slowNode && fastNode) {
        console.log("slow: " + slowNode.value);
        console.log("fast: " + fastNode.value);

        if (fastNode == slowNode) {
            return true;
        }

        slowNode = slowNode.next;
        fastNode = fastNode.next ? fastNode.next.next : null;
    }  

    return false;
}

var result = linkedListIsCircular(firstNode);
console.log(result);


//2) Print Linked List Elements in Reverse order. Write a program to print elements of a linked list in reverse order by using same single linked list.

function reverseLinkedList(node) {
    var curr = node;
    var prev = null;

    while (curr) {
        var next = curr.next;
        curr.next = prev;
        
    }
    
}

var reverseResult = reverseLinkedList(firstNode);
console.log(reverseResult);

/*
// Carol's 01 -- two variants

// start node is part of a LL that has a loop
let linkedListIncludesALoop = (node) => {
    let fast = node.next;
    let slow = node;
    let move = () => {  
        slow = slow.next;
        if(fast.next){
            fast = fast.next.next;
        }else{
            return false;
        }
    }
    while(fast && fast.next && slow!==fast){
        move();
    }
    if(slow===fast){
        return true;
    }
    return false;
}


// start node is IN a circular LL
function linkedListIsCircular( node ) {
    let start = node;
    let fast = node.next;
    let slow = node;
    let move = () => {
        slow = slow.next;
        if(fast.next){
            fast = fast.next.next;
        }else{
            return false;
        }
    }
    while(fast && fast.next && slow!==start && fast!==slow){
        move();
    }
    if(fast===start || (fast && fast.next===start)){
        return true;
    }
    return false;
}


// Carol's 02 -- note: assumes non-cyclical LL
let printLLInReverse = (node) => {
    let returnValues = [];
    returnValues.push(node.value);
    while(node.next){
        node = node.next;
        returnValues.push(node.value);
    }
    return returnValues.reverse();
}


// Peter's solution to #2
// also presumes a normal linked list with no cycles.

var firstNode = { value: 1, next: null },
    secondNode = { value: 2, next: null },
    thirdNode = { value: 3, next: null },
    fourthNode = { value: 4, next: null },
    fifthNode = { value: 5, next: null };

firstNode.next = secondNode;
secondNode.next = thirdNode;
thirdNode.next = fourthNode;
fourthNode.next = fifthNode;
fifthNode.next = null;

function reversePrintList(node) {

    outstr = "";
    if (node.next != null) {
        outstr += reversePrintList(node.next) + " " + node.value;
    } else {
        return node.value;
    }

    return outstr;
}

console.log(reversePrintList(firstNode));

Sample run:

Peters-MacBook-Pro-2:MEETUP_GROUP peter$ node reverse_print_linked_list.js
5 4 3 2 1

/////////////////////////////////
//// Jack
////////////////////////////////////
1)
function linkedListIsCircular( node ) {
  var firstRunner = node;
  var secondRunner = node && node.next ? node.next.next : null;

  while ( firstRunner && secondRunner ) {
    if ( firstRunner === secondRunner ) {
      return true;
    }

    firstRunner = firstRunner.next;
    secondRunner = secondRunner.next ? secondRunner.next.next : null
  }
  
  return false;
}

2)
function printReverse( node ) {
  if ( ! node ) {
    return
  }
  
  printReverse( node.next );
  console.log( node.value );
}

*/
