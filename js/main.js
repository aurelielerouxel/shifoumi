//Accueil de l'utilisateur
alert("Bonjour et bienvenue");
 
//Permettre à l'utilisateur de rentrer et conserver son nom
var userName = prompt("Entrez votre nom");

//Permettre à l'utilisateur de rentrer une valeur choisie
var userChoice = prompt("Faites votre choix : pierre, feuille, ciseau");

//Générer un choix au hasard pour l'ordinateur
var choices = ["pierre", "feuille", "ciseaux"];
 
function choiceAleatoire() {
    var randomValue = choices[Math.floor(Math.random() * choices.length)];
    return randomValue;
}
var computerChoice = choiceAleatoire();

//Afficher le choix du joueur et de l'ordinateur

//Récupérer choix joueur et ordinateur

//Déterminer le vainqueur 

//Comparer choix joueur et ordinateur


//Afficher le vainqueur


//README.md