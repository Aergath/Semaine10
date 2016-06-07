// Declaration des variables 
$bouton = document.getElementById("bouton");
$multiplicateur = document.getElementById("multiplicateur");
$score = document.getElementById("score");
$autoclic = document.getElementById("autoclic");
score = 0;
nbMultiplicateur = 1;
            
            // Affichage et calcul du Score + affichage boutons
            
            // Affichage du score
function afficherScore() {
    "use strict";
    $score.innerHTML = "Score : " + score;
}
            
            // affichage du multiplicateur 

function afficherNbMultiplicateur() {
    "use strict";
    $multiplicateur.innerHTML = "Multiplicateur x" + nbMultiplicateur + " (Upgrade dans : " + prix() + " points)";
}
            
            // MAJ du score a chaque clic 

function clic() {
    "use strict";
    score = score + nbMultiplicateur;
    afficherScore();
}
            
            // Affichage du prix de l'autoclic 
            
function afficherPrixAutoclic() {
    "use strict";
    $autoclic.innerHTML = "Acheter la fonction autoclic pour 200 points";
}
            // Calculs des prix 
                // Calcul le prix des augmentations
function prix() {
    "use strict";
    return 50 * nbMultiplicateur;
}
            
           
            
            // Achat de l'autoclic et paiement du cout 
function acheterAutoclic() {
    "use strict";
    if (score >= 200) {
        score = score - 200;
        afficherPrixAutoclic();
        autoclic();
    } else {
        alert("Vous avez besoin de plus de points !");
    }
    
}

                // Achat d'un multiplicateur 
function acheterMultiplicateur() {
    "use strict";
    if (score >= prix()) {
        score = score - prix();
        nbMultiplicateur = nbMultiplicateur + 1;
        afficherNbMultiplicateur();
        afficherScore();
    } else {
        alert("Vous avez besoin de plus de points !");
    }
}
                // Fonction Autoclic
function autoclic() {
    "use strict";
    setInterval($bouton.onclick, 1000);
                // fin
}

$bouton.onclick = clic;
$multiplicateur.onclick = acheterMultiplicateur;
$autoclic.onclick = acheterAutoclic;
afficherPrixAutoclic();
afficherScore();
afficherNbMultiplicateur();
    