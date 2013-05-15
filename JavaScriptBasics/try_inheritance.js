console.info("constructor");

function A0() {
    this.a = 1;
}

function B0() {
    this.b = 2;
}

B0.prototype = new A0;

var b0 = new B0;


var table = [ {'example': 'constructor',obj:b0}  ];
table[0].isInsOf_B = (table[0].obj instanceof(B0));
table[0].isInsOf_A = (table[0].obj instanceof(A0));
table[0].AisProtOf = (A0.isPrototypeOf(b0));


console.info("improved constructor");

function A1() {
    this.a = 1;
}

function B1() {
    this.b = 2;
}

B1.prototype = new A1;
B1.prototype.constructor = B1;

var b1 = new B1;


table.push({'example': 'impr. constr.', obj:b1});
table[1].isInsOf_B = (table[1].obj instanceof(B1));
table[1].isInsOf_A = (table[1].obj instanceof(A1));
table[1].AisProtOf = (A1.isPrototypeOf(b1));

console.info("prototype");

var A2 = Object.create(Object.prototype,
            { a : { value:1,
                    enumerable: true,
                    writable: true,
                    configurable: true} });

var B2 = Object.create(A2,
            { b : { value:2,
                    enumerable: true,
                    writable: true,
                    configurable: true} });

var b2 = Object.create(B2);

table.push({'example': 'prototype',obj:b2});
//invalid 'instanceof' operand B2 
//table[2].isInsOf_B = (table[2].obj instanceof(B2));
//table[2].isInsOf_A = (table[2].obj instanceof(A2));
table[2].AisProtOf = (A2.isPrototypeOf(b2));
//there is no "prototype" property
//but b2.__proto__.__proto__.hasOwnProperty('a') works in Firefox
table[2].isOwn_a = (table[2].hasOwnProperty('a'));
table[2].isOwn_b = (table[2].hasOwnProperty('b'));

console.info("functional inheritance");

	var A3 = function () {
                return { a: 1}
            }

	var B3 = function () {
		var that = A3();
        that.b = 2;
		return that
	};
	

var b3 = B3();

table.push({'example': 'functional',obj:b3});
//invalid 'instanceof' operand B2 
table[3].isInsOf_B = (table[3].obj instanceof(B3));
table[3].isInsOf_A = (table[3].obj instanceof(A3));
table[3].AisProtOf = (A3.isPrototypeOf(b3));
//there is no "prototype" property
//but b2.__proto__.__proto__.hasOwnProperty('a') works in Firefox
table[3].isOwn_a = (table[3].hasOwnProperty('a'));
table[3].isOwn_b = (table[3].hasOwnProperty('b'));
    
console.info("constructor and prototype");


function getPrototype(parent, child) {
   function protoCreator(){
        this.constructor = child.prototype.constructor
    };
    protoCreator.prototype = parent.prototype;
    return new protoCreator();
}

function A4(a) {
    this.a = a;
}

function B4(a,b) {
    var that = new A4(a);
    that.b = b;
    return that;
}

//B4.prototype = getPrototype(A4,B4);
B4.prototype = getPrototype(A4,B4);

var b4 = new B4(1,2);

table.push({'example': 'constr and proto',obj:b4});
//invalid 'instanceof' operand B2 
table[4].isInsOf_B = (table[4].obj instanceof(B4));
table[4].isInsOf_A = (table[4].obj instanceof(A4));
table[4].AisProtOf = (A4.isPrototypeOf(b4));
//there is no "prototype" property
//but b2.__proto__.__proto__.hasOwnProperty('a') works in Firefox
table[4].isOwn_a = (table[4].hasOwnProperty('a'));
table[4].isOwn_b = (table[4].hasOwnProperty('b'));

for (var i = 0; i < table.length; i++) {
    //table[i].value = (table[i].obj.valueOf());
    table[i].isOwn_a = (table[i].obj.hasOwnProperty('a'));
    table[i].isOwn_b = (table[i].obj.hasOwnProperty('b'));
    table[i].typeof_ = typeof(table[i].obj);
}

console.table(table);

var t = [{'obj':'b2','own_a':
b2.hasOwnProperty('a'),
'own_b':
b2.hasOwnProperty('b'),
'proto_own_a':
b2.__proto__.hasOwnProperty('a'),
'proto_own_b':
b2.__proto__.hasOwnProperty('b'),
'proto_proto_own_a':
b2.__proto__.__proto__.hasOwnProperty('a'),
'proto_proto_own_b':
b2.__proto__.__proto__.hasOwnProperty('b')}

];


console.table(t);

/*






function A (a) {
    this.a = a;
}

function getB(a,b) {
    var a = new A(a);
    A.prototype.constructor = B;
    var o = Object.create(a);

    o.prototype = new A;
    o.b = b;
    return o;
}

function B(a,b) {
    A.call(this,a);
    this.b = b;
}



B.prototype = new A
B.prototype.constructor = B

var a = new A(1);

var b = new B(2,3);

console.log(a);
console.log(b);

console.log(b.hasOwnProperty('a'));
console.log(b instanceof A);
console.log(b instanceof B);

var gb = getB(4,5);
console.log(gb);

console.log(gb instanceof A);
console.log(gb instanceof getB);
console.log(gb.hasOwnProperty('b'));
console.log(gb.hasOwnProperty('a'));

*/