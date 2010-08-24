
function timestamp(seconds) {
  var s = seconds % 60;
  var m = Math.floor((seconds % 3600 ) /60);
  var h = Math.floor(seconds / (60*60));
  
  var hourstring = h<10 ? "0"+h+":" : h+":";
  if (h==0) hourstring="";
  var minutestring = m<10 ? "0"+m+":" : m+":";
  var secondstring = s<10 ? "0"+s : s;
  return hourstring+minutestring+secondstring;
}
