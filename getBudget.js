function getBudgets(arr) {
    return arr
      .map(obj => Object.values(obj)[2])
      .reduce((acc, curr) => acc + curr);
  }

  console.log(getBudgets([{name : "John" , age : 21, budget : 23000}
  ,{name : "Steve" , age : 32, budget : 40000}
  ,{name : "Martin" , age : 16, budget : 2700}]));

  console.log(getBudgets([{name : "John" , age : 21, budget : 13000}
  ,{name : "Steve" , age : 32, budget : 20000}
  ,{name : "Martin" , age : 16, budget : 2700}]));
  // node getBudget.js