

// const p = Promise.reject(new Error('error for some reason...'));
// p.catch(error => console.log(error));
// console.log(module);



const p2 = new Promise((resolve, reject) => {
    //kick off async work 2...
    setTimeout(() => {
        console.log('async operation 2...');
        resolve(200);
    }, 3000);
});

const p1 = new Promise((resolve, reject) => {
    //kick off async work 1...
    setTimeout(() => {
        console.log('async operation 1...');
        resolve(100);
    }, 3000);
});

Promise.race([p1, p2])
.then(result => console.log(result))
.catch(err => console.log(err.message));
