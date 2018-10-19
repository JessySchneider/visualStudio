var info = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

//     var obj = JSON.parse(info);
  var dom =  document.getElementById("message");
  console.log(dom);

//     console.log(dom);

// for(let i = 0; i<obj.employees.length;i++){
//     console.log(obj.employees[i].firstName + obj.employees[i].lastName);
// }

var json = {"d":[{"type":"message",
"color":"red",
"author":"Jessy",
"text":"Ceci est un message passé en JSON"},{"type":"message",
"color":"blue",
"author":"Jessy",
"text":"Un autre message"}] };

for(let i =0; i<json.d.length;i++){
    console.log(json.d[i].color);
    console.log(json.d[i].author);
    console.log(json.d[i].text);
    console.log(json.d[i].type);
    var texte = `<div style="color:${json.d[i].color}">${json.d[i].author} : ${json.d[i].text}</div>`;
    dom.innerHTML +=texte;
}

