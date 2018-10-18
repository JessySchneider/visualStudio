
Number.prototype.carre = function(){
    return this*this;
}

String.prototype.checkAndConcat = function (a, ...args){

    if( a === String(this)){
        var message = a;
        for(var i=0; i<args.length;i++){
            message = message + " "+args[i];
        }
        
        return message;
    }else{
        var message = "Erreur, le premier mot n'est pas identique";
       
        return message;
    }
    
}

"Salut".checkAndConcat("Salut","toto","tata","tutu","blabla","heyhey");
"Hello".checkAndConcat("Salut","toto","tata","tutu","blabla","heyhey");


