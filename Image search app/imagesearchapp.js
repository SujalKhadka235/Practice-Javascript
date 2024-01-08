document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.querySelector("button");
  const searchInput = document.getElementById("search-input");
  const searchResults = document.querySelectorAll(".search-result");
  const resultContainer = document.querySelector(".search-results");

  searchButton.addEventListener("click", function (event) {
    event.preventDefault();

    const searchTerm = searchInput.value.toLowerCase();
    let matchFound = false;

    searchResults.forEach(function (result) {
      const title = result.querySelector("a").textContent.toLowerCase();

      if (title.includes(searchTerm)) {
        matchFound = true;
      }

      result.style.display = title.includes(searchTerm) ? "block" : "none";
    });

    resultContainer.style.display = matchFound ? "block" : "none";

    alert(matchFound ? "A match was found" : "No match was found");
  });
});
