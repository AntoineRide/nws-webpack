# nws-webpack

## On commence par ouvrir un nouveau repo

On va utiliser un nouveau repo pour pouvoir versionner ses fichiers et lancer en ligne une version de notre app.
Le but est d'utiliser deux branches, une branch develop afin de push notre code et une branch main qui servira
exclusivement pour Vercel. On lancera des PR sur la branch main à partir de develop et on déclenchera automatiquement
les builds chez Vercel à partir de ça.

## On initialise NPM

Lancer la commande `npm init` dans le répertoire racine du projet. On y renseigne toutes les infos et on y ajoute le repo
précédemment créé.

## Installer les plugins nécessaires

Installer les pugins nécessaire à l'utilisation de Webpack pour ce projet et Webpack lui-même :
`npm install css-loader css-minimizer-webpack-plugin mini-css-extract-plugin minify-html-webpack-plugin purgecss-webpack-plugin webpack webpack-cli webpack-dev-server webpack-serve`

## mkdir

On créé un nouveau répertoire "src" : `mkdir src`. On va stocker dans ce répertoire tous les fichiers et assets nécessaires.

## webpack.config.js

Pour pouvoir utiliser Webpack et ses plugins, il faut également créer un nouveau fichier à la racine du projet : `touch webpack.config.json`.
C'est le fichier de config de Webpack, qui utilisera le fichier ./src/index.js pour bundler tous les assets.
Il faut donc également créer ce fichier : `touch src/index.js`.

## PurgeCss

Pour ce cours nous allons voir comment minifier les fichiers CSS, JS et HTML. En plus de ça nous allons également utiliser pour
la démonstration le fichier "bootstrap.css". Ce dernier étant absolument gigantesque pour la production, il nous faut installer
un autre plugin pour Webpack :
`npm i purgecss-webpack-plugin -D`
Ce plugin va nous permettre de supprimer toutes les classes CSS non utilisées dans le projet du bundle final.
Télécharger Bootstrap (utiliser au choix soit le CSS complet "bootstrap.css" ou juste la grid) [ici](https://github.com/twbs/bootstrap/releases/download/v5.0.2/bootstrap-5.0.2-dist.zip).

## Minify HTML

Pour pouvoir minifier le HTML, on va utiliser un plugin Webpack qui va tout simplement copier le fichier HTML stocké dans src/hmtl
vers le dossier de build (/public).
`npm install minify-html-webpack-plugin --save-dev`
`mkdir src/html && touch src/html/index.html`
Voici un template de base à copier dans le fichier HTML [ici](https://github.com/Zharkan/nws-webpack/blob/e5407e02cf6f066df656b400720606e5051f4391/src/html/index.html).

## Minifier le CSS

Pour minfier le CSS, nous allons utiliser deux plugins :
`npm install css-minimizer-webpack-plugin --save-dev`
`npm install --save-dev mini-css-extract-plugin`

## Minfier le JS

Même opération pour minfier le JS :
`npm install terser-webpack-plugin --save-dev`

## Configuration initiale

Afin de pouvoir lancer Webpack et démarrer le serveur de développement, voici un exemple
de configuration pour `webpack.config.json` [ici](https://github.com/Zharkan/nws-webpack/blob/2e238c31ea4aed4fcfb3e71db0b7988b4790ef77/webpack.config.js)

## C'est parti !

Maintenant on a tout ce qu'il faut pour démarrer un projet contenant un fichier HTML `src/html/index.html`,
un fichier d'entrée pour Webpack `index.js`. Pour ce cours nous allons utiliser l'API d'un restaurant.
La base de l'API est `https://api.gill-cote-bistro.fr`, voici les différents endpoints qui nous intéressent :

1. [Spécialités de saison](https://api.gill-cote-bistro.fr/specials?_sort=id:asc) ;
2. [Suggestions du jour](https://api.gill-cote-bistro.fr/suggestions?_sort=id:asc) ;
3. [Histoire du restaurant](https://api.gill-cote-bistro.fr/histoires?_sort=id:asc) ;

Pour plus de simplicité vous remarquerez que les ID associés aux différentes données de l'API sont
déjà envoyés par ordre croissant. Je vous conseille de garder ça. Il existe d'ailleurs d'autres filtres
et je vous invite à les essayer si vous le voulez.

Référence pour les filtres :
[dev doc de l'API](https://strapi.io/documentation/developer-docs/latest/developer-resources/content-api/content-api.html#filters)

## But du jeu

Réaliser une structure onepage reprenant les suggestions du jour, les spécialités de saison et en bonus si votre temps le permet
l'histoire du restaurant pour mettre en avant le restaurant et ses produits. Faire le maximum pour avoir un code lisible et comprenable.

## Ressources utiles

1. [https://developer.mozilla.org/fr/docs/Web/API/Fetch_API](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API)
2. [https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch)
3. [https://openclassrooms.com/fr/courses/5543061-ecrivez-du-javascript-pour-le-web/5577766-compilez-et-executez-votre-code](https://openclassrooms.com/fr/courses/5543061-ecrivez-du-javascript-pour-le-web/5577766-compilez-et-executez-votre-code)
4. [https://github.com/webpack-contrib/css-loader](https://github.com/webpack-contrib/css-loader)
5. [https://webpack.js.org/guides/getting-started/](https://webpack.js.org/guides/getting-started/)
6. [https://webpack.js.org/configuration/resolve/](https://webpack.js.org/configuration/resolve/)
7. [https://ideas.byteridge.com/webpack-minifying-your-production-bundle/](https://ideas.byteridge.com/webpack-minifying-your-production-bundle/)

https://webpack.js.org/configuration/resolve/

## Site du restaurant actuel

Ce restaurant est en ligne à cette [adresse](https://www.gill-cote-bistro.fr/) et utilise Strapi (backend) et Next JS (frontend).
