var contactpopup = document.getElementById('contact-popup');
var contactbutton = document.getElementById('openContact');
var headerlogo = document.getElementById('headerimg');

const carousel = document.querySelector('.sm_carousel');
const main_carousel = document.querySelector('.sm_carousel_container')
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

/* let currentIndex = 0; */
let currentIndex = Math.floor(carousel.children.length / 2);
let startIndex = currentIndex;

if (carousel.children.length % 2 == 0) {
  var odd = 0;
  console.log("The number is even. gerade");
} else {
  var odd = 1;
  console.log("The number is odd. ungerade");
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

carousel.addEventListener("wheel", turnCarousel, true);

function turnCarousel(event) {
  event.preventDefault();
  if (event.deltaY < 0) {
    currentIndex = (currentIndex + 1) % carousel.children.length;
  }
  else if (event.deltaY > 0) {
    currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
  }
  updateCarousel();
}

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
alert('newVersion70')


carousel.addEventListener('swiped-left', swipeCarouselleft, true);
carousel.addEventListener('swiped-right', swipeCarouselright, true);

function swipeCarouselleft(event) {
  event.preventDefault();
  currentIndex = (currentIndex + 1) % carousel.children.length;
  updateCarousel();
}
function swipeCarouselright(event) {
  event.preventDefault();
  currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
  updateCarousel();
}

/* function alertswipe(event) {
  alert('swipe')
} */





function openMenue() {
  var menue = document.getElementById("myMenue");
  if (menue.style.display === "block") {
    menue.style.display = "none";
  } else {
    menue.style.display = "block";
  }
} 
