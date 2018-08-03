import Fuse from 'fuse.js';

async function init() {
  const response = await fetch(window.jsonUrl);
  const data = await response.json();
  attachListeners(data);
}

function handleSearch(data) {
  const query = document.getElementById('search-input').value;
  search(data, query);
}

function attachListeners(data) {
  const searchInput = document.getElementById('search-input');
  const listContainer = document.getElementById('recipe-container');
  const resultsContainer = document.getElementById('search-results');

  searchInput &&
    searchInput.addEventListener('input', () => {
      if (searchInput.value.length > 0) {
        resultsContainer.style.display = 'block';
        handleSearch(data);
      } else {
        resultsContainer.style.display = 'none';
        listContainer.style.display = 'block';
      }
    });
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

  const fuse = new Fuse(data.recipes, options);

  // console.log(fuse.search(query))
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
  var parent = document.createElement('a');
  parent.append(r.title);
  parent.setAttribute('class','search-result hover-ghost');
  parent.setAttribute('href', r.url);

  return parent;
}

init();

