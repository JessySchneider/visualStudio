
var x = {
    name:"toto",
    changeName: function(newName){
        this.name = newName;
    }
    
}

var y = {name:"tata"};

var a = x.changeName;
var b = a.bind(y);

b("tutu");

// console.log(y.name);