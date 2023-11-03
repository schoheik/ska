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
  const translateX = currentIndex * -300;
  carousel.style.transform = `translateX(${translateX}px)`;
}