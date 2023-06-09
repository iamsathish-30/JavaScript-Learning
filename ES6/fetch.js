fetch('https://jsonplaceholder.typicode.com/comments',{
    method:"POST",
    body:JSON.stringify({
        postId:1,
        name:"Comment 1",
        email:"example2023@gmail.com",
        city:'coimabatore'
    })
})
    .then(response => response.json())
    .then(data => console.log(data))

fetch('https://jsonplaceholder.typicode.com/comments/1')
    .then(res=>res.json())
    .then(data=>console.log(data));

