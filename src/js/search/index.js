import Fuse from 'fuse.js';

async function getRecipes() {
  try {
    const response = await fetch('recipes.json');    
    const data = await response.json();
    search(data);
  }
  catch (err) {
    throw new Error('Could not fetch data file.')
  }
}

function search(data) {
  const options = {
    minMatchCharLength: 3,
    keys: [
      'title',
      'categories',
      'tags'
    ]
  };

  const fuse = new Fuse(data.recipes, options)

  console.log(fuse.search('curry'))
}


getRecipes();