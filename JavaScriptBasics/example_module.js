console.info("Module pattern");

console.log("I. create namespace");

liferay = {};
liferay.com = {};
liferay.com.bp = {};

console.log("II. create an empty module");

liferay.com.bp.ModuleExample =
 function() {


}();

console.log("III. create private vars");

liferay.com.bp.ModuleExample =
 function() {
	var p = "private var";

}();

console.log("IV. create private funcs");

liferay.com.bp.ModuleExample =
 function() {
	var privvar = "";
	
	var privfunc = function () {
		console.log("privvar:"+privvar);
	};

}();

console.log("V. create public vars");

liferay.com.bp.ModuleExample =
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

liferay.com.bp.ModuleExample =
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

liferay.com.bp.ModuleExample.pubfunc();

console.log("VIII. use the module");

(function() {
	var BP = liferay.com.bp,
		M = BP.ModuleExample;
	
	M.pubfunc();

}());
