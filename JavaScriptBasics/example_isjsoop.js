console.warn("encapsulation");

(function () {
    var o = {
        x : 1,
        f : function() {
            console.log(this.x);
        }
    }
    o.f();
}());

console.warn("dynamic dispatch");

(function () {
    var a = {
        f : function() {
            console.log("a.f");
        }
    }

    var b = Object.create(a, {
        f : { value : 
            function () {
            console.log("b.f"); 
            }
        }});
    
    var c = a;
    c.f();
    c = b;
    c.f();
    
}());

console.warn("Subtype polymorphism");

(function () {
    function say(o) {
        console.log(o.x);
    }
    
    var a = {
        x : 1
    }

    var b = Object.create(a, {
        y : { value : 2 }
    })
    
    say(a);
    say(b);
    
}());

console.warn("Open recursion");

(function () {
    var a = {
        f: function say(o) {
            this.g();
        }
    }
    
    var b = Object.create(a, {
        g : { value : 
            function () {
                console.log("g");
            }
        }
    })
    
    b.f();
    
}());