// this

var name = "global";

var g = function(s) {
	console.log(s + "; name is " + name + "; this.name is " + this.name);
	console.dir(this);
}

var f = function(s) {
	var name="f";
	console.log(s + "; name is " + name + "; this.name is " + this.name);
	console.dir(this);
};

var b = {
	name : "b",
	a : function(s) {
		console.log(s + "; name is " + name + "; this.name is " + this.name);
		console.dir(this);
	}
};

//should be used with "new" keyword
//every prototyped memeber will be reacheable by the object
var C = function() {};
C.prototype.name  = "protoC" ;
C.prototype.a = function(s) {
		console.log(s + "; name is " + name + "; this.name is " + this.name);
		console.dir(this);
}

//function invocation patter
f("f - function invocation");
g("g - function invocation");

//method invocation pattern
b.a("method invocation");

//constructor invocation pattern
var c1 = new C();
c1.a("constructor invocation with c1 before");
c1.name="c1";
c1.a("constructor invocation with c1 after setting name");

var d = {name : "d" };
f.apply(d,["f.apply(d,arr)"]);
g.apply(d,["g.apply(d,arr)"]);
f.call(d,"f.call");
g.call(d,"g.call");

