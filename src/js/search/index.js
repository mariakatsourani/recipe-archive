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
    searchInput.addEventListener('keypress', e => {
      if (e.key === "Enter")
        handleSearch();
    });
}

function search(data, query) {
  const options = {
    minMatchCharLength: 3,
    keys: [
      'title',
      'categories',
      'tags'
    ]
  };

  const fuse = new Fuse(data.recipes, options)

  console.log(fuse.search(query))
}


init();

