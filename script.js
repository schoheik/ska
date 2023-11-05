var contactpopup = document.getElementById('contact-popup');
var contactbutton = document.getElementById('openContact');

const carousel = document.querySelector('.sm_carousel');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

/* let currentIndex = 0; */
let currentIndex = Math.floor(carousel.children.length/2);

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

function updateCarousel() {
  for (let i = 0; i < carousel.children.length; i++) {
    const item = carousel.children[i];
    item.classList.remove('selected');
}

  /* const itemWidth = 400; */
  const itemWidth = 100 / carousel.children.length;
  const itemsCount = carousel.children.length;

  /* const translateX = -currentIndex * itemWidth + (carousel.offsetWidth / 2 - itemWidth / 2); */
  const translateX = -currentIndex *itemWidth;
  alert(translateX)
  carousel.style.transform = `translateX(${translateX}px}`;

  const selectedItem = carousel.children[currentIndex];
  selectedItem.classList.add('selected');
}

// Initialisierung des Carousels
updateCarousel();

