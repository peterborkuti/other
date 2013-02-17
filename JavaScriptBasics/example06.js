Object.prototype.say = function (s) {
 console.log('I say ' + s);
}

Number.prototype.div10 = function () {
	return this/10;
}

var o = {};
o.say("Hello");

var n = 120;
console.log(n.div10());

//console.log(35.div10());
console.log(Number(35).div10());