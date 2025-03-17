// /** @type {HTMLButtonElement} */
// let plusButton = document.querySelector("button.plus");
// /** @type {HTMLButtonElement} */
// let minusButton = document.querySelector("button.minus");
// /** @type {HTMLSpanElement} */
// let countElem = document.querySelector("span.count");
// /** @type {number} */
// let count = 0;

// plusButton.addEventListener("click", () => {
//   count += 1;
//   countElem.textContent = count.toString();
// });

// minusButton.addEventListener("click", () => {
//   count -= 1;
//   countElem.textContent = count.toString();
// });

class CounterComponent extends HTMLElement {
  /** @type { ShadowRoot | undefined } */
  shadowRoot = undefined;

  count = 0;

  css = () => /* css */ `
  .app {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  
    & > span {
      height: 32px;
      font-size: 24px;
      font-weight: bold;
    }
  
    & > div.counter-container {
      height: 100%;
      width: 100%;
      display: grid;
      grid-template:
        ". count ." 32px
        "minus . plus" 32px
        / 1fr 100px 1fr;
      gap: 8px;
      place-content: center;
      & > span.count {
        width: 100%;
        grid-area: count;
        font-weight: bold;
        text-align: center;
      }
      & > button.plus {
        margin-right: auto;
        grid-area: plus;
      }
      & > button.minus {
        margin-left: auto;
        grid-area: minus;
      }
      & > button.plus,
      button.minus {
        width: 32px;
        height: 32px;
        border-radius: 100vh;
        border: none;
        cursor: pointer;
        background-color: var(--color-secondary);
        &:hover {
          background-color: var(--color-primary);
        }
      }
    }
  }
  `;

  html = () => /* html */ `
  <style>${this.css()}</style>
  <div class="app">
    <span>カウンター</span>
    <div class="counter-container">
      <span class="count">${this.count}</span>
      <button class="plus">+</button>
      <button class="minus">-</button>
    </div>
  </div>
  `;

  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = this.html();

    this.shadowRoot.querySelector("button.plus").addEventListener("click", () => {
      this.count += 1;
      this.render();
    });
    this.shadowRoot.querySelector("button.minus").addEventListener("click", () => {
      this.count -= 1;
      this.render();
    });
  }
}

customElements.define("counter-component", CounterComponent);
