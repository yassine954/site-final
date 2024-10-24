function test_age(){
    let age = prompt("Quelle est votre âge ?");
    if (age<18) {
        document.write("Vous êtes mineur");
        document.body.style.backgroundColor="red";
    }
    else {

    document.write("Vous êtes majeur");
    document.body.style.backgroundColor="green";
    }
}


function calcul_moyenne() {
    var n1 = prompt("Donner la première note :");
    var n2 = prompt("Donner la deuxième note :");
    var n3 = prompt("Donner la troisième note :");

    var somme = Number(n1) + Number(n2) + Number(n3);

    document.write("Voici la somme : " + somme + "<br>");
    var moyenne = somme/3;

    document.write("Voici la moyenne : " + moyenne + "<br>");

} 
function test_age() {
    let age = prompt ("Quelle est votre age ?")
    if(age<18) {
        document.write("Vous êtes mineur")
        document.body.style.backgroundColor="red"
    }
    else {
        document.write("Vous êtes majeur")
        document.body.style.backgroundColor="green"
    }
}

function calcul_moyenne(){
    var n1=prompt("donner la premiere note :");
    var n2=prompt("donner la deuxieme note");
    var n3=prompt("donner la troisieme note");

    var somme = Number(n1) + Number(n2) + Number(n3);


    document.write("Voici la somme : "+ somme + "<br>");
    var moyenne = somme/3;

    document.write("Voici la Moyenne : "+ moyenne + "<br>");

    if(moyenne<10){
        document.write("Vous n'etes pas admis");
        document.body.style.backgroundColor="red"
    }
    else {
        document.write("Felicitation ! Vous êtes admis")
        document.body.style.backgroundColor="green"
    }
}


function test_couleur(){
    let couleur = prompt("donner la couleur");
    if (couleur == "rouge" || couleur =="red"){
        document.body.style.background = "red"

    }
    else if (couleur == "bleu" || couleur =="blue"){
        document.body.style.backgroundColor = "pink"

    }
    else if (couleur == "vert" || couleur == "green"){
        document.body.style.backgroundColor = "green"

    }
    else if (couleur == "rose" || couleur =="pink"){
        document.body.style.backgroundColor = "pink"
    
    }
    else{
        alert("couleir non comprise")
    }
    }
    