//function statement
function say(s) {
	return "I say "+s;
}

console.log(say("Hello"));
console.log(say(1));
console.log(say());
console.log(say("Hello","Nice"));

console.log("globals");

var n = 1;
function f1(){
	console.log(n);
	n = 2;
	console.log(n);
}
f1();
console.log(n);

console.log("globals and locals I.");

var n = 1;
function f2_1(){
	console.log(n);
	var n = 2;
	console.log(n);
}
f2_1();
console.log(n);

console.log("globals and locals II.");

var n = 1;
function f2_2(){
	var n = undefined;
	console.log(n);
	n = 2;
	console.log(n);
}
f2_2();

console.log("variables - function scope");

function f3_1(){
	console.log(i);
}

function f3_2(){
	console.log(i);
	for (var i=0; i<3; i++){
		console.log(i);
	}
	console.log(i);
}
f3_2();

console.log("function definition, expression")

function f4_1() {
	return 1;
};

var f4_2 = function() {
	return 1;
};

console.log("immediately invoking");

var f5_1 = function() {
	return Math.random();
};

var f5_2 = (function() {
	return Math.random();
})();

var f5_3 = (function() {
	return function() { return Math.random(); };
})();

console.log(f5_1());
console.log(f5_1());

//console.log(f5_2());
console.log(f5_2);

console.log(f5_3());
console.log(f5_3());

console.log("Nested function");

function f6(s) {
	function g6() {
		console.log("g6.s=" + s);
	}
	g6();
};

f6("Hello");

console.log("Object and functions");

var obj = {
	a : 10,
	f : function (s) {
			console.log("obj.f()="+s+","+a);
		}
}

obj.f("hello");

function f() {
	a : 1,
	f : function() {
		console.log(a);
	}
}

