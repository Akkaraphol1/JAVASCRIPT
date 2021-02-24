function promiseTimeout(ms){
    return new Promise((resolve, reject) =>{
        setTimeout(resolve , ms);
    });
}

console.log('Start'); //sinchonus
promiseTimeout(2000)
.then(() => {
    console.log("Done!!");
})
.catch(() => {
    console.log("Error!!");
});

// node promise01.js