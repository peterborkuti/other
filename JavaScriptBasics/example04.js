// object literal

var obj = {};
var obj = { 'field1' : 'stringvalue' };
var obj = { 'field1' : 1,
			'field2' : 'Hello',
			'field3' : true
		  };
var obj = { 'field1' : 
			{ 
				'field2' : 'Hello'
			},
			'field3' : true
		  };

//retrieving fields

console.log(obj['field3']);
console.log(obj.field3);
console.log(obj['field3']['field2']);
console.log(obj['field3'].field2);

for (var i in obj) {
	console.log("obj["+i+"]="+ obj[i]);
};

//adding/updateing fields

obj['newfield1'] = 10;
obj.newfield2 = 20;

//deleting fields

obj.newfield2 = undefined;
delete obj['newfield1'];

//checking fields

var obj = { 'a' : 1, 'b' : 1, 'c' : 1 };
obj.b = undefined;
delete obj.c;

console.log('a' in obj);
console.log(obj.a !== undefined);
console.log(typeof (obj.a) !== 'undefined');

console.log('b' in obj);
console.log(obj.b !== undefined);

console.log('c' in obj);
console.log(obj.c !== undefined);



