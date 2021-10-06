import retrieveSeasonsSpecials from "../queries/seasonsSpecials.js";

const apiUrl = "https://api.gill-cote-bistro.fr";

export default async function showSeasonsSpecials() {
    try {
      const content = await retrieveSeasonsSpecials();
  
      var todaysContainer = document.getElementById("seasons_specials");
  
      for (var i = 0; i < content.length; i++) {
        var div = document.createElement("div");
        var img = document.createElement("img");
        var h3 = document.createElement("h3");
        var p = document.createElement("p");
  
        div.className = "pt-3 pb-3 pb-md-0 col-md-4 col-12 text-center";
  
        img.className = "img-fluid rounded";
        img.src = apiUrl + content[i].image?.url;
        img.width = content[i].image?.width;
        img.height = content[i].image?.height;
        img.loading = "lazy";
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