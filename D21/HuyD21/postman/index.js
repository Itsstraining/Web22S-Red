const express = require("express");
const server = express();

server.get("/",(request,respone)=>{
    respone.send({
        message: "Hello World",
    })
})
server.get("/api", (request, response) => {
    let query = request.query.name;
    let age = request.query.age;
    if (parseInt(age) <= 20) {
        response.status(200).send({
            message: 'Chào may thang nhoc'
        });
    } else {
        response.status(200).send({
            message: `Chào baby ${name}`
        });
    }
});
server.listen(3000,()=>{
    console.log("Server is running!!")
})