

console.log('Before');


// getUser(99, function (user2) {
//     getRepos(user2, (repos) => {
//         getCommits(repos[1], (return_comit) => {
//             console.log(return_comit);
//         });
//     });
// });

// promise solution:
getUser(100)
    .then(user => getRepos(user.gUsername))
    .then(repo => getCommits(repo[2]))
    .then(commits => console.log(commits))
    .catch(err => console.log(err.message));
    




console.log('After');

// callbacks
// promises
// async/await

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('reading a user from a database...');
            resolve({
                id: id,
                gUsername: 'tom'
            });
        }, 4000);
    });

    
}

function getRepos(Username) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('accroding to the User:', Username);
            // resolve(['repo111', 'repo222', 'repo333', 'repo444']);
            reject(new Error('Could not get the repos !!!'));
        }, 4000);
    })

    
}

function getCommits(Repo) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('accroding to the repos:', Repo);
            resolve(['commit1', 'commit2', 'commit3', 'commit44444']);
        }, 4000);
    })
    

}