console.info ("function statement - parameters");
(function() {

function say(s) {
	return "I say "+s;
}

console.log(say("Hello"));
console.log(say(1));
console.log(say());
console.log(say("Hello","Nice"));

}());
/*
I say Hello
I say 1
I say undefined
I say Hello
*/

console.info ("function arguments I");
(function() {

function say() {
    for (var i in  arguments) {
        console.log(
            "arguments[" + i +
            "]:" + arguments[i]);
    }
}

say("Hello",1,true, {x:1, y:2});

}());

/*
arguments[0]:Hello
arguments[1]:1
arguments[2]:true
arguments[3]:[object Object]
*/

console.info ("function arguments II");
(function() {

function say(a,b) {
    var t = arguments[0];
    arguments[0] = arguments[1];
    arguments[1] = t;
    
    console.log(a + "," + b);
}

say(1,2);

}());

/*
2,1
*/

console.info ("function arguments III");
(function() {

function say() {
    //return arguments.slice(0,2);
}

console.log(say([0,1,2,3,4]));

}());

/*
TypeError: arguments.slice is not a function
*/

(function() {

function say() {
    var a = 
		Array.prototype.slice.apply(
			arguments,[0]);
    return a.slice(0,2);
}

console.log(say(0,1,2,3,4));

}());

/*
[ 0, 1]
*/

console.info("function : obj as param");

(function() {

function say(o) {
	o = o || {};
	o.a = o.a || 1;
	o.b = o.b || 2;
	console.log(o);
}

say();
say(null);
say(100);
say({a:10});
say({a:10, b:20, c:30 });

}());

/*
Object { a= 1 , b= 2 }
Object { a= 1 , b= 2 }
100
Object { a= 10 , b= 2 }
Object { a= 10 , b= 20 , c= 30 }
*/

console.info("globals");
(function() {

var n = 1;
function f1(){
	console.log(n);
	n = 2;
	console.log(n);
}
f1();
console.log(n);

}());
/*
1
2
2
*/
console.info("globals and locals I.");

(function() {

var n = 1;
function f2_1(){
	console.log(n);
	var n = 2;
	console.log(n);
}
f2_1();
console.log(n);

}());
/*
undefined
2
1
*/

console.info("globals and locals II.");

(function() {

var n = 1;
function f2_2(){
	var n = undefined;
	console.log(n);
	n = 2;
	console.log(n);
}
f2_2();

}());

/*
undefined
2
*/

console.info("variables - function scope");

(function() {

function f3_1(){
	console.log(i);
}

function f3_2(){
	console.log(i);
	for (var i=0; i<3; i++){
		console.log(i);
	}
	console.log(i);
	//f3_1();
}
//f3_1();
f3_2();

}());

/*
when calling f3_1:
ReferenceError: i is not defined

undefined
0
1
2
3
*/

console.info("function statement - hoisting I");

(function() {

console.log(say1("Hello - before"));

function say1(s) {
	return "I say1 "+s;
}

console.log(say1("Hello - after"));

}());

/*
I say1 Hello - before
I say1 Hello - after
*/

console.info("function statement - hoisting II");

(function() {

console.log(say2("Hello - before"));

function say1() {}

function say2(s) {
	say1();
	say3();
	return "I say1 "+s;
}

function say3() {}

console.log(say2("Hello - after"));

}());

/*
I say1 Hello - before
I say1 Hello - after
*/

console.info("function expression - hoisting III");

(function() {

//console.log(say2("Hello - before"));

var say2 = function (s) {
	return "I say2 "+s;
}

console.log(say2("Hello - after"));

}());

/*
TypeError: say2 is not a function
I say2 Hello - after
*/

//console.info("function expression - hoisting IV");

(function() {
/*
var say4 = function say4(s) {
	//"Mozilla error: invalid scope variables" when call
	console.log(typeof say4);
};

say4();
//this OK:
var say4 = function (s) {
	console.log(typeof say4);
};

say4();
*/

}());

