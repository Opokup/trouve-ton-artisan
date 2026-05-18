import { Link } from "react-router-dom";

function ArtisanCard({ artisan }) {
  const specialty = artisan.Specialty?.name;
  const stars = "★".repeat(Math.round(artisan.note));

  return (
    <Link to={`/artisan/${artisan.id}`} className="artisan-card-link">
      <article className="card-custom artisan-card h-100">
        <div className="card-body">
          <h3>{artisan.name}</h3>
          <p className="artisan-stars" aria-label={`Note ${artisan.note} sur 5`}>
            {stars} <span>{artisan.note}/5</span>
          </p>
          <p><strong>Spécialité :</strong> {specialty}</p>
          <p><strong>Localisation :</strong> {artisan.city}</p>
        </div>
      </article>
    </Link>
  );
}

export default ArtisanCard;