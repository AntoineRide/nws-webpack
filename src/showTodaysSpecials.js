import retrieveTodaysSpecials from "./queries/todaySpecials";

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
        var h3 = document.createElement("h3");
        h3.textContent = suggestionsArray;
        suggestionsContainer.appendChild(h3);
      });
    } catch (e) {
      console.log("Error", e);
    }
  }