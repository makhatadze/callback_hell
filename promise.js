requestPromise(`https://jsonplaceholder.typicode.com/users`)
.then((users)=>{
    console.log(users);
    return requestPromise(`https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`);
})
.then((posts)=>{
    console.log(posts);
    requestPromise(`https://jsonplaceholder.typicode.com/posts/${posts[0].id}/comments`,(comments)=>{
        
    })
    .then((comments)=>{
        console.log(comments);
    })
    .catch((error)=>{
        console.log(error);
        
    })
    
});