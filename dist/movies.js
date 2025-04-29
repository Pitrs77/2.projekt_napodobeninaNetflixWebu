// Movies - select API_movies

//Získání hodnoty z Dropdown menu

function search() {
  let select = document.getElementById("movieSelect");
  let selectedValue = select.value;

  // Sestavení URL pro API požadavek, provedení fetch požadavku a přidání obrázků do HTML

  if (selectedValue) {
    let url = "https://api.tvmaze.com/search/shows?q=" + selectedValue;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Promazání předchozích výsledků
        const resultsContainer = document.getElementById("selectedMovie");
        resultsContainer.innerHTML = "";

        // Projde datová pole a přidá obrázky
        data.forEach((item) => {
          const imgSrc = item.show.image ? item.show.image.medium : "";

          // Vytvoří div pro každý výsledek a přidání třídy pro styling
          const resultDiv = document.createElement("div");
          resultDiv.classList.add("result-item");

          // Zkontrouje, zda je obrázek k dispozici, přidá alt text, třídu pro styling a vloží ho do divu
          if (imgSrc) {
            const imgElement = document.createElement("img");
            imgElement.src = imgSrc;
            imgElement.alt = item.show.name;
            imgElement.classList.add("result-img");
            resultDiv.appendChild(imgElement);
          } else {
            const noImageText = document.createElement("p");
            noImageText.textContent = "No image available";
            resultDiv.appendChild(noImageText);
            noImageText.style.display = "none";
          }
          // Přidání výsledků do kontejneru
          resultsContainer.appendChild(resultDiv);
        });

        console.log(data); // Zaloguje data pro hledání chyb
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Zaloguje chybu, pokud dojde k chybě
      });
  } else {
    alert("Please select an option from the dropdown!"); // Zajistí, že uživatel vybere možnost z dropdown menu
  }
}
