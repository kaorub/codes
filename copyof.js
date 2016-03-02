// The function clones the given object and return result:
var obj = {one: 'true', two: 2, three: {one: 'false', two: 2, three: ['lol', 3, true, undefined]}};
var copied = CopyOf(obj);
function CopyOf(obj) {
	if (typeof obj !== 'Object') {
		return obj;
	}
	var copied = {};
	for (var i in obj) {
		copied[i] = CopyOf(obj[i]);
	}
	return copied;
}