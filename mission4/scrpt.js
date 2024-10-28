// js/script.js

document.getElementById("inscriptionForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Empêche l'envoi du formulaire

    const nom = document.getElementById("nom").value.trim();
    const prenom = document.getElementById("prenom").value.trim();
    const email = document.getElementById("email").value.trim();
    const departement = document.getElementById("departement").value.trim();
    
    let erreurs = [];

    if (nom === "") erreurs.push("Le champ Nom est requis.");
    if (prenom === "") erreurs.push("Le champ Prénom est requis.");
    if (email === "") {
        erreurs.push("Le champ Email est requis.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        erreurs.push("Le format de l'email est invalide.");
    }

    if (departement === "" || isNaN(departement) || departement.length !== 2) {
        erreurs.push("Le numéro de département doit être un nombre à 2 chiffres.");
    }

    if (erreurs.length > 0) {
        alert(erreurs.join("\n"));
    } else {
        alert("Formulaire soumis avec succès !");
    }
});
