var contactpopup = document.getElementById('contact-popup');
var contactbutton = document.getElementById('openContact');

const carousel = document.querySelector('.sm_carousel');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

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
  const translateX = currentIndex * -200;
  carousel.style.transform = `translateX(${translateX}px)`;

  /* // Automatisches Zurücksetzen auf das erste Element nach dem letzten Element
  if (currentIndex === carousel.children.length - 1) {
      setTimeout(() => {
          currentIndex = 0;
          updateCarousel();
      }, 500); // 500 Millisekunden für die Animation (Anpassen Sie die Zeit nach Bedarf)
  } */
  const selectedItem = carousel.children[currentIndex];
  selectedItem.classList.add('selected');
}

// Initialisierung des Carousels
updateCarousel();

