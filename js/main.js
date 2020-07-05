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
alert("Vous avez choisi " + userChoice + " - " + " L'ordinateur a choisi " + computerChoice);

//Comparer choix joueur et ordinateur (feuille > pierre > ciseaux > feuille) 

    if (userChoice === computerChoice) {
        alert("Égalité");
        alert("C'est n'importe quoi " + userName);
    }
    else if (userChoice === "feuille" && computerChoice === "pierre" || 
    userChoice === "pierre" && computerChoice === "ciseaux" ||
    userChoice === "ciseaux" && computerChoice === "feuille") {
        alert("Vous avez gagné");//Afficher le vainqueur (userName || computer) 
        alert("Bien joué, mais quel BG ce " + userName);
    } 
    else{
        alert("Vous avez perdu");
        alert("Nul, nul, nul et nul " + userName);
    }

  
