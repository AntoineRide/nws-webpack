import retrieveTodaysSpecials from "../queries/todaySpecials";

export default async function showTodaysSpecials() {
    try {
      const content = await retrieveTodaysSpecials();
  
      for (var x = 0; x < content.length; x++) {
        var suggestionsArrays = [
          content[x].suggestionsStarter +
            " " +
            content[x].suggestionsStarterPrice +
            "€",
          content[x].suggestionsMain +
            " " +
            content[x].suggestionsMainPrice +
            "€",
          content[x].suggestionsDessert +
            " " +
            content[x].suggestionsDessertPrice +
            "€",
        ];
      }
      var suggestionsContainer = document.getElementById("todays_specials");
  
      suggestionsArrays.forEach(function (suggestionsArray) {
        var suggestionDiv = document.createElement("div");
        suggestionDiv.textContent = suggestionsArray;
        suggestionDiv.className = "menu-objet-nom";
        suggestionsContainer.appendChild(suggestionDiv);
      });
    } catch (e) {
      console.log("Error", e);
    }
  }