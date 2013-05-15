console.info("Module pattern");

console.log("I. create namespace");

com = {};
com.liferay = {};
com.liferay.bp = {};

console.log("II. create an empty module");

com.liferay.bp.ModuleExample =
 function() {


}();

console.log("III. create private vars");

com.liferay.bp.ModuleExample =
 function() {
	var p = "private var";

}();

console.log("IV. create private funcs");

com.liferay.bp.ModuleExample =
 function() {
	var privvar = "";
	
	var privfunc = function () {
		console.log("privvar:"+privvar);
	};

}();

console.log("V. create public vars");

com.liferay.bp.ModuleExample =
 function() {
	var privvar = "privvalue";
	
	var privfunc = function () {
		console.log("privvar:"+privvar);
	};
	
	return {
		pubvar : "pubvalue"
	}

}();

console.log("VI. create public funcs");

com.liferay.bp.ModuleExample =
 function() {
	var privvar = "privvalue";
	
	var privfunc = function () {
		console.log("privvar:"+privvar);
	};
	
	return {
		pubvar : "pubvalue",
		
		pubfunc: function() {
			console.log("pubvar :" + this.pubvar);
			console.log("privvar:" + privvar);
			privfunc();
		}
	}

}();

console.log("VII. use the module");

com.liferay.bp.ModuleExample.pubfunc();

console.log("VIII. use the module");

(function() {
	var BP = com.liferay.bp,
		M = BP.ModuleExample;
	
	M.pubfunc();

}());
