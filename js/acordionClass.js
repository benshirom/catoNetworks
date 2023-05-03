class AccordionClass {
  constructor(parent, item) {
    this.parent = parent;
    this.id = item.id;
    this.q = item.q;
    this.a = item.a;
  }

  render() {
    let div = document.createElement("div");

    div.className = "myAccordion-item";
    div.innerHTML = `
        
            <div class="accordion-title" id="accordion-${this.id}">
            <span id="qaIcon">
            </span>
            <span>
            ${this.q}
            </span>
             </div>
            <div class="accordion-content">
                <p>${this.a}</p>
            </div>
           `;
    document.querySelector(this.parent).append(div);
    let accordionTitle = document.querySelector(`#accordion-${this.id}`);
    console.log(accordionTitle);
  }
}
