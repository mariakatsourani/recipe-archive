import Fuse from 'fuse.js';

let recipeData = {};

async function init() {
  const response = await fetch(`${window.envUrl}recipes.json`);
  recipeData = await response.json();

  attachListeners();
}

function getSearchQuery(query) {
  if (query) {
    return query;
  } else {
    return document.getElementById('search-input').value;
  }
}

export function handleSearch(badgeSearchQuery) {
  console.log(badgeSearchQuery)
  const query = getSearchQuery(badgeSearchQuery);

  search(query);
}

function attachListeners() {
  const searchInput = document.getElementById('search-input');
  const listContainer = document.getElementById('recipe-container');
  const resultsContainer = document.getElementById('search-results');

  searchInput &&
    searchInput.addEventListener('input', () => {
      if (searchInput.value.length > 0) {
        resultsContainer.style.display = 'block';
        handleSearch(undefined);
      } else {
        resultsContainer.style.display = 'none';
        listContainer.style.display = 'block';
      }
    });
}

function search(query) {
  const options = {
    minMatchCharLength: 3,
    threshold: 0.4,
    keys: [
      'title',
      'categories',
      'tags',
      'cooking_time'
    ]
  };
  const fuse = new Fuse(recipeData.recipes, options);

  renderResult(fuse.search(query));
}

function renderResult(result) {
  const listContainer = document.getElementById('recipe-container');
  const resultsContainer = document.getElementById('search-results');

  listContainer.style.display = 'none';
  resultsContainer.innerHTML = '';

  result.map(r => {
    resultsContainer.appendChild(buildResult(r));
  });
}

function buildResult(r) {
  const parent = document.createElement('a');
  parent.append(r.title);
  parent.setAttribute('class','search-result hover-ghost');
  parent.setAttribute('href', r.url);

  return parent;
}

init();

