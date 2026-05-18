import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import api from "../services/api";
import ArtisanCard from "../components/ArtisanCard";

function Artisans() {
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");
  const search = searchParams.get("search");

  useEffect(() => {
    const fetchArtisans = async () => {
      try {
        let response;

        if (search) {
          response = await api.get(`/artisans/search?q=${search}`);
        } else {
          response = await api.get("/artisans");
        }

        let data = response.data;

        if (category) {
          data = data.filter(
            (artisan) =>
              artisan.Specialty?.Category?.name === category
          );
        }

        setArtisans(data);
      } catch (error) {
        console.error("Erreur chargement artisans :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArtisans();
  }, [category, search]);

  const getTitle = () => {
    if (search) {
      return `Résultats pour "${search}"`;
    }

    if (category) {
      return category;
    }

    return "Tous les artisans";
  };

  return (
    <section className="page-section">
      <div className="container">
        <h1 className="section-title text-center">
          {getTitle()}
        </h1>

        {loading ? (
          <p className="text-center">Chargement...</p>
        ) : artisans.length === 0 ? (
          <p className="text-center">
            Aucun artisan trouvé.
          </p>
        ) : (
          <div className="row g-4">
            {artisans.map((artisan) => (
              <div
                className="col-md-6 col-lg-4"
                key={artisan.id}
              >
                <ArtisanCard artisan={artisan} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Artisans;