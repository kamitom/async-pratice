console.log('before');
// getUser(100, (NewUser) => {
//     getRepos(NewUser.gitHubUserName, (NewRepos) => {
//         gitCommits(NewRepos[0], (commits) => {
//             console.log(commits);
//         });
//     });
// });

// Promise-based approach
// getUser(200)
//  .then(userA => getRepos(userA.gitHubUserName))
//  .then(repos => getCommits(repos[0]))
//  .then(commits => console.log('commits: ', commits))
//  .catch(err => console.log('Error', err.message));

 // Async and Await approach
 async function dispalyCommits() {  
     try {
         const xUser = await getUser(200);
         const xRepo = await getRepos(xUser.gitHubUserName);
         const xCommit = await getCommits(xRepo[0]);
         console.log(xCommit);
     } catch (error) {
         console.log(error.message);
     }
 }
 dispalyCommits();

console.log('after');



function getUser(id2) {
    return new Promise((resolve, reject) => {
        // kick off this async work...
        setTimeout(() => {
            console.log('reading a user data from a Database...');
            resolve({id: id2,gitHubUserName: 'tomkami'});
        }, 2000);
    });
}


function getRepos(UserName) {
    
    return new Promise((resolve, reject) => {
        // kick off some async work...
        setTimeout(() => {
            console.log('calling gitHub API...');
            resolve(['repo1', 'repo2', 'repo3']);
            // reject(new Error('Operation Error...'));
        }, 2000);
    });
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        // kick off some async work...
        setTimeout(() => {
            console.log('Calling GitHub commits API...');
            resolve(['commit one']);
        }, 2000);

    });

}
