import retrieveStories from "./queries/stories";

export default async function showStories() {
    try {
      const content = await retrieveStories();
  
      for (var x = 0; x < content.length; x++) {
        var storiesArray = [
          content[x].first_paragraph +
            " " +
            content[x].second_paragraph,
        ];
      }
      var storiesContainer = document.getElementById("stories_container");
  
      storiesArray.forEach(function (suggestionsArray) {
        var storiesDiv = document.createElement("div");
        storiesDiv.innerHTML = suggestionsArray;
        storiesDiv.className = "menu-objet-nom";
        storiesContainer.appendChild(storiesDiv);
      });
    } catch (e) {
      console.log("Error", e);
    }
  }