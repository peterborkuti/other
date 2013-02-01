var boy = {
			'name': 'Joe',
			'age': 10
	};

var advanced = {
	person: boy,
	say: function(s) {
		console.log(s);
	},
	number:1,
	string:"Some text",
	bool:true
	
};

for (var i in advanced){
	console.log("typeof advanced."+i+ " : " + typeof advanced[i]);
}

console.log("typeof advanced.something : " + typeof advanced['something']);
	
