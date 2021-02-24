function time_convert(num)
 { 
  var hours = Math.floor(num / 60);  
  var hourss = Math.floor(num / 120);  
var h = hourss % 40;

  var ss = hours % 60;
  var minutes = num % 60;
  return  h + ":" + ss + ":" + minutes ;         
}
// node TimeConver.js
console.log(time_convert(5025));
console.log(time_convert(61201));
console.log(time_convert(87000));
