import retrieveTodaysSpecials from "./todaySpecials.js";
import retrieveSeasonsSpecials from "./seasonsSpecials.js";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const apiUrl = "https://api.gill-cote-bistro.fr";

async function showTodaysSpecials() {
  try {
    const content = await retrieveTodaysSpecials();
    for (var x = 0; x < content.length; x++) {
      var suggestionsArrays = [
        content[x].suggestionsStarter,
        content[x].suggestionsMain,
        content[x].suggestionsDessert,
      ];
    }
    var suggestionsContainer = document.getElementById("todays_specials");

    suggestionsArrays.forEach(function (suggestionsArray) {
      var h3 = document.createElement("h3");
      h3.textContent = suggestionsArray;
      suggestionsContainer.appendChild(h3);
    });
  } catch (e) {
    console.log("Error", e);
  }
}

async function showSeasonsSpecials() {
  try {
    const content = await retrieveSeasonsSpecials();

    var todaysContainer = document.getElementById("seasons_specials");

    for (var i = 0; i < content.length; i++) {
      var div = document.createElement("div");
      var img = document.createElement("img");
      var h3 = document.createElement("h3");
      var p = document.createElement("p");

      div.className = "pt-3 pb-3 pb-md-0 col-md-4 col-12 text-center";

      img.className = "img-fluid";
      img.src = apiUrl + content[i].image?.url;
      img.width = content[i].image?.width;
      img.height = content[i].image?.height;
      img.alt = content[i].image?.alternativeText;

      h3.textContent = content[i].title;
      p.textContent = content[i].description;

      todaysContainer.appendChild(div);
      div.append(h3, img, p);
    }
  } catch (e) {
    console.log("Error", e);
  }
}

showTodaysSpecials();

showSeasonsSpecials();
