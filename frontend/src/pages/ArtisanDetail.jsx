import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import api from "../services/api";

function ArtisanDetail() {
  const { id } = useParams();

  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    });

const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    api.get(`/artisans/${id}`)
      .then((response) => {
        setArtisan(response.data);
      })
      .catch((error) => {
        console.error("Erreur artisan :", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const handleChange = (event) => {
  setFormData({
    ...formData,
    [event.target.id]: event.target.value,
  });
};

const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    await api.post(
      `/artisans/${artisan.id}/contact`,
      formData
    );

    setSuccessMessage(
      "Votre message a bien été envoyé."
    );

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
  }
};

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <p>Chargement...</p>
      </div>
    );
  }

  if (!artisan) {
    return (
      <div className="container py-5 text-center">
        <h1>Artisan introuvable</h1>
      </div>
    );
  }

  const stars = "★".repeat(Math.round(artisan.note));

  if (!artisan) {
  return (
    <div className="container py-5 text-center">
      <h1>Artisan introuvable</h1>
    </div>
  );
}

  return (
    <section className="page-section">
        <Helmet>
            <title>{artisan.name} - Trouve ton artisan</title>

            <meta
                name="description"
                content={`Découvrez ${artisan.name}, artisan spécialisé en ${artisan.Specialty?.name}.`}
            />
        </Helmet>
      <div className="container">
        <div className="card-custom artisan-detail">
          <div className="row g-5 align-items-start">
            <div className="col-lg-4">
              <img
                src="https://placehold.co/600x400"
                alt={artisan.name}
                className="img-fluid rounded"
              />
            </div>

            <div className="col-lg-8">
              <h1>{artisan.name}</h1>

              <p className="artisan-stars">
                {stars} <span>{artisan.note}/5</span>
              </p>

              <p>
                <strong>Spécialité :</strong>{" "}
                {artisan.Specialty?.name}
              </p>

              <p>
                <strong>Catégorie :</strong>{" "}
                {artisan.Specialty?.Category?.name}
              </p>

              <p>
                <strong>Localisation :</strong>{" "}
                {artisan.city}
              </p>

              {artisan.website && (
                <p>
                  <strong>Site web :</strong>{" "}
                  <a
                    href={artisan.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visiter le site
                  </a>
                </p>
              )}

              <div className="about-section">
                <h2>A propos</h2>
                <p>{artisan.about}</p>
              </div>
            </div>
          </div>

          <div className="contact-section">
            <h2>Contacter cet artisan</h2>

            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <label htmlFor="name" className="form-label">
                  Nom
                </label>

                <input
                    type="text"
                    id="name"
                    className="form-control"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    />
              </div>

              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Email
                </label>

                <input
                    type="email"
                    id="email"
                    className="form-control"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    />
              </div>

              <div className="col-12">
                <label htmlFor="subject" className="form-label">
                  Objet
                </label>

                <input
                    type="text"
                    id="subject"
                    className="form-control"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    />
              </div>

              <div className="col-12">
                <label htmlFor="message" className="form-label">
                  Message
                </label>

                <textarea
                    id="message"
                    rows="6"
                    className="form-control"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    ></textarea>
              </div>
              
            {successMessage && (
             <div className="alert alert-success">
              {successMessage}
             </div>
              )}

              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-primary-custom"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArtisanDetail;