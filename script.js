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
alert('newVersion')


/* let touchstartX = 0
let touchendX = 0
    
function whichDirection() {
  if (touchendX < touchstartX) alert("Swipe nach Links");
  if (touchendX > touchstartX) alert("Swipe nach Rechts");
}

carousel.addEventListener('touchstart', evt => {
  touchstartX = evt.changedTouches[0].screenX;
})

carousel.addEventListener('touchend', evt => {
  touchendX = evt.changedTouches[0].screenX;
  whichDirection();
}); */




var touchstartX = 0;
var touchstartY = 0;
var touchendX = 0;
var touchendY = 0;

carousel.addEventListener('touchstart', function(event) {
    touchstartX = event.screenX;
    touchstartY = event.screenY;
}, false);

carousel.addEventListener('touchend', function(event) {
    touchendX = event.screenX;
    touchendY = event.screenY;
    handleGesure();
}, false); 

function handleGesure() {
    var swiped = 'swiped: ';
    if (touchendX < touchstartX) {
        alert(swiped + 'left!');
    }
    if (touchendX > touchstartX) {
        alert(swiped + 'right!');
    }
    if (touchendY < touchstartY) {
        alert(swiped + 'down!');
    }
    if (touchendY > touchstartY) {
        alert(swiped + 'left!');
    }
    if (touchendY == touchstartY) {
        alert('tap!');
    }
}

