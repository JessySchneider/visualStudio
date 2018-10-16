

Array.prototype.customMap = function(func){

    var newTab = new Array();
    this.forEach(function(value,index){
        var myFunction = func;
        newTab[index] = String(value).myFunction();
    });
    console.log(newTab);
    return newTab;
    
}

var tab = ["a","b",'c'];
var tableauTraite = tab.customMap("toUpperCase");
console.log(tableauTraite);