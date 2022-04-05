import data from "./data/rickandmorty/rickandmorty.js";
import { filter, ordination, average } from './data.js';

const allData = data.results
const printingAllCards = (characters) => {
  let showingCards = "";
  for (let character of characters) {
    showingCards += character = `<dl class="cards">
    <img src="${character.image}" loading="lazy" class="image-card">
    <dt class="name-card">${character.name}</dt>
    <dd class="p-card">Status: ${character.status}</dd>
    <dd class="p-card">Especie: ${character.species}</dd>
    <dd class="p-card">Gênero: ${character.gender}</dd>
    <dd class="p-card">Origen: ${character.origin.name}</dd>
    </dl>`;
  }
  document.getElementById("cardsBoard").innerHTML = showingCards;
}
printingAllCards(allData);

const speciesFilter = document.getElementById("species");
speciesFilter.addEventListener("change", function (event) {
  const speciesCards = filter(allData, event.target.value);
  document.getElementById("averageCalculation").innerHTML = `Essa categoria representa ${average(allData.length, speciesCards.length)}% de todos os personagens`
  printingAllCards(speciesCards);
})

const statusFilter = document.getElementById("status");
statusFilter.addEventListener("change", function (event) {
  const statusCards = filter(allData, event.target.value);
  document.getElementById("averageCalculation").innerHTML = `Essa categoria representa ${average(allData.length, statusCards.length)}% de todos os personagens`
  printingAllCards(statusCards);
})

const ordinationAz = document.querySelector("#ordination");
ordinationAz.addEventListener("change", function (event) {
  const characters = ordination(allData, event.target.value);
  printingAllCards(characters);
})

