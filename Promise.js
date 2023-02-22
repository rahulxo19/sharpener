const posts = ['Hi'];

async function updateLastUserActivityTime(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const date = new Date();
            console.log(`User Activity Time : ${date}`)
            resolve();
        },1000)
    })
}

async function createPost(post) {
    return new Promise( (resolve, reject) => {
        posts.push(post);
        resolve();
    })
}
async function printPost() {
    posts.map((post) => {
        console.log(`${post}`)
    })
    const up = await updateLastUserActivityTime();
    return up;
}
function deletePost() {
    posts.pop();
}

async function main() {
    await createPost('Hello');
    await createPost('nothing');
    await printPost();
    deletePost();
    await printPost();
  }
  
  main();