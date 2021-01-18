
 var str  = "3+5+2";

 function equaltion(str)
{
   var res  = str.substr(0,3);
   var res2 = str.substr(0,5);
   var res3 = str.substr(0,2);
   return res.length + res2.length + res3.length;
}
 console.log(equaltion(str));

// node equaltion2.js