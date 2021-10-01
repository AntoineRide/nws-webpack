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
      div.className = "pt-3 pb-3 pb-md-0 col-md-4 col-12 text-center";
      img.className = "img-fluid"
      img.src = apiUrl + 
content[i].image?.url;
img.width = content[i].image?.width;
img.height = content[i].image?.height;
      div.innerHTML = content[i].title;
      mainContainer.appendChild(div);
      div.append(img, content[i].description);
      }
  } catch (e) {
    console.log('Error', e);
  }
}

showContent();