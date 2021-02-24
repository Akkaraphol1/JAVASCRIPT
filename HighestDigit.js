

function HighestDigit(num){
    let n = num.toString().split("");
      return Math.max(...n);
}

console.log(HighestDigit(379));
console.log(HighestDigit(2));
console.log(HighestDigit(3774019));

//node HighestDigit.js