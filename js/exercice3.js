function Membre(nom,age){
    var nom = nom;
    var age = age;
    this.compteur = 0;

    function incrementation(){
        this.compteur++;
    }

    this.getNom = function(){
        return nom;
    }

    this.testCompteur = function(){
        incrementation();
       
    }

    this.getAge = function(){
        return age;
    }

    this.setNom = function(newNom){
        if(newNom.length >= 5 ){
            nom = newNom;
        }
    }

    this.setAge = function(newAge){
        if(newAge > 20){
            age = newAge;
        }
    }

}

var bob = new Membre("Bobby",20);

// console.log(bob.getNom());
// console.log(bob.getAge());
// bob.setAge(30);
// bob.setNom("Bobby");
// console.log(bob.getNom());
// console.log(bob.getAge());
