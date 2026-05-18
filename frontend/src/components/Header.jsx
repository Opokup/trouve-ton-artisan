import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import logo from "../assets/Logo.png";

function Header() {
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/categories")
      .then((response) => setCategories(response.data))
      .catch((error) => console.error("Erreur catégories :", error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (search.trim() !== "") {
      navigate(`/artisans?search=${search}`);
      setSearch("");
    }
  };

  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg bg-white shadow-sm">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Trouve ton artisan" className="site-logo" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Ouvrir le menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav mx-auto mb-3 mb-lg-0">
              {categories.map((category) => (
                <li className="nav-item" key={category.id}>
                  <Link
                    className="nav-link"
                    to={`/artisans?category=${category.name}`}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>

            <form className="d-flex" onSubmit={handleSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Rechercher un artisan"
                aria-label="Rechercher un artisan"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
              <button className="btn btn-primary-custom" type="submit">
                Rechercher
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;