const posts = ['Hi'];

function updateLastUserActivityTime(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const date = new Date();
            console.log(`User Activity Time : ${date}`)
            resolve();
        },1000)
    })
}

function createPost(post) {
    return new Promise( (resolve, reject) => {
        posts.push(post);
        resolve();
    })
}
function printPost() {
    return new Promise( (resolve, reject) => {
        posts.map((post) => {
            console.log(`${post}`)
        })
        resolve();
    })
}
function deletePost() {
    return new Promise( (resolve, reject) => {
        posts.pop();
        resolve();
    })
}

createPost('Hello')
.then(printPost)
.then(updateLastUserActivityTime)
.then(deletePost)
.then(printPost)