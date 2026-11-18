
import { useState } from "react";
import "./studentform.css";

function StudentForm({ ajouterEtudiant, fermerFormulaire }) {

  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [filiere, setFiliere] = useState(
    "Génie Logiciel et Systèmes d'Information"
  );
  const [anneeEtude, setAnneeEtude] = useState("2ème année");
  const [groupe, setGroupe] = useState("GLSI 2");
  const [ville, setVille] = useState("");

  // Ajouter un étudiant
  const handleSubmit = (e) => {
    e.preventDefault();

    if (prenom.trim() === "" || nom.trim() === "") {
      alert("Veuillez saisir le prénom et le nom !");
      return;
    }

    const nouvelEtudiant = {
      prenom: prenom.trim(),
      nom: nom.trim(),
      email,
      telephone,
      filiere,
      anneeEtude,
      groupe,
      ville
    };

    ajouterEtudiant(nouvelEtudiant);

    fermerFormulaire();
  };

  return (
    <div className="form-overlay">

      <div className="student-form">

        <h2>Ajouter un étudiant</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Prénom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="tel"
            placeholder="Téléphone"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />

          <select
            value={filiere}
            onChange={(e) => setFiliere(e.target.value)}
          >
            <option value="Génie Logiciel et Systèmes d'Information">
              Génie Logiciel et Systèmes d'Information
            </option>
          </select>

          <select
            value={anneeEtude}
            onChange={(e) => setAnneeEtude(e.target.value)}
          >
            <option value="1ère année">1ère année</option>
            <option value="2ème année">2ème année</option>
            <option value="3ème année">3ème année</option>
          </select>

          <select
            value={groupe}
            onChange={(e) => setGroupe(e.target.value)}
          >
            <option value="GLSI 1">GLSI 1</option>
            <option value="GLSI 2">GLSI 2</option>
            <option value="GLSI 3">GLSI 3</option>
          </select>

          <input
            type="text"
            placeholder="Ville"
            value={ville}
            onChange={(e) => setVille(e.target.value)}
          />

          <div className="form-actions">

            <button type="submit" className="btn-save">
              Enregistrer
            </button>

            <button
              type="button"
              className="btn-cancel"
              onClick={fermerFormulaire}
            >
              Annuler
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default StudentForm;
