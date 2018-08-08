export const recipeCardStyle = `
  h2 {
    margin: 0 0 1.5rem;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 2rem;
  }
  .body {
    font-weight: 100;
    margin-bottom: 1rem;
  }
  .badge {
    padding: .3rem .9rem;
    display: inline-block;
    font-size: var(--small-font-size);
    margin: 1rem .5rem 0 0;
    border-radius: 2px;
    font-weight: 600;
    transition: background-color 150ms ease-in;
    border: 2px solid;
  }
  .cooking-time {
    border-color: var(--purple);
  }
  .cooking-time:hover {
    background-color: var(--purple);
  }
  .category {
    border-color: var(--yellow);
  }
  .category:hover {
    background-color: var(--yellow);
  }
  .tag {
    border-color: var(--pink);
  }
  .tag:hover {
    background-color: var(--pink);
  }
`;