var IncreaseProbabilityIndexIterator = function(length) {
	this.update(length);
	this.curr = -1;
}

IncreaseProbabilityIndexIterator.prototype.get = function() {
	return this.curr;
}

IncreaseProbabilityIndexIterator.prototype.next = function() {
	var random_pointer = parseInt(Math.random() * this.indexes.length);
	this.curr = this.indexes[random_pointer];
	return this.get();
}

IncreaseProbabilityIndexIterator.prototype.update = function(new_length) {
	this.indexes = [];
	for (var i = 0; i < new_length; i++){
		for (var j = 0; j <= i; j++) {
			this.indexes.push(i);
		};
	};
}