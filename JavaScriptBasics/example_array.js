var a = [];
var a = [10,20,30];
for (var i=0; i<a.length; i++){
	console.log("a["+i+"]="+a[i]);
};

console.log(a.length);
a[a.length] = 40;
a.length = 2;
console.log(a);

a[10] = 100;
console.log(a.length);
for (var i=0; i<a.length; i++){
	console.log("a["+i+"]="+a[i]);
};

var m = [ [10,20], [30,40] ];
console.log(m[0][0]);

var mm = [ [10,20], 30, [40,50,60] ];
console.log('mm[1]=' + mm[1]);
console.log('mm[2][1]=' + mm[2][1]);
console.log('mm[2,1]=' + mm[2,1]);

var mmm = [ 1, "Hello", true,
			{a:1, b:3} ];
			
console.log(mmm[3].a);
console.log(mmm[3]['a']);

console.log("slice");

var a = [0,1,2,3,4,5,6,7,8,9];
console.log(a.slice(0));
console.log(a.slice(0,1));
console.log(a.slice(2));
console.log(a.slice(2,5));
console.log(a.slice(1));
console.log(a.slice(-1));
console.log(a.slice(-3,-1));
console.log(a.slice(3,-2));

/*
slice(from,to_excluded)
[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
[ 0 ]
[ 2, 3, 4, 5, 6, 7, 8, 9 ]
[ 2, 3, 4 ]
[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
[ 9 ]
[ 7, 8 ]
[ 3, 4, 5, 6, 7 ]
*/

console.log("splice");

var a = [0,1,2,3,4,5,6,7,8,9];
console.log(a.splice(0));
console.log(a);
var a = [0,1,2,3,4,5,6,7,8,9];
console.log(a.splice(0,3));
console.log(a);
var a = [0,1,2,3,4,5,6,7,8,9];
console.log(
a.splice(2,5,10,20,30,40,50));
console.log(a);

/*
splice(from,pieces,new elements, , ,)

[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
[]
[0, 1, 2]
[3, 4, 5, 6, 7, 8, 9]
[2, 3, 4, 5, 6]
[0, 1, 10, 20, 30, 40, 50, 7, 8, 9]

*/
console.log("array-like objects");

var a = { 0: 0, 1: 10, 2: 20 };
a.length = 3;
for (i = 0; i < a.length; i++) {
	console.log("a[i] = " + a[i]);
}
//console.log(a.slice(0));

var a = { 0: 0, 1: 10, 2: 20 };
a.length = 3;
a=Array.prototype.slice.apply(a,[0]);
console.log(a.slice(0));

console.log("Arrays are objects");

var a = [0,1,2];
a.myField = 'a';

console.log("a.myField = "+a.myField);

