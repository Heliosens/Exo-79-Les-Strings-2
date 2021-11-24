let pomme = "Elle est belle ma pomme !";

console.log(pomme.lastIndexOf('m'));

//exo1
let idP = pomme.indexOf('pomme');
let indexPomme = document.getElementById('index-pomme');
indexPomme.innerHTML = idP.toString();

//exo2
let lastIndex = document.getElementById('last-index-m');
lastIndex.innerHTML = pomme.lastIndexOf('m').toString();

// exo3
if(pomme.startsWith("Elle")){
    console.log("Elle est belle ma pomme ! Commence par elle");
}

//exo 4
if(pomme.endsWith("!")){
    console.log("Elle est belle ma pomme ! Se termine par un point d'exclamation");
}

//exo 5
let idPom = document.getElementById('pomme');
let result = pomme.substring(18,23);
idPom.innerHTML = result;

//exo 6
let table = pomme.split("");
let oneLine = document.getElementById('one-line');
console.log(table);
for (let i = 0 ; i < table.length ; i++){
    oneLine.innerHTML += table[i] + "<br>";
}

// exo 7
// oui, la 2eme fois les énoncés sont un peu plus clair
