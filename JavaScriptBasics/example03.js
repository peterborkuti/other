var a = 1;
var b = 
		"Hello";
var c 
		= 
		false;
var d = 10.5;
var e = 'Nice';
var f = 'Hello';
var g = "1";
console.group("+");
console.log(a);
console.log(a+d);

console.log(b+e);
console.log(a+c);

console.log(a+b);

console.log(a+d+" Ft");
console.groupEnd();

console.log(d+" floor = " + Math.floor(d));

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

