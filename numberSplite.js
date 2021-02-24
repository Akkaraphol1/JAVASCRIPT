
function NumberSplite(x){
    if(x % 2 == 0 ){
      return[x/2, x/2]
     
    }
    else if(x % 2 != 0 ){
      return[Math.floor(x/2), Math.floor(((x/2)+1))]
    }
  }
  
  console.log(NumberSplite(4));
  console.log(NumberSplite(10));
  console.log(NumberSplite(11));
  console.log(NumberSplite(-9));
  
  // node numberSplite.js