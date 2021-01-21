let furniture = ['Table','Chairs','Couch'];

let index = 0;
while (index < furniture.length) {
    const name = furniture[index];
    console.log(name);
    index++;
    for( let char of name)
    {
        console.log( char );
    }
    
}
/*

console.log(myFunction());*/
//node ColumnArray.js