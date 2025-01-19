# 🚀 Autorole Bot

Bienvenue sur **Autorole Bot** ! 🎉 Ce bot Discord est conçu pour attribuer automatiquement un rôle à tous les nouveaux membres qui rejoignent votre serveur Discord. Il est simple à configurer et peut être utilisé sur tous les serveurs Discord où vous souhaitez automatiser l'attribution de rôles.

## ✨ Fonctionnalités

- **Attribution automatique de rôles** : Le bot attribue automatiquement un rôle spécifique à chaque utilisateur qui rejoint le serveur.
- **Facile à configurer** : Configurez le bot en modifiant simplement un fichier `config.json` avec le rôle que vous souhaitez attribuer.
- **Soutien aux rôles multiples** : Vous pouvez configurer plusieurs bots avec différents rôles.

## 🔧 Technologies Utilisées

- **Node.js** – Le langage principal utilisé.
- **Discord.js** – Pour interagir avec l'API de Discord.
- **JavaScript** – Pour la logique et la gestion des membres.

## 🛠️ Installation et Utilisation

### Prérequis

- **Node.js** doit être installé sur votre machine. Si ce n'est pas déjà fait, vous pouvez télécharger Node.js [ici](https://nodejs.org/).
- Un **bot Discord** avec le **token** de votre bot.
- Le bot doit avoir l'autorisation de **gérer les rôles** dans le serveur.

### Étapes d'Installation

1. Clonez ce dépôt :

   ```bash
   git clone https://github.com/Quravat/AutoroleBot.git
   cd AutoroleBot
   ```

2. Installez les dépendances nécessaires :

   ```bash
   npm install discord.js
   ```

3. Remplacez `'token'` dans le fichier `config.json` par le token de votre bot.
4. Remplacez `'id role'` dans le fichier `config.json` par l'ID du rôle que vous souhaitez attribuer aux nouveaux membres.

### Comment Lancer

1. Démarrez le bot :

   ```bash
   node index.js
   ```

2. Le bot se connectera à Discord et commencera à attribuer automatiquement le rôle à chaque nouveau membre qui rejoint votre serveur.

## 📜 Fichier `config.json`

Le fichier `config.json` contient deux éléments essentiels : le **token** de votre bot et l'**ID du rôle** à attribuer automatiquement aux nouveaux membres.

Exemple de contenu pour le fichier `config.json` :

```json
{
  "token": "token",
  "autoRoleID": "id role"
}
```

### Explication :

- `token` : Remplacez cette valeur par le token de votre propre bot Discord.
- `id role` : Remplacez cette valeur par l'ID du rôle que vous souhaitez attribuer aux nouveaux membres. Vous pouvez obtenir l'ID du rôle en activant le mode développeur dans Discord et en faisant un clic droit sur le rôle pour copier l'ID.

## 🚨 Permissions du Bot

Le bot doit disposer des permissions suivantes pour fonctionner correctement :

- **Gérer les rôles** : Pour attribuer des rôles aux utilisateurs.
- **Voir les membres** : Pour détecter les membres qui rejoignent le serveur.
- **Gérer les serveurs** (facultatif) : Si vous souhaitez que le bot puisse gérer des aspects supplémentaires du serveur.

## 📖 Aide

Si vous avez des questions ou des problèmes, n'hésitez pas à ouvrir une **issue** sur GitHub ou à consulter la documentation officielle de [discord.js](https://discord.js.org/).

## 🤝 Contribuer

Nous accueillons toutes les contributions pour améliorer ce bot ! Si vous souhaitez ajouter des fonctionnalités ou signaler des bugs, voici comment faire :

1. Forkez ce dépôt.
2. Créez une branche pour votre fonctionnalité (`feature-branch`).
3. Commitez vos changements.
4. Poussez vos changements sur votre dépôt forké.
5. Créez une pull request.

## ❤️ Remerciements

Merci d'utiliser **Autorole Bot** ! Si ce projet vous aide, n'oubliez pas de le **star** sur GitHub ⭐ pour soutenir le projet !

Développé par **Quravat** 💻  
Créé en **2025** 🗓️
