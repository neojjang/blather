(function($) {
  $.fn.srtvert = function(options) {

 var opts = $.extend({}, $.fn.srtvert.defaults, options);

 return this.each(function() {

   var text = $this.val();
   var check = $.fn.srtvert.is_srt(text);
   console.log(check);

   });
 };


 $.fn.srtvert.is_srt = function(text) {
   var srtRE = /^\d\d:\d\d:\d\d[,.]\d\d\d\s*–>\s*\d\d:\d\d:\d\d[,.]\d\d\d\s*(X1:\d+\s+X2:\d+\s+Y1:\d+\s+Y2:\d+)?\s*$/m;
   return srtRE.match(text) 
 };

 $.fn.srtvert.defaults = {
 };

})(jQuery);
