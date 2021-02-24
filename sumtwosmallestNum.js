
  function sumTwoSmallestNumbers(numbers){
    const min = Math.min.apply(null, numbers); // เอาค่าของตัวที่น้อยที่สุด 1 ตัวมา
    numbers.splice(min); // ตัดค่าที่ น้อยสุดของ array ออก เหลือ 19,5,42,77
    if(numbers.splice(min) <= -1){

    }
    const mins  = Math.min.apply(null, numbers);// เอา ค่าตัวที่น้อยที่สุดของตัวที่เหลือ 5 
    return (min + mins) // 2 + 5
  }
  
  console.log(sumTwoSmallestNumbers([19,5,42,2,77]));
  console.log(sumTwoSmallestNumbers([10,343445353,3453445,3453545353453]));
  console.log(sumTwoSmallestNumbers([2,9,6,-1]));
