
const filterForm = document.getElementById("filterForm");
const minPriceInput = document.getElementById("minPrice");
const maxPriceInput = document.getElementById("maxPrice");
const modelYearInput = document.getElementById("yearFilter");
const manufacturerInput = document.getElementById("manufacturerFilter");
const colorInput = document.getElementById("colorFilter");

document.getElementById("filterBtn").addEventListener("click", filter);
document.getElementById("resetBtn").addEventListener("click", reset);

function reset() {
  minPriceInput.value = "0";
  maxPriceInput.value = "1000000";
  modelYearInput.value = "allYears";
  manufacturerInput.value = "allManufacturers";
  colorInput.value = "allColors";
  filter();
}

function filter() {
  const minPrice = parseFloat(minPriceInput.value);
  const maxPrice = parseFloat(maxPriceInput.value);
  const modelYear = modelYearInput.value;
  const manufacturer = manufacturerInput.value;
  const color = colorInput.value;

  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const cardPrice = parseFloat(card.getAttribute("carPrice"));
    const cardManufacturer = card.getAttribute("carManufacturer");
    const cardColor = card.getAttribute("carColor");
    const cardYear = card.getAttribute("carYear");

    if (
      cardPrice >= minPrice &&
      cardPrice <= maxPrice &&
      (manufacturer === "allManufacturers" ||
        cardManufacturer === manufacturer) &&
      (color === "allColors" || cardColor === color) &&
      (modelYear === "allYears" || cardYear === modelYear)
    ) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}
