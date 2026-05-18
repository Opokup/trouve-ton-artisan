import { useEffect, useState } from "react";
import api from "../services/api";
import ArtisanCard from "../components/ArtisanCard";
import { Helmet } from "react-helmet";

function Home() {
  const [topArtisans, setTopArtisans] = useState([]);

  useEffect(() => {
    api.get("/artisans/top")
      .then((response) => setTopArtisans(response.data))
      .catch((error) => console.error("Erreur artisans du mois :", error));
  }, []);

  return (
    <>
    <Helmet>
        <title>Trouve ton artisan - Accueil</title>

        <meta
            name="description"
            content="Trouvez facilement un artisan en Auvergne-Rhône-Alpes."
        />
    </Helmet>
      <section className="hero-section">
        <div className="container py-5 text-center">
          <h1>Trouvez facilement un artisan près de chez vous</h1>
          <p>
            Une plateforme régionale pour contacter les artisans
            d’Auvergne-Rhône-Alpes simplement et rapidement.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <h2 className="section-title text-center">
            Comment trouver mon artisan ?
          </h2>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="step-card card-custom h-100">
                <span className="step-number">1</span>
                <p>Choisir la catégorie d’artisanat dans le menu.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="step-card card-custom h-100">
                <span className="step-number">2</span>
                <p>Choisir un artisan.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="step-card card-custom h-100">
                <span className="step-number">3</span>
                <p>Le contacter via le formulaire de contact.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="step-card card-custom h-100">
                <span className="step-number">4</span>
                <p>Une réponse sera apportée sous 48h.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section top-artisans-section">
        <div className="container">
          <h2 className="section-title text-center">Les artisans du mois</h2>

          <div className="row g-4">
            {topArtisans.map((artisan) => (
              <div className="col-md-4" key={artisan.id}>
                <ArtisanCard artisan={artisan} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;