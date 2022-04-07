import data from "./data/rickandmorty/rickandmorty.js";
import { filterStatus, filterSpecie, ordination, average, searchName } from './data.js';

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
    <dd class="p-card">Aparece no(s) episódio(s): ${character.episode.map((i) => i.replaceAll(/[^0-9$]/g, " "))}.</dd>
    </dl>`;
  }
  document.getElementById("cardsBoard").innerHTML = showingCards;
}
printingAllCards(allData);

const speciesFilter = document.getElementById("species");
speciesFilter.addEventListener("change", (event) => {
  let speciesCards = filterSpecie(allData, event.target.value);

  if (statusFilter.value) {
    speciesCards = speciesCards.filter((item) =>{
      return item.status === statusFilter.value
    })
  }
  document.getElementById("averageCalculation").innerHTML = `Essa categoria representa ${average(allData.length, speciesCards.length)}% de todos os personagens`
  printingAllCards(speciesCards);
})

const statusFilter = document.getElementById("status");
statusFilter.addEventListener("change", (event) => {
  let statusCards = filterStatus(allData, event.target.value);

  if (speciesFilter.value) {
    statusCards = statusCards.filter((item) =>{
      return item.species === speciesFilter.value
    })
  }
  document.getElementById("averageCalculation").innerHTML = `Essa categoria representa ${average(allData.length, statusCards.length)}% de todos os personagens`
  printingAllCards(statusCards);
})

const genderFilter = document.getElementById("gender");
genderFilter.addEventListener("change", function (event) {
  const genderCards = filter(allData, event.target.value);
  document.getElementById("averageCalculation").innerHTML = `Essa categoria representa ${average(allData.length, genderCards.length)}% de todos os personagens`
  printingAllCards(genderCards);
})

const ordinationAz = document.querySelector("#ordination");
ordinationAz.addEventListener("change", function (event) {
  const characters = ordination(allData, event.target.value);
  printingAllCards(characters);
})

const searchCharacterName = document.getElementById("text-search");
function searchCharacterNames(e) {
  const charactersName = searchName(data.results, e.target.value);
  return printingAllCards(charactersName);
}
searchCharacterName.addEventListener("keyup", searchCharacterNames);

