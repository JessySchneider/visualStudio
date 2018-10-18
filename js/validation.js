
// var btnSubmit = document.getElementById("sub");

// btnSubmit.addEventListener("click",function(e){
//     if(document.getElementById("numero").value %2){
//         e.preventDefault();
//         console.log("Le nombre doit être pair");
//     }
// });


//ELEMENT DU DOM contenant l'input file
var file = document.getElementById('files');
var cibleHtml = document.getElementById('container');

//On arme un événement de type change lorsque l'utilisateur renseigne un fichier
file.addEventListener("change",function(evt){
    //fichier contient un objet de type files contenant les information du fichier envoyer
    var fichier = evt.target.files[0];

    //FileReader permet d'ouvrir un fichier envoyer en input file
    var reader = new FileReader();
 
    //On attent que le fichier est fini de chargé puis on vient modifier notre html avec le contenu du fichier
    //event.target représente le fichier ouvert, le paramètre result permet d'accèder au contenu du fihcier
    reader.onload = function(event){
        cibleHtml.innerHTML = event.target.result;
    }

    //l'object reader va lire notre fichier grace à la méthode readAsText
    reader.readAsText(fichier);
   
 
});




