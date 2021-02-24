function simplePair(a) {
    var temp = a.slice();
    var arr = [];
  
    while (temp.length) {
      arr.push(temp.splice(0,1));
    }
  
    return arr;
  }
  console.log(simplePair([1,2,3],3));
  console.log(simplePair([1,2,3],6));
  console.log(simplePair([1,2,3],9));
  // node AsimplePair.js