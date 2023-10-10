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