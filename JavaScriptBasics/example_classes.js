console.log("classes with constructor");

(function() {
	function A() {
		this.fieldA = 'A';
		this.functionA = function(s) {
			console.log(s + "functionA : fieldA=" + this.fieldA);
		}
	};

	function B() {
		this.fieldB = 'B';
		this.functionB = function(s) {
			console.log(s + "functionB : fieldB=" + this.fieldB);
		};
	}
	B.prototype = new A;

	function C() {
		this.fieldC = 'C';
		this.functionC = function(s) {
			console.log(s + "functionC : fieldC=" + this.fieldC);
		};
	}
	C.prototype = new B;

	var a = new A;
	var b = new B;
	var c = new C;

	console.log("typeof a" + (typeof a));
	console.log("typeof b" + (typeof b));
	console.log("typeof c" + (typeof c));
	
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

console.log("classes with Object.create");

(function() {

	var A = Object.create(Object.prototype,{
			fieldA : { value: 'A'},
			functionA : { value: function(s) {console.log(s + "functionA : fieldA=" + this.fieldA)}}
		}
	);

	var B = Object.create(A, {
		fieldB : {value : 'B'},
		functionB : {value: function(s) {
			console.log(s + "functionB : fieldB=" + this.fieldB);
			}
		}
	});
	

	var C = Object.create(B, {
		fieldC : {value : 'C'},
		functionC : {value : function(s) {
				console.log(s + "functionC : fieldC=" + this.fieldC);
			}
		}
	});

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

