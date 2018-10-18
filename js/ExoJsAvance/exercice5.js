var Person = {
    name : "toto",
    age : 20,
    afficherInformation: function(){
        console.log("Je m'appel "+ this.name + " et j'ai "+this.age+ " ans");
    },

    
}

var Employe = {
    changerNom: function(newName){
        this.name = newName;
    }
}

Object.setPrototypeOf(Employe,Person);
Object.setPrototypeOf(Person,null);
var toto = Object.create(Employe);


// console.log(toto);
// console.log(toto.name);
// console.log(toto.age); 
toto.changerNom("Patrick");
// toto.afficherInformation();

