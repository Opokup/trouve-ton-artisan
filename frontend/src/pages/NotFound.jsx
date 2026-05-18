import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="page-section">
      <div className="container text-center">
        <div className="card-custom p-5">
          <h1 className="display-1 fw-bold text-danger">
            404
          </h1>

          <h2 className="mb-4">
            Page non trouvée
          </h2>

          <p className="mb-4">
            La page que vous recherchez n'existe pas
            ou a été déplacée.
          </p>

          <Link
            to="/"
            className="btn btn-primary-custom"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;