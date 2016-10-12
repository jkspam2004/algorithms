Node.prototype.remove = function(data, parentNode){
    // We are now at the current node
    // parent node is the the node we used to get to this node. We'll go over 
    // why we need to keep track of the parent node below. 
    // If the value of the node we're trying to delete is less than the value of the current node, we go left
    if(data < this.val){
        if(this.leftChild != null){
            // If its less than the value of the current node, we call this function
            // on the left node. 
            this.leftChild.remove(data, this);
        }
    } else if (data > this.val){
        if(this.rightChild != null){
            // If its greater than the value of the current node, we call this function
            // on the right node
            this.rightChild.remove(data, this);
        }
        // We will continue to traverse through this tree until we reach the 
        // node with the value we are wan't to delete. All of the actual deleting functionality
        // will go within this else 
    } else {
        // This is the toughest case, where we have two children. We check to see whether it has 
        // two children by checking to see if either child is equal to null. If they are both != null
        // we know that this node has two children. 
        if(this.leftChild != null && this.rightChild != null){
            // All we're going to do here is find the minimum value of the right branch, and transfer the 
            // minimum value of that node to our current node. This works because the smallest node on the right 
            // branch will have a larger value than any node on our left branch, so the tree is still valid. 
            this.val = this.rightChild.getMin();
            // Once we move up the minimum value all we have to do is make sure to get rid of the minimum node that 
            // we just duplicated. Now that we know that this node will have at most one child, removing it won't be
            // so difficult. 
            this.rightChild.remove(this.val, this);
        } else if(parentNode.leftChild == this){
            // This is why we pass in the parent node as we iterate through the tree. When we wan't to remove a node
            // from our tree we have to make sure that we update that node's parent.
            // We'll do a quick check here to see on what side of the parentNode our current node is on. Once we find 
            // out which side of the parentNode we are on, it's as easy as setting the current nodes single child or null,
            // depeding on whether our node has any children, to a temporary variable. Then we update our parentNode with our
            // temporary variable. 
            if(this.leftChild != null){
                var tempNode = this.leftChild;
            } else {
                var tempNode = this.rightChild;
            }
            parentNode.leftChild = tempNode;

        } else if(parentNode.rightChild == this){
            if(this.leftChild != null){
                var tempNode = this.leftChild;
            } else {
                var tempNode = this.rightChild;
            }
            parentNode.rightChild = tempNode;
        }
    }
}

BST.prototype.remove = function(valToRemove){
    if(this.root != null){
        if(this.root.val == valToRemove){
            // leave this logic for last, it's pretty weird if you haven't seen 
            // the rest of function. The bulk of the remove functionality is on the 
            // the node class so I just needed a temporary node to hold some values for me. 
            var tempNode = new Node();
            tempNode.leftChild = this.root;
            this.root.remove(valToRemove, tempNode);
            this.root = tempNode.leftChild;
        } else {
            this.root.remove(valToRemove);
        }
    }
} 
