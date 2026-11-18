
import { useState } from "react";
import "./StudentCard.css";

function StudentCard(props) {
  const [afficherCoordonnees, setAfficherCoordonnees] = useState(false);

  // Afficher / Cacher les coordonnées
  const toggleCoordonnees = () => {
    setAfficherCoordonnees(!afficherCoordonnees);
  };

  // Modifier toutes les informations
  const modifierEtudiant = () => {
    const prenom = prompt("Nouveau prénom :", props.prenom);
    if (prenom === null) return;

    const nom = prompt("Nouveau nom :", props.nom);
    if (nom === null) return;

    const email = prompt("Nouvel email :", props.email);
    if (email === null) return;

    const telephone = prompt("Nouveau téléphone :", props.telephone);
    if (telephone === null) return;

    const filiere = prompt("Nouvelle filière :", props.filiere);
    if (filiere === null) return;

    const anneeEtude = prompt("Nouvelle année :", props.anneeEtude);
    if (anneeEtude === null) return;

    const groupe = prompt("Nouveau groupe :", props.groupe);
    if (groupe === null) return;

    const ville = prompt("Nouvelle ville :", props.ville || "");
    if (ville === null) return;

    // Vérifier que les champs ne sont pas vides
    if (
      !prenom.trim() ||
      !nom.trim() ||
      !email.trim() ||
      !telephone.trim() ||
      !filiere.trim() ||
      !anneeEtude.trim() ||
      !groupe.trim() ||
      !ville.trim()
    ) {
      alert("Tous les champs sont obligatoires !");
      return;
    }

    props.modifierEtudiant(props.id, {
      prenom: prenom.trim(),
      nom: nom.trim(),
      email: email.trim(),
      telephone: telephone.trim(),
      filiere: filiere.trim(),
      anneeEtude: anneeEtude.trim(),
      groupe: groupe.trim(),
      ville: ville.trim(),
    });

    alert("Étudiant modifié avec succès !");
  };

  // Supprimer étudiant
  const supprimerEtudiant = () => {
    const confirmation = window.confirm(
      "Voulez-vous vraiment supprimer cet étudiant ?"
    );

    if (confirmation) {
      props.supprimerEtudiant(props.id);
    }
  };

  return (
    <div className="student-card">
      <h2>Fiche étudiant</h2>

      <p>
        <strong>Nom & Prénom :</strong> {props.prenom} {props.nom}
      </p>

      <p>
        <strong>Filière :</strong> {props.filiere}
      </p>

      <p>
        <strong>Année :</strong> {props.anneeEtude}
      </p>

      <p>
        <strong>Groupe :</strong> {props.groupe}
      </p>

      <p>
        <strong>Ville :</strong> {props.ville || "Non renseignée"}
      </p>

      {afficherCoordonnees && (
        <div className="coordonnees">
          <p>
            <strong>Email :</strong> {props.email}
          </p>

          <p>
            <strong>Téléphone :</strong> {props.telephone}
          </p>
        </div>
      )}

      <button className="btn-contact" onClick={toggleCoordonnees}>
        {afficherCoordonnees
          ? "Cacher les coordonnées"
          : "Afficher les coordonnées"}
      </button>

      <button className="btn-modifier" onClick={modifierEtudiant}>
        Modifier
      </button>

      <button className="btn-supprimer" onClick={supprimerEtudiant}>
        Supprimer
      </button>
    </div>
  );
}

export default StudentCard;
