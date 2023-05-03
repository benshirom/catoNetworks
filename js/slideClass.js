class SlideClass {
  constructor(parent, item) {
    this.parent = parent;
    this.id = item.id;
    this.url = item.url;
    this.img = item.img;
    this.text = item.text;
  }

  render() {
    let div = document.createElement("div");

    div.className = "sliderBox";
    div.innerHTML = `
        <img data-img src=${this.img}>
        <p class="sliderP">${this.text}</p>
           `;
    document.querySelector(this.parent).append(div);
  }
}
