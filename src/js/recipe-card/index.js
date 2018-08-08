import { recipeCardStyle } from './style';

class RecipeCard extends HTMLElement {
  constructor() {
    super();

    var shadow = this.attachShadow({mode: 'open'});

    var wrapper = document.createElement('span');
    
    
    const style = document.createElement('style');
    style.textContent = recipeCardStyle;
    
    // attach the created elements to the shadow dom
    shadow.appendChild(style);
    shadow.appendChild(wrapper);

    //title
    const h2 = document.createElement('h2');
    const title = this.getAttribute('title');
    h2.textContent = title;
    wrapper.appendChild(h2);

    //body
    const body = document.createElement('div');
    body.setAttribute('class','body');
    const bodyText = this.getAttribute('body');
    body.textContent = bodyText;
    wrapper.appendChild(body);

    //cooking time
    const ct = document.createElement('span');
    ct.setAttribute('class','badge cooking-time');
    const mins = this.getAttribute('cooking-time');
    ct.textContent = mins;
    wrapper.appendChild(ct);

    //categories
    const categoriesRaw = this.getAttribute('categories');
    const categoriesArray = categoriesRaw.split(' ');

    categoriesArray.map(s => {
      const category = document.createElement('span');
      category.setAttribute('class','badge category');
      category.textContent = s;
      wrapper.appendChild(category);
    });

    //tags
    const tagsRaw = this.getAttribute('tags');
    const tagsArray = tagsRaw.split(' ');

    tagsArray.map(s => {
      const tag = document.createElement('span');
      tag.setAttribute('class','badge tag');
      tag.textContent = s;
      wrapper.appendChild(tag);
    });

  }
}

customElements.define('recipe-card', RecipeCard);