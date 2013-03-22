var a = [];
var a = [10,20,30];
for (var i=0; i<a.length; i++){
	console.log("a["+i+"]="+a[i]);
};

console.log(a.length);
a[a.length] = 40;

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
