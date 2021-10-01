/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/seasonSpecials.js

async function retrieveContent() {
    const url = "https://api.gill-cote-bistro.fr/specials?_sort=id:asc";
  
    const response = await fetch(url);
    return response.json();
  }
  
;// CONCATENATED MODULE: ./src/index.js



async function showContent() {
  try {
    const content = await retrieveContent();
    const apiUrl = "https://api.gill-cote-bistro.fr";

    var mainContainer = document.getElementById("myData");
  for (var i = 0; i < content.length; i++) {
      var div = document.createElement("div");
      var img = document.createElement('img');
      div.className = "d-flex";
      img.className = "img-fluid"
      img.src = apiUrl + 
content[i].image?.formats.small.url;
      div.innerHTML = 'Spécialités : ' + content[i].title + ' - ' + content[i].description;
      mainContainer.append(div, img);
      }
  } catch (e) {
    console.log('Error', e);
  }
}

showContent();
/******/ })()
;