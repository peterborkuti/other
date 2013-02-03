// Crockford's module pattern

var module = function() {
	var privateVar = 1;
	var privateFunc1 = function() {
		console.log("privateVar="+privateVar);
		privateVar += 1;
	}
	
	var privateFunc2 =  function(s) {
			console.log("publicFunc:"+s);
	};
	
	return {
		publicFunc1 : privateFunc1,
		publicFunc2 : privateFunc2
	};
}


var o = module();

console.log(o.privateVar);
o.publicFunc2("Hello");
o.publicFunc1();
o.publicFunc1();

var oo = module();
oo.publicFunc1();

