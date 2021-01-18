let str2  = "7*4-2";

 function equaltion4(str2)
 {
    let res2  = str2.substr(0,5);
    let res3  = str2.substr(0,2);
    let res4  = str2.substr(0,4);
    let res5  = str2.substr(0,2);
    return ((res2.length + res3.length) * res4.length) - res5.length;
 }
  console.log(equaltion4(str2));
