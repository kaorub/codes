// The function increments value from 1 by one — Edit
function Increment() {
	var i = 1;
}
Increment.prototype.toString = function() {
	return i++;
};
var increment = new Increment();
alert(increment); // 1
alert(increment); // 2
alert(increment + increment); // 7