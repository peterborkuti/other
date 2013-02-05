console.log("typeof null: " + typeof null);
console.log("typeof undefined: " + typeof undefined);

console.log(typeof obj);

var obj = 1;
console.log(typeof obj);

obj = {};
console.log(typeof obj);
console.log(typeof obj.method1);

obj.prototype.method1 = function() {};
console.log(typeof obj.method1);

if (obj.mymethod2 == null) {
  console.log('obj.mymethod2 == null');
} else {
  console.log('obj.mymethod2 != null');
};

if (obj.mymethod2 === null) {
  console.log('obj.mymethod2 === null');
} else {
  console.log('obj.mymethod2 !== null');
};

if (obj.mymethod2 === undefined) {
  console.log('obj.mymethod2 === undefined');
} else {
  console.log('obj.mymethod2 !== undefined');
};

