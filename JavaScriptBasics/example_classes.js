console.log("A");

function A() {
}

A.prototype = Object.create(Object.prototype);
A.prototype.constructor = A;

function B() {
}

B.prototype = Object.create(A);
B.constructor = B;

function C() {
}

C.prototype = Object.create(B);
C.constructor = C;

var a = new A;
var b = new B;
var c = new C;

/*

console.log("class01")

function class01(p) {
	var c = Object.create(class01.methods);
	c.p = p;
	return p;
}

class01.methods = {
	print : function () { console.log(this.p) },
	toString : function () { return "{ class01.p = " + this.p + " }" }
}

var c01_1 = class01(10);
var c01_2 = class01(20);
console.log(c01_1);
console.log(c01_2);

console.log("Class02")

function Class02(p) {
	this.p = p;
}

Class02.prototype = {
	print : function () { console.log(this.p) },
	toString : function () { return "{ Class02.p = " + this.p + " }" }
}

var c02_1 = new Class02(10);
var c02_2 = new Class02(20);
console.log(c02_1);
console.log(c02_2);

console.log("Class03")

function Class03(p) {
	this.p = p;
}

Class03.prototype.print = function () { console.log(this.p) };
Class03.prototype.toString = function () { return "{ Class03.p = " + this.p + " }" }

var c03_1 = new Class03(10);
var c03_2 = new Class03(20);
console.log(c03_1);
console.log(c03_2);

*/