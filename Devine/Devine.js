var NombreAleatoire = 0;

var NombreEssaies = 10;



NombreAleatoire = (Math.random() * 100) + 1;

NombreAleatoire = Math.floor(NombreAleatoire);

console.log(NombreAleatoire);

function Replay () {
    NombreAleatoire = (Math.random() * 100) + 1;

    NombreAleatoire = Math.floor(NombreAleatoire);
    console.log(NombreAleatoire);
    NombreEssaies = 10;

    document.getElementById('TEXT').innerHTML = "Attention !!" + "<br>" +"Il te reste" + " " + NombreEssaies + " " + "essais";

    document.getElementById('Bouton').style.display= "block";
    document.getElementById('Nombre').style.display= "block";
    document.getElementById('Historique').innerHTML = "Historique : " + "<br>";
}

document.getElementById('Bouton').addEventListener("click", function () {

    var Valeur = document.getElementById("Nombre").value;

    document.getElementById('Historique').innerHTML += Valeur + "<br>";

    if (NombreAleatoire > Valeur) {
        document.getElementById('Indication').innerHTML = 'Retente ta chance.' + '<br>' + 'Le nombre est supérieur à ta proposition';
        Essaie ();
    }

    if (NombreAleatoire < Valeur) {
        document.getElementById('Indication').innerHTML ='Retente ta chance.'  + '<br>' + 'Le nombre est inférieur à ta proposition';
        Essaie ();
    }

    if (NombreAleatoire == Valeur) {
        document.getElementById('Indication').innerHTML ='Bravo tu as trouvé le nombre !';
    }

});

document.getElementById('TEXT').innerHTML = "Attention !!" + "<br>" +"Il te reste" + " " + NombreEssaies + " " + "essais";

function Essaie () {
    NombreEssaies--;
    document.getElementById('TEXT').innerHTML = "Attention !!" + "<br>" +"Il te reste" + " " + NombreEssaies + " " + "essais";

    if (NombreEssaies <= 0) {
       document.getElementById('Bouton').style.display= "none";
       document.getElementById('Nombre').style.display= "none";
       alert('Désolé tu as perdu.' + " " + 'Le nombre était' + " " + NombreAleatoire + " " + 'Tu peux cliquer sur le bouton "Reset" pour retenter ta chance !');
    }
}



document.getElementById('Replay').addEventListener("click", Replay);