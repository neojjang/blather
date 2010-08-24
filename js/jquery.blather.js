(function($){

  

})(jQuery)

$(function(){

  var $video = $('video:first');
  var $line = $('input[type=text]:first');
  var video = $video.get(0);

  $video.bind('timeupdate', function(){
    var rounded = Math.floor(video.currentTime);
    if (rounded % 1 == 0 ){
      $('#currentTime').text(timestamp(Math.floor(video.currentTime)));
    }
  })

  function save(){
    localStorage['script'] = $('#lines').html();
  }
  

  $('input#line').keydown(function(e){
    if($(this).val().length > 0 && e.which == 13){
       $(this).parent().after($('<li/>',{
           'text': $(this).val()   
         })
       )
       $(this).val('').focus();
       save();
   }
  })

  $(document).keydown(function(e){
    if (e.which==27){
      if (video.paused){
        video.play();
      } else {
        video.pause();
        $line.focus();
      }
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
