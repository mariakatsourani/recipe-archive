import { handleSearch } from '../js/search';
class RecipeCard extends HTMLElement {
  static get observedAttributes() {
    return [
      'title', 
      'href', 
      'body', 
      'cookingtime', 
      'categories', 
      'tags'
    ];
  }

  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'open'});
    this.wrapper = document.createElement('a');
    
    const styleLink = document.createElement('link');
    styleLink.setAttribute('rel', 'stylesheet');
    styleLink.setAttribute('type', 'text/css');
    styleLink.setAttribute('href', `${window.envUrl}/dist/recipe-card/recipe-card.css`);

    // attach the created elements to the shadow dom
    this.shadow.appendChild(styleLink);
    this.shadow.appendChild(this.wrapper); 
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    switch(attr) {
      case 'title':
        const h2 = document.createElement('h2');
        h2.textContent = newValue;
        this.wrapper.appendChild(h2);
        break;
      case 'href':
        this.wrapper.setAttribute('href', newValue);
        break;
      case 'body':
        const body = document.createElement('div');
        body.setAttribute('class','body');
        body.textContent = newValue;
        this.wrapper.appendChild(body);
        break;
      case 'cookingtime':
        const ct = document.createElement('span');
        ct.setAttribute('class','badge cooking-time');
        ct.textContent = newValue;
        this.wrapper.appendChild(ct);
        break;
      case 'categories':
        const categoriesArray = newValue.split('-');
    
        categoriesArray.map(s => {
          const category = document.createElement('span');
          category.setAttribute('class', 'badge category');
          category.textContent = s;
          this.wrapper.appendChild(category);
        });
        break;
      case 'tags':
        const tagsArray = newValue.split('-');
    
        tagsArray.map(s => {
          const tag = document.createElement('span');
          tag.setAttribute('class','badge tag');
          tag.textContent = s;
          this.wrapper.appendChild(tag);
        });
        break;
    }
  }   

  connectedCallback() {
    const badges = Array.from(this.shadow.querySelectorAll('span.badge'));

    badges.map(badge => {
      badge.addEventListener('click', (e) => {
        e.preventDefault();
        handleSearch(badge.textContent);
      });
    });
  }
}

customElements.define('recipe-card', RecipeCard);