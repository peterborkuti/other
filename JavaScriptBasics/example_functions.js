console.info ("function statement - parameters");

function say(s) {
	return "I say "+s;
}

console.log(say("Hello"));
console.log(say(1));
console.log(say());
console.log(say("Hello","Nice"));

/*
I say Hello
I say 1
I say undefined
I say Hello
*/

console.info("globals");
(function() {

var n = 1;
function f1(){
	console.log(n);
	n = 2;
	console.log(n);
}
f1();
console.log(n);

}());
/*
1
2
2
*/
console.info("globals and locals I.");

(function() {

var n = 1;
function f2_1(){
	console.log(n);
	var n = 2;
	console.log(n);
}
f2_1();
console.log(n);

}());
/*
undefined
2
1
*/

console.info("globals and locals II.");

(function() {

var n = 1;
function f2_2(){
	var n = undefined;
	console.log(n);
	n = 2;
	console.log(n);
}
f2_2();

}());

/*
undefined
2
*/

console.info("variables - function scope");

(function() {

function f3_1(){
	console.log(i);
}

function f3_2(){
	console.log(i);
	for (var i=0; i<3; i++){
		console.log(i);
	}
	console.log(i);
	//f3_1();
}
//f3_1();
f3_2();

}());

/*
when calling f3_1:
ReferenceError: i is not defined

undefined
0
1
2
3
*/

console.info("function statement - hoisting I");

(function() {

console.log(say1("Hello - before"));

function say1(s) {
	return "I say1 "+s;
}

console.log(say1("Hello - after"));

}());

console.info("function statement - hoisting II");

(function() {

console.log(say2("Hello - before"));

function say1() {}

function say2(s) {
	say1();
	say3();
	return "I say1 "+s;
}

function say3() {}

console.log(say2("Hello - after"));

}());

console.info("function expression - hoisting III");

(function() {

//TypeError: say2 is not a function
//console.log(say2("Hello - before"));

var say2 = function (s) {
	return "I say2 "+s;
}

console.log(say2("Hello - after"));

}());

//function expression - hoisting III

(function() {
/*
var say4 = function say4(s) {
	//"Mozilla error: invalid scope variables" when call
	console.log(typeof say4);
};

say4();
//this OK:
var say4 = function (s) {
	console.log(typeof say4);
};

say4();
*/

}());

console.info("immediately invoking");
(function() {

var f5_1 = function() {
	return Math.random();
};

var f5_21 = function() {
	return Math.random();
}();

var f5_22 = (function() {
	return Math.random();
}());

var f5_23 = (function() {
	return Math.random();
})();

(function () {
	var V = "DISAPPEAR";
	console.log("Invoked");
}());

/*
function () {
	console.log("Imm. inv. - bad");
}();
*/

}());

console.info("return");

(function() {

var r0_1 = function () {}
console.log("r0_1 = " + r0_1());
console.log("new r0_1 = " + (new r0_1()));

var r0_2 = function () {
	return;
}
console.log("r0_2 = " + r0_2());
console.log("new r0_2 = " + (new r0_2()));

var r1 = function () {
	return 1;
}
console.log("r1 = " + r1());
console.log("new r1 = " + (new r1()));

var r2 = function () {
	return { "a":1, "b":2 };
}
console.log("r2 = " + r2());

var r3 = function () {
	return [ 1,2,3 ];
}
console.log("r3 = " + r3());

var f5 = (function() {
	return function() { 
		return Math.random()
	}
})();
console.log("f5="+f5());
console.log("f5="+f5());

}());
/*

r0_1 = undefined
new r0_1 = [object Object]
r0_2 = undefined
new r0_2 = [object Object]
r1 = 1
new r1 = [object Object]
r2 = [object Object]
r3 = 1,2,3
f5=0.7421820680177672
f5=0.7931443870571057

*/

console.info("Nested function");
(function() {

function f6(s) {
	var i = 10;
	function g6() {
		console.log("g6.s+i=" + s + i);
	}
	g6();
};

f6("Hello");

}());

console.info("Closures I");
(function() {

var c0_0 = function () {
	console.log("I am in c0_0")
}
c0_0();

var c0_1 = function () {
	function c0_11() {
		console.log("I am in c0_1")
	}
	c0_11();
}
c0_1();

var c0_2 = function () {
	function c0_21() {
		console.log("I am in c0_21")
	}
	return c0_21;
}
var c0_22 = c0_2();
c0_22();
c0_2()();

var c0_3 = function (s) {
	function c0_31() {
		console.log(
			"I am in c0_31 " + s);
	};
	return c0_31;
}
var c0_32 = c0_3("Hello");
c0_32();
console.log(c0_32.toString());

var c0_4 = function (s) {
	return function() {
		console.log(
			"I am in c0_4 return " + s);
	};
}
var c0_41 = c0_4("Hello");
c0_41();
console.log(c0_41.toString());

}());

console.info("Closures II");

(function() {

var c04 = function(start) {
	return function() {
		return start++;
	}
}

var c04_1 = c04(1000);
var c04_2 = c04(100);
console.log("c04_1" + c04_1());
console.log("c04_2" + c04_2());
console.log("c04_2" + c04_2());
console.log("c04_1" + c04_1());

}());

console.info("Closures III");

(function() {

var c05 = function(name,start,end,millis) {
	function count() {
		console.log("counter:"+name+" = " + start++)
		if (start<end) setTimeout(count, millis);
	}
	setTimeout(count, millis);
}

/*
var c05_1 = c05("1",100,150,100);
var c05_2 = c05("2",565,600,500);
var c05_3 = c05("3",1000,1100,1000);
*/

}());

console.info("Object and functions I");
(function() {

f.prop = 1;
function f() {
	console.log(f.prop);
}
f();

}());

console.info("Object and functions II");
(function() {

var obj = {
	x : 1,
	f : function() {
			return this.x
		}
}

console.log(obj);
console.log(obj.f());

}());

console.info("invocations of functions");
(function() {
console.log("Global:"+this);

function h1() {
	console.log(this);
}

console.log("function invocation");
h1();

console.log("method invocation");
var o1 = {
	f1 : h1
}
o1.f1();

var a1 = [0,1,h1];
a1[2]();

console.log("constructor invocation");
new h1;

console.log("indirect invocation");
h1.apply(null,[]);
h1.apply(this,[]);
var o2 = { x : 2 };
h1.apply(o2,[]);
var a2 = [10,20,30];
h1.apply(a2,[]);

}());

console.info("closure and this");
(function() {

var o3 = {
	y : 1
}

var h2 = function () {
	function h2_1() {
		console.log(this)
	}
	h2_1();
}

h2.apply(o3,[]);

var h3 = function () {
	var that = this;
	
	function h3_1() {
		console.log(that)
	}
	h3_1();
}

h3.apply(o3,[]);

}());