

Array.prototype.customMap = function(func){

    var newTab = new Array();
    this.forEach(function(value,index){
        newTab[index] = func(value);
    });
    return newTab;
}

var tab = ["a","b",'c'];
var tableauTraite = tab.customMap(miseEnMajuscule);

console.log(tableauTraite);
console.log(tab);

function miseEnMajuscule(string){
    return string.toUpperCase();
}

Array.prototype.customFilter = function(fcondition){
    var newTab = new Array();
    this.forEach(function(value,index){
        if(fcondition(value)){
            newTab.push(value); 
        }
    });
    return newTab;
}

var myTab = [-5,6,-8,10,-60,50,40,-2];
var myTabFilter = myTab.customFilter(x => x >0);
console.log(myTabFilter);

/* 
*   La ligne ci-dessous équivaut a la condition passé dans la ligne 38 (myTab.customFilter(x => x>0))
*/
function isSuperieur(elementTab){
    if(elementTab > 0 ){
        return true;
    }else{
        return false;
    }
}