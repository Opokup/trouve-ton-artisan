import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container py-4">
        <div className="row gy-4">
          <div className="col-md-4">
            <h2 className="footer-title">Trouve ton artisan</h2>
            <p>
              Plateforme régionale pour trouver facilement un artisan en
              Auvergne-Rhône-Alpes.
            </p>
          </div>

          <div className="col-md-4">
            <h3 className="footer-subtitle">Pages légales</h3>
            <ul className="footer-links">
              <li><Link to="/mentions-legales">Mentions légales</Link></li>
              <li><Link to="/donnees-personnelles">Données personnelles</Link></li>
              <li><Link to="/accessibilite">Accessibilité</Link></li>
              <li><Link to="/cookies">Cookies</Link></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h3 className="footer-subtitle">Antenne de Lyon</h3>
            <address>
              101 cours Charlemagne<br />
              CS 20033<br />
              69269 LYON CEDEX 02<br />
              France<br />
              <a href="tel:+33426734000">+33 (0)4 26 73 40 00</a>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;