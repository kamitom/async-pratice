
const p = new Promise((resolve, reject) => {
    // kick off some async work
    setTimeout(() => {
        resolve(100); // pending => resolved, fullfilled
        // reject(new Error('message')); //pendig => rejected
    }, 2000);
});

p.then(result => console.log(`Result: ${result}`))
 .catch(err => console.log(`Error: ${err.message}`));