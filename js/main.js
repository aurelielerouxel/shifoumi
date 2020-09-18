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

  
// //Correction shifoumi

// // Faire une partie en plusieurs manches (compter les points)
// var scores = {
//     "user" : 0,
//     "computer" : 0
// };

// //FUNCTIONS
// //Vérifier saisies utilisateur (entre 2 et 20 caractères + la casse)
// function checkUserNameLength() {  
//      var userName = prompt("Entrez votre nom ");
//      while(userName.length < 2 || userName.length > 20){
//      var userName = prompt("Votre nom doit être compris entre 2 et 20 caractères")
//      }
//      return userName;    
// }

// // Donner un point au joueur || ordinateur
// function increaseScores(scores, result) {
//     if(result === 1) {
//         scores.user++;
//     }
//     else if(result === -1) {
//         scores.computer++;
//     }
//     return scores;
// }

// // Montrer le résultat
// function showResult(result, userName) {
//     if(result === 1) {
//         return alert(userName + " gagne !");
//     }
//     else if(result === 0) {
//         return alert("Egalité !");
//     }
//     else {
//         return  alert("L'ordinateur gagne !");
//     }
// }

// // //Permettre de rejouer une partie  
// function newGame() {
//     scores = {
//         user: 0,
//         computer: 0
//     }
//     replayGame();
//     var replay = prompt("Voulez-vous rejouer ? (Oui/Non)").toLowerCase();
//     if(replay === "Oui") {
//         newGame();
//     }
// } 

// var maxRound = 3;

