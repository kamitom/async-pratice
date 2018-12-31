

console.log('Before');
getUser(99, function (user2) {
    getRepos(user2, (repos) => {
        getCommits(repos[1], (return_comit) => {
            console.log(return_comit);
        });
    });
});
console.log('After');

// callbacks
// promises
// async/await

function getUser(id, callback) {
    setTimeout(() => {
        console.log('reading a user from a database...');
        callback({
            id: id,
            gUsername: 'tom'
        });
    }, 4000);
}

function getRepos(Username, callback) {
    setTimeout(() => {
        console.log('accroding to the User:', Username.gUsername);
        callback(['repo1', 'repo2', 'repo3']);
    }, 4000);
}

function getCommits(Repo, callback) {
    setTimeout(() => {
        console.log('accroding to the repos:', Repo);
        callback(['commit1', 'commit2', 'commit3']);
    }, 4000);

}