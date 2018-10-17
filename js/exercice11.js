class Person {
    constructor(name){
        this.name = name;
    }

    afficherInfo(){
        console.log(this.name);
        this.afficherConstructeur();
    }

    afficherConstructeur() {
        console.log(this.constructor.name);
    }
}

class Employe extends Person {
    constructor(name,salaire){
        super(name);
        this.salaire = salaire;
    }

    afficherInfo(){
        console.log(this.name + " "+this.salaire );        
        super.afficherConstructeur();
        this.afficherConstructeur();
    }

    afficherConstructeur(){
        console.log("Je suis la méthode surchargé de la classe enfant");
    }
}

var moi = new Employe("Jessy",0);
var lui = new Person("Lui");
moi.afficherInfo();
lui.afficherInfo();

