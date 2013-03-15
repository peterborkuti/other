console.log(!!0 + "," + !!-0 + "," + !!""  + "," + 
			!!null  + "," + !!undefined  + "," + 
			!!false  + "," + !!NaN );

var bad = new Boolean("false");
console.log("bad:" + bad);

var t = true;
var f = false;

console.log(t && f);
console.log(t && "Hello");

console.log(t || f);
console.log(f || "Hello");

var mx;
console.log(mx || 500);

var obj = { x : 1 };
console.log(obj && obj.x);

console.log(mx.x);



