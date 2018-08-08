class RecipeCard extends HTMLElement {
  constructor() {
    super();

    var shadow = this.attachShadow({mode: 'open'});

    var wrapper = document.createElement('span');
    
    //title
    const h2 = document.createElement('h2');
    const title = this.getAttribute('title');
    h2.textContent = title;

    //body
    const body = document.createElement('div');
    const bodyText = this.getAttribute('body');
    body.textContent = bodyText;

    //cooking time
    const ct = document.createElement('span');
    ct.setAttribute('class','badge border border-purple');
    const mins = this.getAttribute('cooking-time');
    ct.textContent = mins;

    // attach the created elements to the shadow dom

    shadow.appendChild(wrapper);

    wrapper.appendChild(h2);
    wrapper.appendChild(body);
    wrapper.appendChild(ct);
  }
}

customElements.define('recipe-card', RecipeCard);