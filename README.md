# Trouve ton artisan

Plateforme régionale permettant de trouver facilement un artisan en Auvergne-Rhône-Alpes.

## Technologies utilisées

### Frontend
- React
- React Router
- Bootstrap
- Sass
- Axios

### Backend
- Node.js
- Express
- Sequelize
- MySQL

## Installation

### Cloner le projet

```bash
git clone URL_DU_REPO
```

---

### Backend

```bash
cd backend
npm install
npm run dev
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Variables d'environnement

Créer un fichier `.env` dans le dossier backend :

```env
PORT=3000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=trouve_ton_artisan
DB_PORT=3306

MAIL_USER=
MAIL_PASS=
```

## Base de données

Créer la base :

```sql
CREATE DATABASE trouve_ton_artisan;
```

Puis lancer :

```bash
npm run seed
```

## Fonctionnalités

- Liste des artisans
- Recherche artisan
- Filtre par catégorie
- Fiche artisan
- Formulaire de contact
- Responsive mobile first
- SEO
- Page 404

## Sécurité

- Helmet
- Express Rate Limit
- Variables d’environnement
- Sequelize ORM