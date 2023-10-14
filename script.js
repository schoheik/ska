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

var image = document.getElementById("AlexBild");
var overlay = document.getElementById("overlayAlex")
overlay.addEventListener('click',function() {
  if (image.style.opacity === "0") {
    image.style.opacity = "1";
  } else {
    image.style.opacity = "0"
  }
  }
)