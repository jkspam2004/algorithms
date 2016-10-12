function Node(data, left, right){
	this.data = data
	this.left = left || null
	this.right = right || null
}
function BinaryTree(){
	this.root = null;
	this.length = 0;
}
BinaryTree.prototype.add = function(data){
	var node = new Node(data);
	this.length += 1;
	if (this.root === null){
		return this.root = node;
	}
	var currentNode = this.root;
	var parentNode = null;
	while(currentNode) {
		parentNode = currentNode;
		if(data < currentNode.data){
			currentNode = currentNode.left
			if(currentNode === null){
				return parentNode.left = node;
			}
		} else {
			currentNode = currentNode.right
			if(currentNode === null){
				return parentNode.right = node;
			}
		}
	}
}
BinaryTree.prototype.search = function(data){
	var currentNode = this.root;
	var parentNode = null;
	if(currentNode.data == data){
		Nodes = {
			currentNode: currentNode,
			parentNode: parentNode
		}
		return Nodes
	}
	while(currentNode) {
		if(currentNode.data === data){
			Nodes = {
				currentNode: currentNode,
				parentNode: parentNode
			}
			return Nodes
		}
		parentNode = currentNode
		if(data < currentNode.data){
			if(currentNode.left === null){
				return false
			}
			currentNode = currentNode.left
		} else {
			if(currentNode.right === null){
				return false
			}
			currentNode = currentNode.right
		}
	}
} 