console.info("immediately invoking");
(function() {

var f5_1 = function() {
	return Math.random();
};

var f5_21 = function() {
	return Math.random();
}();

var f5_22 = (function() {
	return Math.random();
}());

var f5_23 = (function() {
	return Math.random();
})();

console.log("f5_1::"+f5_1.toString());
console.log("f5_21::"+f5_21.toString());
console.log("f5_22::"+f5_22.toString());
console.log("f5_23::"+f5_23.toString());

(function () {
    /* 
    Our code, which runs immediately,
	does brilliant things
    but does not touch globals
    */
	var V = "DISAPPEAR";
	console.log("Invoked");
}());

/*
function () {
	console.log("Imm. inv. - bad");
}();
*/

}());
/*
f5_1::function () {
	return Math.random();
}
f5_21::0.23744921773445204
f5_22::0.11122406232591087
f5_23::0.46325502661698104
Invoked
*/

console.info("return - obsolete");

(function() {

var r0_1 = function () {}

console.log("r0_1 = ");
console.log(r0_1());
console.log("new r0_1 = ");
console.log(new r0_1());


/*
r0_1 = 
undefined
new r0_1 = 
Object {}
*/

var r0_2 = function () {
	return;
}

console.log("r0_2 = ");
console.log(r0_2());
console.log("new r0_2 = ");
console.log(new r0_2());


/*
r0_2 = 
undefined
new r0_2 = 
Object {}
*/

var r1 = function () {
	return 1;
}

console.log("r1 = ");
console.log(r1());
console.log("new r1 = ");
console.log(new r1());

/*
r1 = 
1
new r1 = 
Object {}
*/

var r2 = function () {
	return { "a":1, "b":2 };
}

console.log("r2 = ");
console.log(r2());
console.log("new r2 = ");
console.log(new r2());

/*
r2 = 
Object { a=1, b=2 }

new r2 = 
Object { a=1, b=2}
*/

var r3 = function () {
	return [ 1,2,3 ];
}

console.log("r3 = " + r3());

/*
r3 = 1,2,3
*/

var f5 = (function() {
	return function() { 
		return Math.random()
	}
})();

console.log("f5="+f5());
console.log("f5="+f5());

/*
f5=0.7421820680177672
f5=0.7931443870571057
*/
}());

console.log("return");

var F = [];

F[0] = function () {};
F[1] = function () { return };
F[2] = function () { return 1 };
F[3] = function () { return { x:1 } };
F[4] = function () { return (
		function () { 
			return Math.random
		})
}

var t = [['F[i]()'],['new F[i]']];
for (var i in F) {
	t[0].push(F[i]());
	t[1].push(new F[i]);
}

console.table(t);

/*
undefined	undefined	1			Object { x=1}	function()
Object {}	Object {}	Object {}	Object { x=1}	function()
*/

console.info("Nested function");
(function() {

function f6(s) {
	var i = 10;
	function g6() {
		console.log("g6.s+i=" + s + i);
	}
	g6();
};

f6("Hello");

}());

console.info("Closures I");
(function() {

var c0_0 = function () {
	console.log("I am in c0_0")
}
c0_0();

var c0_1 = function () {
	function c0_11() {
		console.log("I am in c0_1")
	}
	c0_11();
}
c0_1();

var c0_2 = function () {
	function c0_21() {
		console.log("I am in c0_21")
	}
	return c0_21;
}
var c0_22 = c0_2();
c0_22();
c0_2()();

var c0_3 = function (s) {
	function c0_31() {
		console.log(
			"I am in c0_31 " + s);
	};
	return c0_31;
}
var c0_32 = c0_3("Hello");
c0_32();
console.log(c0_32.toString());

var c0_4 = function (s) {
	return function() {
		console.log(
			"I am in c0_4 return " + s);
	};
}
var c0_41 = c0_4("Hello");
c0_41();
console.log(c0_41.toString());

}());

