function init(){
    createAllQa(qaArray)
    createAllSlides(slidesArray)
    setEvents()
    lightBox_init();
}



function createAllQa(arr){
    arr.forEach(function(item) {
        let accordionItem = new AccordionClass("#paretAccordion", item);
        accordionItem.render();
    });
}
function createAllSlides(arr){
    arr.forEach(function(item) {
        let slideItem = new SlideClass("#parentSlider", item);
        slideItem.render();
    });
}


const setEvents=()=>{
    let accordionItems = document.querySelectorAll('.myAccordion-item');
    let aItems = document.querySelectorAll('.myFontATrans');
    accordionItems.forEach(function(item) {
      let title = item.querySelector('.accordion-title');
      title.addEventListener('click', function() {
        if (item.classList.contains('active')) {
          item.classList.remove('active');
        } else {
          accordionItems.forEach(function(item) {
            item.classList.remove('active');
          });
          item.classList.add('active');
        }
      });
    });
    let topNavA = document.querySelector('#topNavA');
    let topNavB = document.querySelector('#topNavB');
    let logoDiv = document.querySelector('.logo');
    let logoImg = document.querySelector('#id_logoImg');
    window.onscroll = function() {
   
      if (document.documentElement.scrollTop <= 1){
        // topNavA.className='none';
        topNavA.className="d-flex justify-content-end pt-1"
        logoImg.src="https://www.catonetworks.com/wp-content/uploads/2021/10/white.svg"
        topNavB.className="d-flex justify-content-end navTranstion fixed-top mt-4  navtrans "
        logoDiv.className="logo position-absolute ps-1"
        // topNavB.children
        // console.log("add")
        aItems.forEach((item) => {
          item.className="myFontATrans"
        })
      }
      else if (document.documentElement.scrollTop > 1){
        // topNavA.classList.remove('d-flex');
        topNavA.className='d-flex justify-content-end none';
        logoImg.src="https://www.catonetworks.com/wp-content/uploads/2022/03/cato-logo.svg"
        topNavB.className="d-flex justify-content-between navTranstion fixed-top navlight  "
        logoDiv.className="logo ps-2 miniLogo"
        aItems.forEach((item) => {
          item.className="myFontAlight"
        })
        // console.log("remove")
      }
    };
    
    

}


let qaArray = [
  {
      id:1,
      q: "What is Formula E?",
      a: "The ABB FIA Formula E World Championship is an all-electric single-seater racing series. The first Formula E race took place in 2014. Since then, it quickly gained popularity and became an audience favorite. Formula E races take place globally, in Mexico, Saudi Arabia, South Africa, India, Brazil, Germany, Monaco, Indonesia, the US, Italy and the UK. They host leading motor brands, such as: Porsche, Jaguar, Maserati, McLaren, and Nissan.",
  },
  {
      id:2,
      q:"How is Formula E different from Formula 1?",
      a:"The main difference between Formula 1 and Formula E is Formula 1 uses hybrid cars with internal combustion engines powered by more conventional fuels, whilst Formula E racing cars are fully all-electric. In fact, Formula E is the only global all-electric racing series. The use of electric vehicles is a key component of its sustainability program, which boasts net zero carbon footprint by reducing championship footprint and offsetting any emissions.        Formula E also tends to race around street circuits in major cities, whereas Formula 1 typically takes place at racing circuits. Although, both series don’t always follow this blueprint."
  }, {
      id:3,
      q:"How fast is a Formula E car?",
      a:"322 KMH (approximately 200 MPH)."
  }, {
      id:4,
      q:"Which season is the Formula E competition of 2023?",
      a:"2023 is Season 9 of the ABB FIA Formula E World Championship."
  },
  {
      id:5,
      q:"Where to watch Formula E?",
      a:"This depends on which country of residence you will be viewing from. Find more information here: https://www.fiaformulae.com/en/ways-to-watch"
  },
];
let slidesArray = [
  {
      id:1,
      img: "https://www.catonetworks.com/wp-content/uploads/2023/03/thomas_cape_s.png",
      text: "Q&A With the Lead IT Product Manager at Tag Heuer Porsche Formula E Team",
      url: "#",
  },
  {
      id:2,
      img: "https://www.catonetworks.com/wp-content/uploads/2023/03/florian_saudi_s.png",
      text: " Saudi Arabia Race Q&A",
      url: "#",
  },
  {
      id:3,
      img: "https://www.catonetworks.com/wp-content/uploads/2023/03/friedemann_india_s.png",
      text: "Q&A With the Head of IT at Porsche Motorsport",
      url: "#",
  },
  {
      id:4,
      img: "https://www.catonetworks.com/wp-content/uploads/2023/04/thomas_sao_paolo.png",
      text: "São Paulo Race Q&A",
      url: "#",
  },
  {
      id:5,
      img: "https://www.catonetworks.com/wp-content/uploads/2023/03/florian_mex_s.png",
      text: "Mexico Race Q&A",
      url: "#",
  },
  
];







init();