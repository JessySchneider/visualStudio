
var villes = [
    { nom: "Nantes", departement: 44, presDeLaMer: false },
    { nom: "Dunkerque", departement: 59, presDeLaMer: true },
    { nom: "Paris", departement: 75, presDeLaMer: false },
];

function AfficheInfoVille(villes){
    var i = 0;
    var interval = setInterval(function(){
        
        if(i > villes.length-1){
            clearInterval(interval);
        }else{
            print(villes[i]);
        }
       
        i++;
    },1000);
}

function print(ville){
    console.log( ville.nom +" ("+ville.departement+")")
}

var i = 0;

//     setTimeout(function(){
//         recursive(villes, ++i)
//     }
// })

// AfficheInfoVille(villes);
