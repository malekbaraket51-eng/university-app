
import { useState } from "react";
import "./StudentCard.css";

function StudentCard(props) {
  const [afficherCoordonnees, setAfficherCoordonnees] = useState(false);

  // Afficher / Cacher les coordonnées
  const toggleCoordonnees = () => {
    setAfficherCoordonnees(!afficherCoordonnees);
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

      <button
        className="btn-contact"
        onClick={toggleCoordonnees}
      >
        {afficherCoordonnees
          ? "Cacher les coordonnées"
          : "Afficher les coordonnées"}
      </button>

      <button
        className="btn-modifier"
        onClick={props.ouvrirFormulaireModification}
      >
        Modifier
      </button>

      <button
        className="btn-supprimer"
        onClick={supprimerEtudiant}
      >
        Supprimer
      </button>
    </div>
  );
}

export default StudentCard;
