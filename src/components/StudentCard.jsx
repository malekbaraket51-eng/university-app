
function StudentCard({
  nomPrenom,
  email,
  telephone,
  filiere,
  anneeEtude,
  groupe,
  ville,
  photoUrl
}) {
  return (
    <div className="card-container">
      <div className="student-card">

        <div className="avatar-wrapper">
          <img
            src={photoUrl}
            alt={nomPrenom}
            className="student-avatar"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "50%"
            }}
          />
        </div>

        <h2 className="card-title">Fiche étudiant</h2>

        <div className="student-info">
          <p><strong>Nom & Prénom :</strong> {nomPrenom}</p>
          <p><strong>Email :</strong> {email}</p>
          <p><strong>Téléphone :</strong> {telephone}</p>
          <p><strong>Filière :</strong> {filiere}</p>
          <p><strong>Année d'étude :</strong> {anneeEtude}</p>
          <p><strong>Groupe :</strong> {groupe}</p>
          <p><strong>Ville :</strong> {ville}</p>
        </div>

        <a
          href={`mailto:${email}`}
          className="contact-btn"
        >
          Contacter
        </a>

      </div>
    </div>
  );
}

export default StudentCard;
