//function statement
function say(s) {
	return "I say "+s;
}

console.log(say("Hello"));
console.log(say(1));
console.log(say());
console.log(say("Hello","Nice");

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
f2();
console.log(n);

console.log("globals and locals II.");

var n = 1;
function f2_2(){
	var n = undefined;
	console.log(n);
	n = 2;
	console.log(n);
}
f3();

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
