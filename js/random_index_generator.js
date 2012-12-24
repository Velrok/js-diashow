var RandomIndexIterator = function(length) {
	this.len = length;
	this.curr = -1;
}

RandomIndexIterator.prototype.get = function() {
	return this.curr;
}

RandomIndexIterator.prototype.next = function() {
	this.curr = parseInt(Math.random() * this.len);
	return this.get();
}

RandomIndexIterator.prototype.update = function(new_length) {
	this.len = new_length;
}