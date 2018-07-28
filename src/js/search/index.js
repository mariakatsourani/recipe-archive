import Fuse from 'fuse.js';

let data = {};

async function init() {
    const response = await fetch('recipes.json');
    data = await response.json();
    attachListeners();
}

function handleSearch() {
  const query = document.getElementById('search-input').value;
  search(data, query);
}

function attachListeners() {
  const searchBtn = document.getElementById('search-submit');
  const searchInput = document.getElementById('search-input');

  searchBtn &&
    searchBtn.addEventListener('click', handleSearch);
  searchInput &&
    searchInput.addEventListener('keypress', handleSearch);
}

function search(data, query) {
  const options = {
    minMatchCharLength: 3,
    threshold: 0.4,
    keys: [
      'title',
      'categories',
      'tags'
    ]
  };

  const fuse = new Fuse(data.recipes, options)

  console.log(fuse.search(query))
  renderResult(fuse.search(query))
}

function renderResult(result) {
  const listContainer = document.getElementById('recipe-list');
  const resultsContainer = document.getElementById('search-results');

  listContainer.style.display = 'none';
  resultsContainer.innerHTML = '';

  result.map(r => {
    resultsContainer.appendChild(buildResult(r));
  });
}

function buildResult(r) {
  var parent = document.createElement('a');
  parent.append(r.title);
  parent.setAttribute('class','search-result');
  parent.setAttribute('href', r.url);

  return parent;
}

init();

