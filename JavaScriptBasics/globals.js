








a = 1;
var b = 1;


BP = {};

BP.a = 2;
BP.b = 2;
BP.say = function(s) {
	console.log('I say ' + s);
};
BP.write = function(){
	console.log('a is ' + a);
	console.log('this.a is ' + this.a);
}
BP.main = function() {
	
	//say('Hello in main');
	this.say('Hello in main');
}


BP.say('BP.say from global');
BP.write();
BP.main();
// say('Hello in global'); ReferenceError

