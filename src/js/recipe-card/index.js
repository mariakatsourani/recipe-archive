class RecipeCard extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({mode: 'open'});
    // wrapper anchor
    const wrapper = document.createElement('a');
    const href = this.getAttribute('href');
    wrapper.setAttribute('href', href);
    
    const styleLink = document.createElement('link');
    styleLink.setAttribute('rel', 'stylesheet');
    styleLink.setAttribute('type', 'text/css');
    styleLink.setAttribute('href', `${window.envUrl}dist/rc/recipe-card.css`);

    // attach the created elements to the shadow dom
    shadow.appendChild(styleLink);
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
    const categoriesArray = categoriesRaw.split('-');

    categoriesArray.map(s => {
      const category = document.createElement('span');
      category.setAttribute('class', 'badge category');
      category.textContent = s;
      wrapper.appendChild(category);
    });

    //tags
    const tagsRaw = this.getAttribute('tags');
    const tagsArray = tagsRaw.split('-');

    tagsArray.map(s => {
      const tag = document.createElement('span');
      tag.setAttribute('class','badge tag');
      tag.textContent = s;
      wrapper.appendChild(tag);
    });

  }
}

customElements.define('recipe-card', RecipeCard);