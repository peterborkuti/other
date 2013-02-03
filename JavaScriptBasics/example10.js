var MyClass = function() {
	var that = {};
	that.a = 10;
	
	that.f = function() {
		this.a += 1;
		console.log("this.a= "+this.a);
	};

	


	return that;


}

