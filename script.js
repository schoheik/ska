var contactpopup = document.getElementById('contact-popup');
var contactbutton = document.getElementById('openContact');
var headerlogo = document.getElementById('headerimg');

const smcards = document.querySelectorAll('.card_sm')
const carousel = document.querySelector('.sm_carousel');
const main_carousel = document.querySelector('.sm_carousel_container')
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');





const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    /* el: '.swiper-pagination', */
    el: '.swiper-dynamic',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
/*   scrollbar: {
    el: '.swiper-scrollbar',
  }, */
});













/* let currentIndex = 0; */
let currentIndex = Math.floor(carousel.children.length / 2);
let startIndex = currentIndex;

if (carousel.children.length % 2 == 0) {
  var odd = 0;
} else {
  var odd = 1;
}

contactbutton.onclick = function () {
  contactpopup.style.display = 'block';
}

function closeModal() {
  contactpopup.style.display = 'none';
}

window.onclick = function (event) {
  if (event.target == contactpopup) {
    closeModal();
  }
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % carousel.children.length;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
  updateCarousel();
});

/* carousel.addEventListener("wheel", turnCarousel, true); */

/* function turnCarousel(event) {
  event.preventDefault();
  if (event.deltaY < 0) {
    currentIndex = (currentIndex + 1) % carousel.children.length;
  }
  else if (event.deltaY > 0) {
    currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
  }
  updateCarousel();
} */

function updateCarousel() {
  for (let i = 0; i < carousel.children.length; i++) {
    const item = carousel.children[i];
    item.classList.remove('selected');
  }
  const itemWidth = carousel.children[0].offsetWidth;
  if (odd == 1) {
    var translateX = (currentIndex - startIndex) * itemWidth;
  } else if (odd == 0) {
    var translateX = (currentIndex - startIndex + 0.5) * itemWidth;
  }
  carousel.style.right = translateX + 'px';
  const selectedItem = carousel.children[currentIndex];
  selectedItem.classList.add('selected');
}

// Initialisierung des Carousels
updateCarousel();

/* document.body.addEventListener('swiped-left', swipeCarouselleft, true);
document.body.addEventListener('swiped-right', swipeCarouselright, true); */


function offsetanchor() {
  var corrvertical = document.getElementById("myMenue").offsetHeight
  const anchorElements = document.querySelectorAll('#myMenue a');
  anchorElements.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Verhindert das Standardverhalten des Links
      const targetId = link.getAttribute('href').substring(1); // ID des Ziel-Elements aus dem href-Attribut extrahieren
      const targetElement = document.getElementById(targetId); // Das Ziel-Element auswählen
      if (targetElement) {
        const offset = corrvertical;
        const targetOffsetTop = targetElement.offsetTop - offset; // Ziel-Position mit Offset berechnen
        window.scrollTo({ top: targetOffsetTop, behavior: 'smooth' }); // Scrollen zur Ziel-Position mit Animation
      }
    });
  });
}



function openMenue() {
  var menue = document.getElementById("myMenue");
  if (menue.style.display === "none") {
    menue.style.display = "flex";
  } else {
    menue.style.display = "none";
  }
  offsetanchor();
} 
offsetanchor();

/* openMenue(); */