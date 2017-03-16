BST.prototype.isValid = function() {
	if (!this.root)
	{
		return true;  
	}
	if (!(this.root instanceof btNode))
	{ return false; }
	return this.root.isValid();
}

btNode.prototype.isValid = function(minBound, maxBound)
{
	 if (minBound===undefined)
	 { minBound = -Number.MAX_VALUE; } // this just returns the largest number possible in javascript
	 if (maxBound===undefined)
	 { maxBound =  Number.MAX_VALUE; } // this just returns the largest number possible in javascript

	 if (this.val< minBound) { return false; }
	 if (this.val>=maxBound) { return false; }

	 var valid = true;
	 if (this.left)
	 { valid = valid &&
	this.left.isValid(minBound, this.val);} // You update the maxBound as you go left 
	 if (this.right) {
	valid = valid &&
	this.right.isValid(this.val,maxBound);} // You update the minBound as you go right
	 return valid;
}

// console.log(b.isValid());
b.root.right.right = new btNode(5);
// console.log('this ' + b.root.val + ' should be smaller than  ' + b.root.right.val);
console.log(b.isValid());
