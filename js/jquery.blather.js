(function($){

  

})(jQuery)

$(function(){

  var $media = $('video:first, audio:first');
  var $line = $('input[type=text]:first');
  var media = $media.get(0);

  $media.bind('timeupdate', function(){
    var rounded = Math.floor(media.currentTime);
    if (rounded % 1 == 0 ){
      $('#currentTime').text(timestamp(Math.floor(media.currentTime)));
    }
  })

  function save(){
    var name = $('audio source')[0].src.split('/').pop();
    localStorage[name] = $('#lines').html();
  }
  

  $('input#line').keydown(function(e){
    var line = $(this).val();
    if(e.which == 13 && line.length > 0){
       $('#lines').prepend($('<li/>',{
           'text': $(this).val()   
         })
       )
       $(this).val('');
       save();
   }
  })

  function togglePlay(){
      if (media.paused){
        media.play();
      } else {
        media.pause();
      }
  }

  $(document).keydown(function(e){
    switch(e.which){
      case Key.LEFT:
        media.currentTime = media.currentTime - 2;
        media.play();
        break;
      case Key.RIGHT:
        media.currentTime = media.currentTime + 2;
        media.play();
        break;
      case Key.ESC: 
        togglePlay();
        break;
    }
  })
 

  $('#add_speaker').click(function(){
    var next_index = $('#speakers label').length;
    var next_id = 'speaker_' + next_index;
    $('<label/>', {
      'for': next_id,
      'text' : $('#speakers label').length
    }).appendTo($('#speakers'))
    .prepend(
      $('<input/>', {
        'name' : 'speakers',
        'id' : next_id,
        'value' : next_id,
        'type' : 'radio'
      })
    );
  })


})
