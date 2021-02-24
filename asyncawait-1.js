function promiseTimeout(ms){
    return new Promise((resolve,reject) => {
        setTimeout(resolve,ms);
    });
}

async function run() {
    //logic
    console.log("Start!!");

    promiseTimeout(2000);
    console.log("Stop!!");
}

console.log('Before run');
run();
console.log('After run');

// node asyncawait-1.js