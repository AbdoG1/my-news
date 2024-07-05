

class sliderComponent extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback() {
        this.innerHTML = `<h1>مرحبا</h1>`
    }
}

window.customElements.define('slider-component', sliderComponent)