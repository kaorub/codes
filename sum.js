function sum(a) {
	var result = 0;
	result += function(b) {
		return result + sum(b);
	};
	return result;
}