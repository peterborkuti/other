// numbers, case-sensitivity

var a = 1;
console.log(a);
var A = 10.5;
console.log(a+A);
var b = Number("1");
console.log("parseInt('8')="+parseInt('8'));
console.log("parseInt('08')="+parseInt('08'));
console.log(3/0);
console.log(-3/0);
var c = 3/"hello";
console.log(c);
console.log(c !== c);
console.log(isNaN(c));


// strings, dynamic conversion

var a = " Hello ";
var b = 'Nice';
var c = 1;
console.log(a+b+c);
console.log(a.length);
console.log(a[0]);
console.log(":"+a.trim()+":");
var d = "\ud835\udc52"; // exponential:e
console.log(d);
console.log(d.length);

//loose/weak typeing, boolean

var a = false;
console.log(a);
a = -0.1;
console.log(a);
a = "Hello";
console.log(a);

//free-form language
//but see later!

var a 
= 
		27.85
console.log(a+" floor = " + Math.floor(a));

//c-style if

if (2>1) {
	console.log("YES");
} else {
	console.log("NO");
};

// == vs ===

if ("1" == 1) {
	console.log('"1" == 1');
}
if ((0.1 + 0.2) == 0.3) {
	console.log(
		"(0.1 + 0.2) == 0.3");
}
if ("1" !== 1) {
	console.log("'1' !== 1");
}
if (NaN !== NaN) {
	console.log("NaN !== NaN");
}

//c-style for, but see later!

for (var i=0; i<3; i+=1) {
	console.log(i);
};

//c-style switch 1

var a = 1;
switch(a) {
	case 1:
		console.log("case 1");
		break;
	case 2:
		console.log("case 2");
		break;
	default:
		console.log("default");
		break;
}

//c-style switch 2, strings!

var a = "nice";
switch(a) {
	case 1:
		console.log("case 1");
		break;
	case "nice":
		console.log("case 'nice'");
		break;
}

//c-style switch 3, ===

var a = "1";
switch(a) {
	case 1:
		console.log("case 1");
		break;
	case "1":
		console.log("case '1'");
		break;
	default:
		console.log("no luck");
}


//functions 1

say("Hello");

function say(s) {
	console.log("I say " + s);
}

say("Good");

//functions 2 - parameters 1

function tell(s1,s2) {
	console.log("I tell you more " + s1 + "," +s2);
}

tell("Good");
tell("Good","Bad");
tell("Good","Bad", "Other");

//functions 2 - parameters 2

function argTest() {
	for (var i=0; i<arguments.length; i++) {
		console.log(" arguments[" + i + "] = " + arguments[i]);
	}
}

argTest();
argTest("Good");
argTest("Good","Bad");
argTest("Good","Bad", "Other");

//primitive types

var types = [ 1, "x", true, null, undefined, NaN, +Infinity, -Infinity, {}, [] ];
for (i = 0; i< types.length; i++) {
	console.log(i + ": type=" + typeof(types[i]));
}	
/*
var s = "x";
var b = true;
var n = null;
var u = undefined;
var a = NaN;
var pi = +Infinity;
var ni = -Infinity;
var o = {};
var ar = [];
*/