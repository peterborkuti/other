console.info("inheritance with constructor");

(function() {
	function A() {	}


	function B() {	}
	B.prototype = new A;

	function C() {	}
	C.prototype = new B;

	var a = new A;
	var b = new B;
	var c = new C;

	console.log("a instanceof A :"+(a instanceof A));
	console.log("a instanceof B :"+(a instanceof B));
	console.log("a instanceof C :"+(a instanceof C));

	console.log("b instanceof A :"+(b instanceof A));
	console.log("b instanceof B :"+(b instanceof B));
	console.log("b instanceof C :"+(b instanceof C));

	console.log("c instanceof A :"+(c instanceof A));
	console.log("c instanceof B :"+(c instanceof B));
	console.log("c instanceof C :"+(c instanceof C));

}());

console.info("inheritance with Object.create");

(function() {

	var A = Object.create(Object.prototype);

	var B = Object.create(A);

	var C = Object.create(B);

	var a = Object.create(A);
	var b = Object.create(B);
	var c = Object.create(C);

	console.log("A.isPrototypeOf(a): "+(A.isPrototypeOf(a)));
	console.log("B.isPrototypeOf(a): "+(B.isPrototypeOf(a)));
	console.log("C.isPrototypeOf(a): "+(C.isPrototypeOf(a)));
	
	console.log("A.isPrototypeOf(b): "+(A.isPrototypeOf(b)));
	console.log("B.isPrototypeOf(b): "+(B.isPrototypeOf(b)));
	console.log("C.isPrototypeOf(b): "+(C.isPrototypeOf(b)));
	
	console.log("A.isPrototypeOf(c): "+(A.isPrototypeOf(c)));
	console.log("B.isPrototypeOf(c): "+(B.isPrototypeOf(c)));
	console.log("C.isPrototypeOf(c): "+(C.isPrototypeOf(c)));

}());

console.info("functional inheritance");

(function() {

	var A = function (id) {
                return {}
            }

	var B = function (id) {
		var that = A(id);
		return that
	};
	

	var C = function (id) {
		var that = B(id);
		return that
	};

	var a = A(1);
	var b = B(2);
	var c = C(3);

	console.log("a");
	console.log(a);
	console.log("b");
	console.log(b);
	console.log("c");
	console.log(c);

}());
