// Recuperer les elements
const prenom = document.getElementById("prenom");
const prenomError = document.getElementById("prenom-error");

const nom = document.getElementById("nom");
const nomError = document.getElementById("nom-error");

const age = document.getElementById("age");
const ageError = document.getElementById("age-error");

const couleur = document.getElementById("color");
const description = document.getElementById("description");

const resultat = document.getElementById("resultat");

// Fonctions de validation
function validerPrenom(preTexte = "") {
  const texte = preTexte.trim();
  if (texte == "") prenomError.innerText = "Le prenom est vide";
  else if (texte.length < 2) prenomError.innerText = "Le prenom est trop court";
  else {
    prenomError.innerText = "👍";
    return true;
  }

  return false;
}

function validerNom(preTexte = "") {
  const texte = preTexte.trim();
  if (texte == "") nomError.innerText = "Le nom est vide";
  else if (texte.length < 2) nomError.innerText = "Le nom est trop court";
  else {
    nomError.innerText = "👍";
    return true;
  }

  return false;
}

function validerAge(age) {
  if (!age) ageError.innerText = "Age invalide";
  else if (age < 0) ageError.innerText = "Age negatif !";
  else if (age > 100) ageError.innerText = "Trop ancient !";
  else {
    ageError.innerText = "";
    return true;
  }

  return false;
}

function validerFormulaire() {
  // reinitaliser le contenu
  resultat.innerHTML = "";

  // Valider les champs en appelant les fonctions de validation individuelles.
  /* < Methode 1 : compliquee > */
  //   const champs = [prenom, nom, age];
  // const valideurs = [validerPrenom, validerNom, validerAge];
  // let toutEstOk = true;
  //   champs.forEach((element, index) => {
  //     const iciEstOK = valideurs[index](element.target.value);

  //     if (toutEstOk == true) {
  //       toutEstOk = iciEstOK;
  //     }
  //   });

  /* < Methode 2 > */
  const prenomVrai = validerPrenom(prenom.value);
  const nomVrai = validerNom(nom.value);
  const ageVrai = validerAge(nom.value);

  const toutEstOk = prenomVrai && nomVrai && ageVrai;

  if (!toutEstOk) {
    resultat.innerHTML =
      "<h2 class='error'> certains champs sont invalides </h2>";
  } else {
    const C_prenom = document.createElement("h3");
    C_prenom.innerText = "Prenom: " + prenom.value;

    const C_nom = document.createElement("h3");
    C_nom.innerText = "Nom: " + nom.value;

    const C_age = document.createElement("h3");
    C_age.innerText = "Age: " + age.value;

    const C_couleur = document.createElement("h3");
    C_couleur.innerText = "Couleur: " + couleur.value;
    C_couleur.style.color = couleur.value;

    const C_description = document.createElement("h3");
    C_description.innerText = "Description: " + description.value;

    // Injecter les lignes dans la section resultats
    resultat.appendChild(C_prenom);
    resultat.appendChild(C_nom);
    resultat.appendChild(C_age);
    resultat.appendChild(C_couleur);
    resultat.appendChild(C_description);
  }
}

// Ajout des evenements
prenom.addEventListener("input", (event) => {
  const text = event.target.value;
  validerPrenom(text);
});

nom.addEventListener("input", (event) => {
  const text = event.target.value;
  validerNom(text);
});

age.addEventListener("input", (event) => {
  const age = event.target.value;
  validerAge(age);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("soumission en cours...");
  validerFormulaire();
});