console.info("Closures II");

(function() {

var c04 = function(start) {
	return function() {
		return start++;
	}
}

var c04_1 = c04(1000);
var c04_2 = c04(100);
console.log("c04_1" + c04_1());
console.log("c04_2" + c04_2());
console.log("c04_2" + c04_2());
console.log("c04_1" + c04_1());

}());

console.info("Closures IIIa - warming up");

(function() {

function say() {
	console.log("Hello");
}

setTimeout(say,5000);
console.log("timeout set");

}());

console.info("Closures IIIb - warming up");

(function() {

function forever() {
	console.log("Hello");
	setTimeout(forever, 2000);
}

forever();
console.log("Calling done");
}());


console.info("Closures III");

(function() {

var c05 = function(name,start,end,millis) {
	function count() {
		console.log("counter:"+name+" = " +
			start++)
		if (start<end) { 
			setTimeout(count, millis);
		}
	}
	setTimeout(count, millis);
}

/*
var c05_1 = c05("1",100,150,100);
var c05_2 = c05("2",565,600,500);
var c05_3 = c05("3",1000,1100,1000);
*/

}());

console.info("Object and functions I");
(function() {

//functions are objects

f.prop = 1;
function f() {
	console.log(f.prop);
}
f();

}());

console.info("Object and functions II");
(function() {

var obj = {
	x : 1,
	f : function() {
			return this.x
		}
}

console.log(obj);
console.log(obj.f());

}());

console.info("constructor");

//Show it in firefox and check the console during alerts!
//When is GLOBAL impacted?

(function() {
    var GLOBAL = this;

    function MyConstructor(a,b) {
        this.a = a;
        this.b = b;
        //return this;
    }

    var m1 = new MyConstructor(1,2);
    console.group("var m1 = new MyConstructor(1,2)");
    console.dir(m1);
    console.groupEnd();
    console.group("GLOBAL");
    console.dir(GLOBAL);
    console.groupEnd();
    alert("new MyConstructor");

    console.group("var m2 = MyConstructor(1,2)");
    var m2 = MyConstructor(1,2);
    console.groupEnd();
    console.dir(m2);
    console.group("GLOBAL");
    console.dir(GLOBAL);
    console.groupEnd();
    alert("var m2 = MyConstructor");

    console.group("MyConstructor(3,4)");
    MyConstructor(3,4);
    console.groupEnd();
    console.group("GLOBAL");
    console.dir(GLOBAL);
    console.groupEnd();
    alert("MyConstructor(3,4)");

}());


console.info("invocations of functions");
(function() {
console.log("Global:");
console.log(this);

function h1() {
	console.log(this);
}

console.log("function invocation");
h1();

console.log("method invocation");
var o1 = {
	f1 : h1
}
o1.f1();

var a1 = [0,1,h1];
a1[2]();

console.log("constructor invocation");
new h1;

console.log("indirect invocation");
h1.apply(null,[]);
h1.apply(this,[]);
var o2 = { x : 2 };
h1.apply(o2,[]);
var a2 = [10,20,30];
h1.apply(a2,[]);

}());

console.info("closure and this");
(function() {

var o3 = {
	y : 1
}

var h2 = function () {
	function h2_1() {
		console.log(this)
	}
	h2_1();
}

h2.apply(o3,[]);

var h3 = function () {
	var that = this;
	
	function h3_1() {
		console.log(that)
	}
	h3_1();
}

h3.apply(o3,[]);

}());

console.info("function as parameter (callback)");
console.info("synchronous callback");

