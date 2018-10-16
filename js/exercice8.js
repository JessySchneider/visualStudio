var villesArray = [
    { nom: "Nantes", departement: 44, presDeLaMer: false },
    { nom: "Dunkerque", departement: 59, presDeLaMer: true },
    { nom: "Paris", departement: 75, presDeLaMer: false },
    { nom: "Nantes", departement: 44, presDeLaMer: false },
    { nom: "Dunkerque", departement: 59, presDeLaMer: true },
    { nom: "Paris", departement: 75, presDeLaMer: false },
    { nom: "Nantes", departement: 44, presDeLaMer: false },
    { nom: "Dunkerque", departement: 59, presDeLaMer: true },
    { nom: "Paris", departement: 75, presDeLaMer: false },
    { nom: "Nantes", departement: 44, presDeLaMer: false },
    { nom: "Dunkerque", departement: 59, presDeLaMer: true },
];

function nameToUpper(){
    this.nom = this.nom.toUpperCase();
}

function afficherVilles(villes) {
    afficherUneVille(villes, 0);
}

function afficherUneVille(ville, index) {
    if (!ville[index]) return;

    console.log(creerNomAffichageVille(ville[index]));
    setTimeout(function() {
      afficherUneVille(ville, ++index);
    }, 1000);
}

    function creerNomAffichageVille(ville) {
        var callnameToUpper = nameToUpper.bind(ville);
        callnameToUpper();
        return ville.nom; 
    } 
  
  afficherVilles(villesArray);