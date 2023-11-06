var contactpopup = document.getElementById('contact-popup');
var contactbutton = document.getElementById('openContact');

const carousel = document.querySelector('.sm_carousel');
const main_carousel = document.querySelector('.sm_carousel_container')
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

/* let currentIndex = 0; */
let currentIndex = Math.floor(carousel.children.length/2);
let startIndex = currentIndex;

contactbutton.onclick = function() {
  contactpopup.style.display = 'block';
}

function closeModal() {
  contactpopup.style.display = 'none';
}

window.onclick = function(event) {
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
carousel.addEventListener("swipe", turnCarousel, true);

function turnCarousel(event) {
  event.preventDefault();
  if (event.deltaY < 0){
    currentIndex = (currentIndex + 1) % carousel.children.length;
  }
  else if (event.deltaY > 0){
    currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
  }
  updateCarousel();}

function updateCarousel() {
  for (let i = 0; i < carousel.children.length; i++) {
    const item = carousel.children[i];
    item.classList.remove('selected');
}
  const itemWidth = carousel.children[0].offsetWidth;
  const translateX = (currentIndex-startIndex)*itemWidth;
  carousel.style.right = translateX + 'px';
  const selectedItem = carousel.children[currentIndex];
  selectedItem.classList.add('selected');
}

// Initialisierung des Carousels
updateCarousel();
alert('newVersion3')


carousel.addEventListener('swiped-left', alertswipe, true);
carousel.addEventListener('swiped-right', alertswipe, true);


function alertswipe(event) {
  alert('swipe')
}


