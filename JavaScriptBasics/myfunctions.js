function object(o){
	var F = function () {};
	F.prototype = o;
	return new F();
}