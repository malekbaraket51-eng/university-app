import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import React from 'react';
import './App.css'; // Ou './StudentCard.css' selon votre structure

function App() {
  // Définition des informations de l'étudiant avec const
  const nomPrenom = "Malek Baraket";
  const email = "malekbaraket51@gmail.com";
  const telephone = "+216 56222300";
  const filiere = "Génie Logiciel et Systèmes d'Information";
  const anneeEtude = "2ème année";
  const groupe = "1";
  const ville = "Mahdia";
  const photoUrl = "33017b51-6e34-485f-b394-c3dc16968ab2.jpg"; // Remplacez par le lien ou l'image de votre choix

  return (
    <div className="card-container">
      <div className="student-card">
        {/* Ajout de l'image */}
        <div className="avatar-wrapper">
          <img src={photoUrl} alt={nomPrenom} className="student-avatar" style={{width: "100px",height:"100px",objectFit:"cover",
            borderRadius:"50%" }} />
        </div>

        {/* Titre */}
        <h2 className="card-title">Fiche étudiant</h2>

        {/* Détails de l'étudiant */}
        <div className="student-info">
          <p><strong>Nom & Prénom :</strong> {nomPrenom}</p>
          <p><strong>Email :</strong> {email}</p>
          <p><strong>Téléphone :</strong> {telephone}</p>
          <p><strong>Filière :</strong> {filiere}</p>
          <p><strong>Année d'étude :</strong> {anneeEtude}</p>
          <p><strong>Groupe :</strong> {groupe}</p>
          <p><strong>Ville :</strong> {ville}</p>
        </div>

        {/* Bouton Contacter (ouvre l'application e-mail) */}
        <a href={`mailto:${email}`} className="contact-btn">
          Contacter
        </a>
      </div>
    </div>
  );
}

export default App;
