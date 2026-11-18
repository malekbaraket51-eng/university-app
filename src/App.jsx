
import { useState } from "react";
import "./App.css";

import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import Footer from "./components/Footer.jsx";
import StudentForm from "./StudentForm.jsx";

function App() {
  const [etudiants, setEtudiants] = useState([
    {
      id: 1,
      prenom: "Slim",
      nom: "Ben Ali",
      email: "slim@gmail.com",
      telephone: "12345678",
      filiere: "GLSI",
      anneeEtude: "2ème année",
      groupe: "GLSI 2",
      ville: "Tunis",
    },
    {
      id: 2,
      prenom: "Sarra",
      nom: "Trabelsi",
      email: "sarra@gmail.com",
      telephone: "98765432",
      filiere: "GLSI",
      anneeEtude: "2ème année",
      groupe: "GLSI 2",
      ville: "Sousse",
    },
    {
      id: 3,
      prenom: "Mariem",
      nom: "Ahmed",
      email: "mariem@gmail.com",
      telephone: "22334455",
      filiere: "GLSI",
      anneeEtude: "2ème année",
      groupe: "GLSI 2",
      ville: "Sfax",
    },
  ]);

  const [afficherForm, setAfficherForm] = useState(false);

  // Ajouter un étudiant
  const ajouterEtudiant = (nouvelEtudiant) => {
    setEtudiants((anciens) => [
      ...anciens,
      {
        id: Date.now(),
        ...nouvelEtudiant,
      },
    ]);
  };

  // Supprimer un étudiant
  const supprimerEtudiant = (id) => {
    setEtudiants((anciens) =>
      anciens.filter((etudiant) => etudiant.id !== id)
    );
  };

  // Modifier toutes les informations de l'étudiant
  const modifierEtudiant = (id, nouvellesDonnees) => {
    setEtudiants((anciens) =>
      anciens.map((etudiant) => {
        if (etudiant.id === id) {
          return {
            ...etudiant,
            ...nouvellesDonnees,
          };
        }

        return etudiant;
      })
    );
  };

  return (
    <div>
      <Header />
      <Navbar />

      <main>
        {/* Formulaire d'ajout */}
        <section className="form-section">
          <h2>Ajouter un étudiant</h2>

          <button
            type="button"
            onClick={() => setAfficherForm(true)}
          >
            + Ajouter un étudiant
          </button>

          {afficherForm && (
            <StudentForm
              ajouterEtudiant={ajouterEtudiant}
              fermerFormulaire={() => setAfficherForm(false)}
            />
          )}
        </section>

        {/* Liste des étudiants */}
        <section className="students-section">
          <h2>Liste des étudiants</h2>

          <div className="students-list">
            {etudiants.map((etudiant) => (
              <StudentCard
                key={etudiant.id}
                {...etudiant}
                supprimerEtudiant={supprimerEtudiant}
                modifierEtudiant={modifierEtudiant}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
