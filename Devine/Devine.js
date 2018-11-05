
var NombreAleatoire = 0;

var NombreEssaies = 10;

function Nombre () {

    NombreAleatoire = (Math.random() * 100) + 1;

    NombreAleatoire = Math.floor(NombreAleatoire);
}

function Replay () {

    Nombre();

    NombreEssaies = 10;

    document.getElementById('Bouton').style.display= "block";
    document.getElementById('Nombre').style.display= "block";
}

document.getElementById('Bouton').addEventListener("click", function () {

    Nombre();

    var Valeur = document.getElementById("Nombre").value;

    if (NombreAleatoire > Valeur) {
        alert('Retente ta chance. Le nombre est supérieur à ta proposition');
        Essaie ();
    }

    if (NombreAleatoire < Valeur) {
        alert('Retente ta chance. Le nombre est inférieur à ta proposition');
        Essaie ();
    }

    if (NombreAleatoire == Valeur) {
        alert('Bravo tu as trouvé le nombre !');
    }

});

document.getElementById('TEXT').innerHTML = "Attention !!" + "<br>" +"Il te reste" + " " + NombreEssaies + " " + "essais";

function Essaie () {
    NombreEssaies--;
    document.getElementById('TEXT').innerHTML = "Attention !!" + "<br>" +"Il te reste" + " " + NombreEssaies + " " + "essais";

    if (NombreEssaies <= 0) {
       document.getElementById('Bouton').style.display= "none";
       document.getElementById('Nombre').style.display= "none";
       alert('Désolé tu as perdu. Tu peux cliquer sur le bouton "Reset" pour retenter ta chance !');
    }
}



document.getElementById('Replay').addEventListener("click", Replay);