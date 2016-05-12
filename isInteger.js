function isInteger(x) {
	return (typeof x == 'number' && x % 1 === 0);
	// return (x^0) === x;
}