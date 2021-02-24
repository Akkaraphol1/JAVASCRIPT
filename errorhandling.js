function criticalCode(){

    throw "throwing an exception";
}

function logError(theException){
    console.log(theException);
}

console.log("\n*********Try...Catch*********\n");

try{
    //criticleCode();
    let x = 0;
}catch (ex){
    console.log("Got an error");
    logError(ex);
}

console.log("\n************throwing in Try...Catch*********\n");
try{
    throw "An excepion that is thrown every time";
} catch(ex){
    console.log("Got an error");
    logError(ex);
}

// Try..Catch..Finally
console.log("\n************Try..Catch..Finally***********\n");

try{
    criticalCode();
}catch(ex){
    console.log("Got an Error");
    logError(ex);
} finally{
    console.log("Code that always will run");
}
function hello(){
    console.log("\n*************Throw Exceptions************\n");
}
// node errorhandling.js