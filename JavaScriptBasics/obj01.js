var mySeq1 = {
	value : 0,
	getValue : function() {
		this.value += 1;
		return this.value;
	}
};

/*
>>> mySeq1.getValue()

2

>>> mySeq1['getValue']

function()

>>> mySeq1['getValue']();

3

>>> mySeq1.value = 0;

0

>>> mySeq1['getValue']();

1

*/


var mySeq4 = function(){
	var value = 0;
	return {
		getValue : function() {
			value += 1;
			return value;
		}
	}
};

/*
>>> mySeq4

function()

>>> mySeq4.getValue()

TypeError: mySeq4.getValue is not a function

>>> mySeq4().getValue()

1

>>> mySeq4().getValue()

1

>>> s = mySeq4();

Object { getValue=function()}

>>> s.getValue()

1

>>> s.getValue()

2

>>> q=mySeq4()

Object { getValue=function()}

>>> q.getValue()

1

*/

var mySeq5 = function(){
	var value = 0;
	return {
		getValue : function() {
			value += 1;
			return value;
		}
	}
}();

/*
>>> mySeq5.getValue()

1

>>> mySeq5.getValue()

2
*/


var mySeq6 = function(){
	var value = 0;
	return function() {
			value += 1;
			return value;
	}
}();
/*
>>> mySeq6()

1

>>> mySeq6()

2

>>> r=mySeq6;

function()

>>> r()

3
*/

var mySeq7 = function(){
	var value = 0;
	
	var getValue = function() {
		value += 1;
		return value;
	}
	
	return getValue;
};
/*
>>> t = mySeq7()

function()

>>> t()

1

>>> t()

2
*/

var mySeq8 = function(){
	var value = 0;
	
	var getValue = function() {
		value += 1;
		return value;
	}
	
	return getValue;
}();

/*
>>> mySeq8()

1

>>> mySeq8()

2
*/

// ********************** scope ***********************

var f1 = "kukk";

var fa = function() {
	console.log("fa Before:" + f1);
	
	var f1 = "Hello";
	
	console.log("fa After:" + f1);
}

/*
	undefined
*/
var fb = function() {

	console.log("fb " + f1);
	
}
/*
	kukk
*/