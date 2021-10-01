import retrieveContent from './seasonSpecials.js';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

async function showContent() {
  try {
    const content = await retrieveContent();
    const apiUrl = "https://api.gill-cote-bistro.fr";

    var mainContainer = document.getElementById("specialites");
  for (var i = 0; i < content.length; i++) {
      var div = document.createElement("div");
      var img = document.createElement('img');
      div.className = "col-12 col-md-6";
      img.className = "img-fluid"
      img.src = apiUrl + 
content[i].image?.formats.small.url;
      div.innerHTML = content[i].title + ' - ' + content[i].description;
      mainContainer.append(div, img);
      }
  } catch (e) {
    console.log('Error', e);
  }
}

showContent();