

request('https://jsonplaceholder.typicode.com/users', (users)=>{
    console.log(users);
    request(`https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`,(posts)=>{
        console.log(posts);
        request(`https://jsonplaceholder.typicode.com/posts/${posts[0].id}/comments`,(comments)=>{
            console.log(comments);
            request(`https://jsonplaceholder.typicode.com/todos?userId=${users[0].id}`,(todos)=>{
                console.log(todos);
            })

        })
    })

});
