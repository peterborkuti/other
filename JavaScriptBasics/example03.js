// numbers

var a = 1;
console.log(a);
var A = 10.5;
console.log(a+A);

// strings

var a = "Hello";
var b = 'Nice';
var c = 1;
console.log(a+b+c);

//loose typeing, boolean

var a = false;
console.log(a);
a = -0.1;
console.log(a);
a = "Hello";
console.log(a);

var a 
= 
		27.85;
console.log(a+" floor = " + Math.floor(a));

if (c) {
	console.log("YES");
} else {
	console.log("NO");
};

for (var i=0; i<3; i+=1) {
	console.log(i);
};

console.group("== vs ===");

if (b == f) {
	console.log(b);
}

if (g == a) {
	console.log(g+"=="+a);
}

if (g === a) {
	console.log(g+"==="+a);
}

console.groupEnd();
//say("Bad");

function say(s) {
	console.log("I say " + s);
}

say("Good");

