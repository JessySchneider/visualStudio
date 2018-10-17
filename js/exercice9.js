

Array.prototype.customMap = function(func){

    var newTab = new Array();
    this.forEach(function(value,index){
        newTab[index] = func(value);
    });
    return newTab;
}

var tab = ["a","b",'c'];
var tabNb = [2,4,6,8,10];
var tableauTraite = tab.customMap(miseEnMajuscule);
var tableauTraiteNb = tabNb.customMap(carre);
console.log(tableauTraite);
console.log(tableauTraiteNb);
console.log(tab);
console.log(tabNb);
var compTab = tabNb.map(carre);
console.log(compTab);

function miseEnMajuscule(string){
    return string.toUpperCase();
}

function carre(number){
    return number*number;
}