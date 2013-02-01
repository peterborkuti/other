var boy = {
			'name': 'Joe',
			'age': 10
	};
	
var girl = boy;
	
console.log(boy);
console.log(girl);

girl.name='Susan';

console.log(boy);
console.log(girl);

boy.name="Jack";
girl = object(boy);
girl.name="Lucy";

console.log(boy);
console.log(girl);

delete girl.name;
girl['hair']='blonde';

console.log(boy);
console.log(girl);

for (var i in girl) {
	console.log("girl."+i+" = " + girl[i]);
}

console.warn('------');

for (var i in girl) {
	if (girl.hasOwnProperty(i)) {
		console.log("girl."+i+" = " + girl[i]);
	}
}

console.group("girl");
console.dir(girl);
console.groupEnd();

console.group("boy");
console.dir(boy);
console.groupEnd();

