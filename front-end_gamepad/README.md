# Fullstack Gamepad

Ce projet est une application fullstack qui offre une plateforme pour les utilisateurs afin de se connecter, s'inscrire et accéder à un jeu interactif via une interface web. Ce guide détaille les étapes pour installer, configurer et exécuter le projet.
Les données ont été extraites de l'API RAWG.

---

## Table des matières

1. [Prérequis](#prérequis)
2. [Installation](#installation)
3. [Structure du Projet](#structure-du-projet)
4. [Utilisation](#utilisation)
5. [Fonctionnalités Principales](#fonctionnalités-principales)
6. [Technologies Utilisées](#technologies-utilisées)
7. [Scripts Disponibles](#scripts-disponibles)
8. [Contributions](#contributions)
9. [Licence](#licence)

---

## Prérequis

- Node.js (v16 ou supérieur)
- npm ou yarn pour la gestion des paquets
- MongoDB pour la base de données
- Un fichier `.env` contenant les variables suivantes :
  ```env
  PORT=3000
  MONGODB_URI=<votre_url_mongodb>
  ```

---

## Installation

### 1. Clonez le repository

```bash
git clone https://github.com/pricilliaedou/full-stack_game-pad.git
cd fullstack-gamepad
```

### 2. Installez les dépendances pour le front-end et le back-end

```bash
# Front-end
cd front-end
yarn install

# Back-end
cd back-end
yarn install
```

### 3. Configurez les variables d'environnement

Créez un fichier `.env` dans le dossier `back-end` avec les variables indiquées ci-dessus.

---

## Structure du Projet

### Front-end

**Dossier** : `front-end`

- **Framework** : React.js
- **Point d'entrée** : `App.jsx`
- **Bibliothèques utilisées** :
  - `react-router-dom` pour la navigation
  - `axios` pour les requêtes HTTP
  - `tailwind` pour le style
- **Déploiement** :
  Déploiement sur Netlify : https://fullstack-gamepad.netlify.app/

### Back-end

**Dossier** : `back-end`

- **Framework** : Express.js
- **Point d'entrée** : `index.js`
- **Modèle utilisateur** :
  - Email unique
  - Username unique
  - Gestion des mots de passe avec `crypto-js`
- **Déploiement**
  Déploiement sur Northflank : site--backend-gamepad--n8mxxl6qzz9w.code.run

---

## Utilisation

### Lancer l'application

#### Front-end

```bash
cd front-end
yarn dev
```

L'application sera accessible en local sur [http://localhost:5173](http://localhost:5173).

#### Back-end

```bash
cd back-end
npm start
```

L'API sera accessible en local sur [http://localhost:3000](http://localhost:3000).

---

## Fonctionnalités Principales

1. **Authentification Utilisateur**
   - Inscription et connexion avec vérification des données.
2. **Gestion des Comptes**
   - Stockage sécurisé des mots de passe avec `crypto-js`.
3. **Navigation Interactive**
   - Accès à plusieurs pages (Accueil, Jeu, Connexion, Inscription) via `react-router-dom`.
4. **API REST**
   - Points de terminaison pour l'authentification utilisateur et la gestion des données.

---

## Technologies Utilisées

### Front-end

- React.js
- TailwindCSS
- Axios

### Back-end

- Express.js
- MongoDB via Mongoose
- Crypto-js pour le chiffrement
- Postman pour tester les routes

---

## Scripts Disponibles

### Front-end

- `yarn dev` : Démarre le serveur de développement.
- `yarn build` : Génère une version optimisée pour la production.

### Back-end

- `npm start` : Lance le serveur Express.

---

## Contributions

Les contributions sont les bienvenues ! Merci de suivre les étapes suivantes :

1. Forkez le repository.
2. Créez une branche pour vos modifications : `git checkout -b feature/ma-fonctionnalite`.
3. Committez vos modifications : `git commit -m "Ajout d'une nouvelle fonctionnalité"`.
4. Poussez votre branche : `git push origin feature/ma-fonctionnalite`.
5. Ouvrez une Pull Request.

---

## Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser et de le modifier selon les termes de la licence.

---
