$('#audio-control').click(function(){
   if( $("#myVideo").prop('muted') ) {
         $("#myVideo").prop('muted', false);
         $(this).text('Mute');
     // or toggle class, style it with a volume icon sprite, change background-position
   } else {
     $("#myVideo").prop('muted', true);
     $(this).text('Unmute');
   }
});



var contactpopup = document.getElementById('contact-popup');
var contactbutton = document.getElementById('openContact');

contactbutton.onclick = function() {
  window.alert("xxx");
  contactpopup.style.display = 'block';
}

window.onclick = function(event) {
  if (event.target == modal) {
      closeModal();
  }
}


window.addEventListener('load', function() {
  window.alert("xxx");
  const hintergrund = document.getElementById('hintergrund');
  const sticker = document.getElementById('sticker');

  // Funktion zur Skalierung des Stickers relativ zur Größe des Hintergrundbildes
  function skalieren() {
      const hintergrundBreite = hintergrund.clientWidth;
      const stickerBreiteProzent = 5; // Ändern Sie dies nach Bedarf
      const stickerBreite = (hintergrundBreite * stickerBreiteProzent) / 100;

      sticker.style.width = stickerBreite + 'px';
  }

  // Initial skalieren und bei Änderungen des Fensters erneut skalieren
  skalieren();
  window.addEventListener('resize', skalieren);
});


/* https://www.youtube.com/@skarabaeusband3590 */




/*
function toggleVisibility() {
  var image = document.getElementById("AlexBild");
  //var popup = document.getElementsByClassName("memberpopup");
  //var popup = document.getElementById("AlexPopup");
  //var overlay = document.getElementById("overlay");

  if (image.style.opacity === 0) {
    image.style.opacity = 1;
  } else {
    image.style.opacity = 0;
  }
 

  if (image.style.visibility === "hidden") {
    image.removeAttribute("hidden");
  } else {
    image.style.visibility = "hidden";
  }
  

  if (image.style.display === "none") {
    image.style.display = "inline";
    popup.style.display = "inline";
  } else {
    image.style.display = "none";
    popup.style.display = "none";
  }
}


function toggleVisibility() {
  var image = document.getElementById("AlexBild");
  var overlay = document.getElementById("overlayAlex")
  if (image.style.opacity === 0) {
    image.style.opacity = "1";
  } else {
    image.style.opacity = "0";
  }
}
*/


function toggleVisibility() {
  var image = document.getElementById("AlexBild");
  window.alert("function1");
  if (image.style.opacity === 0) {
    window.altert("fct10");
    image.style.opacity = 1;
  } else if (image.style.opacity === 1) {
    window.altert("fct11");
    image.style.opacity = 0;
  }
}
