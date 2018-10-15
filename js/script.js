
Number.prototype.carre = function(){
    return this*this;
}

String.prototype.checkAndConcat = function (a, ...args){

    if( a === String(this)){
        var message = a;
        for(var i=0; i<args.length;i++){
            message = message + " "+args[i];
        }
        console.log(message);
        return message;
    }else{
        var message = "Erreur, le premier mot n'est pas identique";
        console.log(message);
        return message;
    }
    
}

"Salut".checkAndConcat("Salut","toto","tata","tutu","blabla","heyhey");
"Hello".checkAndConcat("Salut","toto","tata","tutu","blabla","heyhey");

"Bonjour".checkAndConcat("Bonjour","toto","tata","tutu","blabla","heyhey");
