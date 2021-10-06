# nws-webpack

## On commence par ouvrir un nouveau repo

On va utiliser un nouveau repo pour pouvoir versionner ses fichiers et lancer en ligne une version de notre app.
Le but est d'utiliser deux branches, une branch develop afin de push notre code et une branch main qui servira 
exclusivement pour Vercel. On lancera des PR sur la branch main à partir de develop et on déclenchera automatiquement
les builds chez Vercel à partir de ça.

## On initialise NPM

Lancer la commande `npm init` dans le répertoire racine du projet.