

function patate(origine){
    this.origine = origine || "champs";
    this.qualite = "bio";
}

var monsieurPatate = new patate();
patate.prototype.taille = 60;
var patateV2 = new patate("industrie");
patateV2.taille = 160;


