var Person = {
    name : "toto",
    sayName : function(){
        setTimeout(() => { console.log(this.name) }, 1000);
    },
   
    sayNameBind:function(){
        setTimeout(function () { 
            console.log(this.name);
        }.bind(this), 1000);

    }
}

Person.sayName();
Person.sayNameBind();

function Personne(){
    let i=0;
    
    var myInterval = setInterval(() => { 

        console.log(arguments[i]);
        i++;

        if(i > arguments.length-1){
            clearInterval(myInterval);
        } 
        
    },1000).bind(this);
    
}

var test = new Personne("Param 1",2,"bla");
// test.printArgs();
