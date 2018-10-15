function Personne(name,age){
    this.name = name ;
    this.age = age

    this.afficherAge = function(){
        console.log(age);
    }
}


function Employe(name,age,job,salaire){
    Personne.apply(this,arguments);
    this.job = job;
    this.salaire = salaire;
}

Employe.prototype = new Personne();

var toto = new Employe("toto",20,"developpeur",50);
console.log(toto instanceof(Employe));
console.log(toto instanceof(Personne));

console.log(toto.afficherAge());
console.log(toto.name);
console.log(toto.age);
console.log(toto.job);
console.log(toto.salaire);