(function() {

function arraySum(array) {
    var s = array[0], i;
    for (i = 1; i< array.length; i++) {
        s += array[i];
    }
    return s
}

console.log(arraySum([1,2,3,4]));

/*
10
*/

function sum(a,b) {
    return  a + b
}

function arrayWalk(array, f) {
    var s = array[0], i;
    for (i = 1; i< array.length; i++) {
        s = f(s,array[i]);
    }
    return s
}

console.log(arrayWalk([1,2,3,4], sum));

/*
10
*/

function mul(a,b) {
    return a * b
}

console.log(arrayWalk([1,2,3,4], mul));

/*
24
*/

var sum = 0;
[1,2,3,4].forEach(
	function (element, index, array) {
		sum += element
	});
console.log(sum);

/*
10
*/

var a = [1,2,3,4].map(
	function (e,i,a) { return e*e });
console.log(a);

/*
[1, 4, 9, 16]
*/

console.log([9,16,25].map(Math.sqrt));

/*
[3, 4, 5]
*/

var a = ["1","2","3"].map(parseInt);
console.log(a);

/*
[1, NaN, NaN]
*/

var a = ["1","2","3"].map(
	function (e) { return parseInt(e,10) });
console.log(a);

/*
[1, 2, 3]
*/

var a = [1,2,3,4].filter(
	function (e,i,a) { return i % 2 });
console.log(a);

/*
[2, 4]
*/


}());

console.info("synchronous callback - AJAX");
//show it in firefox

(function() {

var r = new XMLHttpRequest();

function say() {
    if ( this.readyState == 4 &&
         this.status == 200 ) {
        console.log("Response : " +
            this.responseText);
    }
}

r.onreadystatechange = say;

r.open("GET","http://localhost:1337/", false);

r.send();

console.log("Request sent");

}());

/*
Response : hello world
Request sent
undefined
*/

console.info("asynchronous callback I");
//show it in firefox

(function() {

function say() {
	console.log("hello");
}

setTimeout(say,500);
console.log("timeout set");

}());

console.info("asynchronous callback II");
//show it in firefox

(function() {

function say() {
	console.log("hello");
}

function timer(f, millis, n) {
	function callCallback() {
		n -= 1;
		f();
		if (n>0) {
			setTimeout(callCallback, millis)
		}		
	}

	callCallback();
}

timer(say,500,10);
console.log("timeout set");

}());

console.info("asynchronous callback III");
//show it in firefox

(function() {

function say() {
	console.log("hello");
}

function timer(f, millis, n) {
	function callCallback(n) {
		if (n>0) {
            f();
			setTimeout(
                function () { callCallback(n-1) }, millis)
		}		
	}

	callCallback(n);
}

timer(say,500,10);
console.log("timeout set");

}());

console.info("asynchronous callback - AJAX");
//show it in firefox

(function() {

var r = new XMLHttpRequest();

function say() {
    if ( this.readyState == 4 &&
         this.status == 200 ) {
        console.log("Response : " +
            this.responseText);
    }
}

r.onreadystatechange = say;

r.open("GET","http://localhost:1337/", true);

r.send();

console.log("Request sent");

}());

/*
Request sent
undefined
Response : hello world
*/

console.info("method chaining (cascade)");

(function() {
    var o = { a : 1, b : 2 };

    function printField01(obj, fieldName) {
        console.log(fieldName +
            "'s value is '" +
            obj[fieldName] + "'");
    }

    printField01(o,'a');
    printField01(o,'b');

    /*
    a's value is '1'
    b's value is '2'
    */
    
    var o = { a : 1, b : 2 };

    function printField02(obj, fieldName) {
        console.log(fieldName +
            "'s value is '" +
            obj[fieldName] + "'");
        return obj
    }

    printField02(printField02(o,'a'),'b');
    
    /*
    a's value is '1'
    b's value is '2'
    */ 
    
    Object.prototype.printField = function(fieldName) {
        console.log(fieldName +
            "'s value is '" +
            this[fieldName] + "'");
        return this
    }

    o.printField('a').printField('b');
    
    /*
    a's value is '1'
    b's value is '2'
    */ 

}());