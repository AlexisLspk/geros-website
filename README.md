# Geros 1.0 - MVP

Geros est une webapp innovante visant à transformer les soins gériatriques en offrant une solution digitale pour les EHPAD et établissements de gériatrie.

## Vision

"Rendre la gériatrie attractive et efficace grâce au numérique"

## Fonctionnalités principales

- **Formation en 5 minutes** : Modules interactifs sur les chutes, Alzheimer et autres pathologies gériatriques
- **Plans de soins en 1 clic** : Générateur de plans personnalisés
- **Communauté active** : Espace d'échange entre professionnels

## Installation

1. Cloner le repository :
```bash
git clone [URL_DU_REPO]
cd geros-website
```

2. Installer les dépendances :
```bash
npm install
```

3. Configuration des variables d'environnement :
   - Créer un fichier `.env` à la racine du projet
   - Ajouter les variables suivantes :
   ```
   VITE_SUPABASE_URL=votre_url_supabase
   VITE_SUPABASE_ANON_KEY=votre_clé_anon_supabase
   ```
   - Remplacer les valeurs par vos propres clés Supabase

4. Lancer le serveur de développement :
```bash
npm run dev
```

## Technologies utilisées

- React.js
- Tailwind CSS
- Supabase (à configurer)
- React Router

## Structure du projet

```
src/
  ├── components/
  │   ├── Formation.jsx
  │   ├── PlansSoins.jsx
  │   └── Communaute.jsx
  ├── config/
  │   └── supabase.js
  ├── App.jsx
  └── index.css
```

## Configuration Supabase

1. Créer un compte sur [Supabase](https://supabase.com)
2. Créer un nouveau projet
3. Dans les paramètres du projet, trouver les clés d'API
4. Copier l'URL du projet et la clé anon/public dans votre fichier `.env`

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails. 