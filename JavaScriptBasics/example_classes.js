console.log("classes with constructor");
(function() {
	function A() {
		this.fieldA = 'A';
		this.functionA = function(s) {
			console.log(s + "functionA : fieldA=" + this.fieldA);
		}
	};
	//A.superclass = Object.prototype;

	function B() {
		this.fieldB = 'B';
		this.functionB = function(s) {
			console.log(s + "functionB : fieldB=" + this.fieldB);
		};
	}
	B.prototype = new A;

	function C() {
		this.fieldC = 'C';
		this.functionC = function(s) {
			console.log(s + "functionC : fieldC=" + this.fieldC);
		};
	}
	C.prototype = new B;

	var a = new A;
	var b = new B;
	var c = new C;

	console.log("typeof a" + (typeof a));
	console.log("typeof b" + (typeof b));
	console.log("typeof c" + (typeof c));
	
	console.log("a instanceof A :"+(a instanceof A));
	console.log("a instanceof B :"+(a instanceof B));
	console.log("a instanceof C :"+(a instanceof C));

	console.log("b instanceof A :"+(b instanceof A));
	console.log("b instanceof B :"+(b instanceof B));
	console.log("b instanceof C :"+(b instanceof C));

	console.log("c instanceof A :"+(c instanceof A));
	console.log("c instanceof B :"+(c instanceof B));
	console.log("c instanceof C :"+(c instanceof C));

}());

console.log("classes with Object.create");
var A = Object.create(Object.prototype,{
		fieldA : { value: 'A'},
		functionA : { value: function(s) {console.log(s + "functionA : fieldA=" + this.fieldA)}}
	}
);
//(function() {
	/*
	var A = Object.create(Object.prototype);
	A = Object.defineProperty(A,"functionA", { value: function(s) {console.log(s + "functionA : fieldA=" + this.fieldA)}});
	A = Object.defineProperty(A,"fieldA",{ value: 'A'});
	*/
	//A.superclass = Object.prototype;

	var B = Object.create(A, {
		fieldB : {value : 'B'},
		functionB : {value: function(s) {
			console.log(s + "functionB : fieldB=" + this.fieldB);
			}
		}
	});
	

	var C = Object.create(B, {
		fieldC : {value : 'C'},
		functionC : {value : function(s) {
				console.log(s + "functionC : fieldC=" + this.fieldC);
			}
		}
	});

	var a = Object.create(A);
	var b = Object.create(B);
	var c = Object.create(C);

	/*
	console.log("a instanceof A :"+(a instanceof A));
	console.log("a instanceof B :"+(a instanceof B));
	console.log("a instanceof C :"+(a instanceof C));

	console.log("b instanceof A :"+(b instanceof A));
	console.log("b instanceof B :"+(b instanceof B));
	console.log("b instanceof C :"+(b instanceof C));

	console.log("c instanceof A :"+(c instanceof A));
	console.log("c instanceof B :"+(c instanceof B));
	console.log("c instanceof C :"+(c instanceof C));
	*/
//}());




/*
var A1 = {
	fieldA1 : 1,
	functionA1 : function() {}
}
var B1 = function() {};
B1.fieldB1 = 2;
B1.functionB1 = function() {};

B1.prototype = A1;

var a1 = Object.create(A1);
var b1 = new B1;
*/

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