/*

  jquery.loadmedia.js - a simple audio player 

*/

(function($) {

  $.fn.loadmedia = function(options) {

   debug(this);
   var opts = $.extend({}, $.fn.loadmedia.defaults, options);

   return this.each(function() {
     $this = $(this);

     var o = $.meta ? $.extend({}, opts, $this.data()) : opts;

      $this.css({
        backgroundColor: o.background,
        color: o.foreground
      });

      var markup = $this.html();
      markup = $.fn.loadmedia.format(markup);
      $this.html(markup);

    });
  };
     
  function debug($obj) {
  // private function
    if (window.console && window.console.log){
      window.console.log('loadmedia selection count: ' + $obj.size());
    }
  };

  $.fn.loadmedia.format = function(txt) {
  // public function
    return '<strong>' + txt + '</strong>';
  };

  $.fn.loadmedia.defaults = {
  // public object
    foreground: 'red',
    background: 'yellow'
  };

})(jQuery);

