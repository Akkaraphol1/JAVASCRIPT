let values1 = ['Apple',1,false];
let values2 = ['Fries',2,true];
let values3 = ['Mars',9,'Apple'];

function compareArray2(values1,values2,values3){
var buf1 = Buffer.from(typeof values1[0]);
var buf2 = Buffer.from(typeof values2[0]);
var buf3 = Buffer.from(typeof values1[1]);
var buf4 = Buffer.from(typeof values2[1]);
var buf5 = Buffer.from(typeof values1[2]);
var buf6 = Buffer.from(typeof values2[2]);
var buf7 = Buffer.from(typeof values3[0]);
var buf8 = Buffer.from(typeof values3[1]);
var buf9 = Buffer.from(typeof values3[2]);

return((buf1.equals(buf2)) + "\t" + (buf3.equals(buf4)) + "\t" + (buf5.equals(buf6)) 
+ "\n" + (buf2.equals(buf7))  + "\t" + (buf4.equals(buf8)) + "\t" + (buf6.equals(buf9)) 
+ "\n" + (buf1.equals(buf7))  + "\t" + (buf3.equals(buf8)) + "\t" + (buf5.equals(buf9)));

}
console.log(compareArray2(values1,values2,values3));


//console.log(buf1);



//console.log(compareArray(values1,values2,values3));
//node compareArray2.js