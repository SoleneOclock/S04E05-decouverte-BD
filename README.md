# Visionneuse de slides

Reveal.js, version O'Clock.

## Installation

`npm install`

## Lancement de la visionneuse

`npm start`

La visionneuse est lancée sur `localhost:1234` avec le listing des fichiers disponibles.

## Les slides

Les slides se trouvent dans le dossier `slides/`.

Les slides sont au format Markdown. Une démo est disponible dans le dossier `slides/`.

Chaque slide est en fait un sous-module `git`. C'est-à-dire que les sources sont dans un autre repo.

### Créer ses slides

<details>

Dans son orga, créer un repo et y placer à la racine le fichier markdown.  
Ajouter les images et autres ressources dans un sous-dossier.

#### Ajouter le sous-module

Pour lier ce repo avec le repo des slides, on utilise le système de sous-modules git.

Dans le dossier `slides`, exécuter :
  - `git submodule add git@github.com:O-clock-Teach/nom-du-repo-des-slides`
  - `git add ../.gitmodules NOM-SOUS-MODULE`
  - `git commit -m "Ajout sous-module NOM-SOUS-MODULE"`
  - `git push`
  - ✔️
  
</details>

### Récupérer des slides

<details>

- cloner le dépôt Slides-base : `git clone git@github.com:O-clock-Teach/Slides-base.git`
- chaque sous-dossier dans `slides` est vide, c'est normal
- se placer dans le dossier `slides/nom-du-repo-des-slides-qui-m-interessent`
- 2 possibilités pour récupérer les sources :
  1. en 2 commandes :
     - exécuter `git submodule init .`
     - puis `git submodule update --remote .` (`--remote` récupère le dernier commit du dépôt)
  1. en 1 seule commande :
     - `git submodule update --init --remote .`
     - la commande fonctionne même si on a déjà fait un init précédemment 🎉
- les sources sont récupérées ✔️ mais on oublie pas de regarder la suite ⬇️
- remontrer à la racine du dépôt Slides-base
- faire un `git submodule` qui permet de lister les sous-modules et le commit sur lequel ils pointent :
  - on doit voir un `-` devant chaque numéro de commit
  - et éventuellement un `+` devant le commit du dépôt qu'on vient de mettre à jour
  - s'il y a un '+', c'est qu'on a récupéré une version plus récente du code du sous-module
  - à ce moment là, Slides-base fait bien pointer le sous-module vers le dernier commit mais uniquement en local
  - si on est curieux, on peut faire un `git diff` pour constater que le numéro du commit du sous-module a changé 👀
  - il faut donc commiter cette mise à jour du numéro de commit associé à notre sous-module
  - en faisant un `git add . && git commit -m "Sous-module NOM-SOUS-MODULE sync" && git push`

</details>

### Mettre à jour des slides

<details>

- se placer dans le dossier `slides/nom-du-repo-des-slides-qui-m-interessent`
- et exécuter `git pull origin master`
- faire ses modifications du code du sous-module :
  - puis commit/push : `git add . && git commit -m "Mon commit" && git push origin HEAD:master`
- remonter dans à la racine du projet
- puis mettre à jour le dépôt Slides-base pour que le sous-module pointe sur le bon commit :
  - `git add . && git commit -m "Slides MON-SOUS-MODULES updated" && git push`
- les sources seront alors mises à jour ✔️

</details>
