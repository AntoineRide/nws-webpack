# nws-webpack

## On commence par ouvrir un nouveau repo

On va utiliser un nouveau repo pour pouvoir versionner ses fichiers et lancer en ligne une version de notre app.
Le but est d'utiliser deux branches, une branch develop afin de push notre code et une branch main qui servira
exclusivement pour Vercel. On lancera des PR sur la branch main à partir de develop et on déclenchera automatiquement
les builds chez Vercel à partir de ça.

## On initialise NPM

Lancer la commande `npm init` dans le répertoire racine du projet. On y renseigne toutes les infos et on y ajoute le repo
précédemment créé.

## On installe les plugins nécessaires

Installer les commandes nécessaire à l'utilisation de Webpack :
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
Télécharger Bootstrap (utiliser au choix soit le CSS complet "bootstrap.css" ou juste la grid) [ici](https://github.com/twbs/bootstrap/releases/download/v5.0.2/bootstrap-5.0.2-dist.zip)

## Minify HTML

Pour pouvoir minifier le HTML, on va utiliser un plugin Webpack qui va tout simplement copier le fichier HTML stocké dans src/hmtl
vers le dossier de build (/public).
`npm install minify-html-webpack-plugin --save-dev`
`mkdir src/html && touch src/html/index.html`
Voici un template de base à copier dans le fichier HTML :

`

<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Mon Restaurant</title>
    <link rel="stylesheet" href="app.css" />
  </head>
  <body>

    <div class="container">
      <div class="d-flex align-items-center pt-3 row" id="todays_specials"></div>
    </div>
    <div class="container">
      <div class="d-flex align-items-center pt-3 row" id="seasons_specials"></div>
    </div>
    <script src="app.bundle.js"></script>

  </body>
</html>
`

## Minifier le CSS

Pour minfier le CSS, nous allons utiliser deux plugins :
`npm install css-minimizer-webpack-plugin --save-dev`
`npm install --save-dev mini-css-extract-plugin`

## Minfier le JS

Même opération pour minfier le JS :
`npm install terser-webpack-plugin --save-dev`

## Configuration initiale

Afin de pouvoir lancer Webpack et démarrer le serveur de développement, voici un exemple
de configuration pour `webpack.config.json` :

`const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MinifyHtmlWebpackPlugin = require("minify-html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob')

const PATHS = {
src: path.join(\_\_dirname, 'src')
}

module.exports = {
mode: "production",
resolve: {
modules: ["node_modules"],
},
entry: {
app: "./src/index.js",
},
output: {
filename: "[name].bundle.js",
path: path.resolve(**dirname, "public"),
},
devServer: {
static: {
directory: path.join(**dirname, "/src/html"),
},
compress: true,
port: 3000,
},
module: {
rules: [
{
test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ],
  },
  plugins: [
    new MinifyHtmlWebpackPlugin({
      src: "./src/html",
      dest: "./public",
      rules: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true,
        minifyJS: true,
      },
    }),
    new MiniCssExtractPlugin(),
    new PurgecssPlugin({
      paths: glob.sync(`${PATHS.src}/\*_/_`, { nodir: true }), }), ], }; `
