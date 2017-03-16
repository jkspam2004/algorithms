//Algo book v1.0.1  |  Page 130
// console.log('---------------hashCode---------------');
//This is a given function, don't worry too much about implementation
//Hashcode method, returns a somewhat arbitrary number based on the string that you called it on.
//Notice that it's a String.prototype.method instead of just a function()
String.prototype.hashCode = function() {
  var hash = 0, i, chr, len;
  if (this.length === 0) return hash;
  for (i = 0, len = this.length; i < len; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};
// console.log('---------------Node---------------');
//Node class for the SLL in each spot of the array
function Node (key, value) {
    //Key of the object, .find takes in the key
    this.key   = key;
    //Value of the object, using .find on the key will return this
    this.value = value;
    //Next node in the list
    this.next  = null;
}
//Node Add method
Node.prototype.add = function (key, value) {
    //IF there exists a next, we want to go next instad of creation
    if (this.next) {
        //This.next exists, go to next
        this.next.add(key, value);
    //IF there does not exist a next, we shall make it next
    } else {
        //End of list so we make it
        this.next = new Node(key, value);
    }
};
//Node find method
Node.prototype.find = function (key) {
    //If this node is the key we want, return this.value
    if (this.key == key) {
        //return value
        return this.value;
    //At this point, this is not what we are looking for
    //So we can move to the next node and call this function on it.
    } else if (this.next) {
        //go to next
        return this.next.find(key);
    //Else, we return false because it's not the key, and we have no next.
    } else {
        //return false
        return false;
    }
};
//Node remove method
Node.prototype.remove = function (key, parent) {
    //this starts on the second node
    //If this is the key we're looking for
    if (this.key == key) {
        //Set the parent's next to this.next
        //Keep in mind we're starting from the 2nd node
        parent.next = this.next
        //return the value after removing
        return this.value;
    //IF there is a next and there's this isn't what we're looking for
    } else if (this.next) {
        //we want to go next to see what's up
        return this.next.remove(key, this);
    //otherwise, not the key, and nowhere to go
    } else {
        //we end by returning false
        return false;
    }
};
//Used in the worse implementation of grow
Node.prototype.reAdd = function (hash) {
    //just creates new add
    hash.add(this.key, this.val);

    //if there is a next, we want to add that too.
    if (this.next) {
        this.next.reAdd(hash)
    }
};
//Used in the better implementation of grow
Node.prototype.addNode = function (hash, parent) {
    //This gives negative sometimes, will keep positive for now
    var i = Math.abs(this.key.hashCode()%hash.capacity);
    //IF something exists in the spot already
    if (hash.table[i]) {
        //we know there's a collision so we up collisions
        hash.collisions++;
        //we set the current node to the one here
        var current = hash.table[i];
        //Traverse down the list until we're at the last one
        while(current.next) {
            current = current.next;
        }
        //Set the last.next to the current node we're looking at
        //so as to add to the SLL
        current.next = this;
    //IF there isn't anything, we can just point it at this node.
    } else {
        //Pointing at this node
        hash.table[i] = this;
    }
};
// console.log('---------------Hashes---------------')
//Hashmap class
function hashMap(capacity) {
    //Capacity. This is the largest the array will ever be
    this.capacity   = capacity;
    //Makes a new array of length capacity
    //Since this is JS, we don't really need it, Arrays grow
    this.table      = new Array(capacity);
    //Number of collisions currently
    this.collisions = 0;
}
//Adds a node to the hashMap
hashMap.prototype.add = function (key, val) {
    //This gives negative sometimes, will keep positive for now
    var i = Math.abs(key.hashCode()%this.capacity);
    //Doing the above method gives us the index relevant to the key
    if (!this.table[i]) {
        //if there isnt a thing
        this.table[i] = new Node(key, val);
    //There exists something at this.table[i]
    } else {
        //if there's something there, that means we have a collision
        this.collisions++;
        //See Node.prototype.add (above in the Node.prototypes)
        this.table[i].add(key, val);
    }

    //This below will check after the adding is done, to see
    //how many collisions we have, I've set
    //IF there are over 100 collisions total in this hashMap, we want to grow
    //So we use the better method of growing

    // if (this.collisions > 100) { this.growGood(); }
};
//Finds the node with the key, returns the value
hashMap.prototype.find = function (key) {
    //Doing the above method gives us the index relevant to the key
    var i = Math.abs(key.hashCode()%this.capacity);
    //If there exists a node at table[i]
    if (this.table[i]) {
        //See Node.prototype.find
        return this.table[i].find(key);
    }
    //at this point, table[i] has no node
    return false;
};
//Remove method with key
hashMap.prototype.remove = function (key) {
    //Doing the above method gives us the index relevant to the key
    var i = Math.abs(key.hashCode()%this.capacity);
    //if there exists a node at table[i]
    //we check the first one manually because of the way we set up
    //the node remove
    if (this.table[i]) {
        //if the key exists
        if (this.table[i].key == key) {
            //we take the value for storage so we can return it
            var value = this.table[i].value;
            //we take the pointer and point it at the 2nd thing
            this.table[i] = this.table[i].next;
            //return the value
            return value;
        //such is the case where the first is not the key
        } else {
            //we start the remove method on the 2nd node
            return this.table[i].next.remove(key, this.table[i]);
        }
    }
    //return false because it didn't pass the check for if this.table[i]
    return false;
};
//The worse implementation of grow, also doesnt take into account collisions
hashMap.prototype.grow = function (callback) {
    //Increase the capacity
    this.capacity = this.capacity + Math.floor(this.capacity/2);
    //create a temporary pointer to the table
    var temp = this.table;
    //make the table an empty table
    this.table = [];
    //go through array
    for (var i = 0; i < temp.length; i++) {
        //go through each existing sll
        if (temp[i]) {
            //see node readd method
            temp[i].reAdd(this);
        }
    }
};
//Better implementation of the grow functionality
hashMap.prototype.growGood = function (callback) {
    //set collisions to 0
    this.collisions = 0;
    //up the capacity
    this.capacity = this.capacity + Math.ceil(this.capacity/2);
    //Make temporary pointer to table
    var temp = this.table;
    //make a new table of updated capacity
    this.table = new Array(this.capacity);
    //Go through the original data
    for (var i = 0; i < temp.length; i++) {
        //IF so exists an SLL in the spot
        if (temp[i]) {
            //tmp is the first node
            var tmp = temp[i];
            //then we disconnect the first node by setting the pointer to the next
            temp[i] = temp[i].next;
            //then we make it a single node
            tmp.next = null;
            //Then we add the node to the list again
            tmp.addNode(this);
            //and we -1 so we can go back to check the next node
            i--;
        }
    }
};

