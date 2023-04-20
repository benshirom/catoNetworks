//  ספרייה שצריך לחבר בסוף באדי
// כל תמונה שנרצה שתעבוד עם הלייט בוקס חובה להוסיף לה את האטרביוט
// data-img 
// לדוגמא: המלל מגיע מהאלט
//   <img data-img src="series/private.jpg" alt="very good movie" >


const lightBox_init = function () {
  console.log("create light")
  createLightBoxHtml();
  declareEvents();
}



// מייצר את הטמל של הקוד של לייט בוקס בבאדי
const createLightBoxHtml = function () {
  document.body.innerHTML += `
  <div id="light_box" class="light_box">
  <div class="inside_box">
  <button class="btn">X</button>
    <img src="" >
  </div>
  </div>
  `
}



const declareEvents = function () {
  // דיבור עם הכפתור סגירה בלייט בוקס
  let close_light_btn = document.querySelector("#light_box button");
  close_light_btn.addEventListener("click", function () {
    document.querySelector("#light_box").style.display = "none"
  })


  // לייצר רשימה שיש בה את כל התמונות עם אטרביוט
  let imgList = document.querySelectorAll("img[data-img]");

  //console.log(imgList);
  // לולאה על כל התמונות
  imgList.forEach(function (itemElem) {
    // console.log(itemElem)

    // גורם שהסמן עכבר יהפוך לאצבע ת
    // itemElem.style.cursor = "pointer";
    itemElem.addEventListener("click", function () {
      let light_box = document.querySelector("#light_box");
      // בשביל להציג משתמשים הפעם בפלקס ולא בלוק
      // כדי שהבוקס הפנימי יהיה באמצע
      light_box.style.display = "flex"
      // משנה את מקור התמונה בלייט בוקס למקור של התמונה
      // שלחצנו עליה
      light_box.querySelector("img").src = itemElem.src;
      // light_box.querySelector("p").innerHTML = itemElem.alt;
      // alert(itemElem.alt); 
    })
  })
}

