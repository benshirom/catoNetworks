const lightBox_init = function () {
  console.log("create light");
  createLightBoxHtml();
  declareEvents();
};

const createLightBoxHtml = function () {
  document.body.innerHTML += `
  <div id="light_box" class="light_box">
  <div class="inside_box">
  <button class="btn">X</button>
    <img src="" >
  </div>
  </div>
  `;
};

const declareEvents = function () {
  let close_light_btn = document.querySelector("#light_box button");
  close_light_btn.addEventListener("click", function () {
    document.querySelector("#light_box").style.display = "none";
  });

  let imgList = document.querySelectorAll("img[data-img]");

  imgList.forEach(function (itemElem) {
    itemElem.addEventListener("click", function () {
      let light_box = document.querySelector("#light_box");

      light_box.style.display = "flex";

      light_box.querySelector("img").src = itemElem.src;
    });
  });
};
