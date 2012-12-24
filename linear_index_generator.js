var LinearIndexIterator = function(length) {
	this.len = length;
	this.curr = -1;
}

LinearIndexIterator.prototype.get = function() {
	return this.curr;
}

LinearIndexIterator.prototype.next = function() {
	this.curr = (this.curr + 1) % this.len;
	return this.get();
}

LinearIndexIterator.prototype.update = function(new_length) {
	this.len = new_length;
}
