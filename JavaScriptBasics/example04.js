var boy = {
			'name': 'Joe',
			'age': 10
	};
	
console.log(boy);

console.log("boy['name'] = " + boy['name']);
console.log("boy.name = " + boy.name);

boy['name']='Jack';

console.log(boy['height']);

boy['weight']=68;

console.log(boy);

boy['age']=undefined;

console.log(boy);

for ( var i in boy) {
	console.log(i + " ---- " + boy[i]);
}

delete boy['age'];

for ( var i in boy) {
	console.log(i + " ---- " + boy[i]);
}
