const express = require("express");
const server = express();
server.get("/", (request, response) => {
    response.send({
        message: "Hello World",
    });
});
server.get("/api", (request, response) => {
    let query = request.query.name;
    let age = request.query.age;
    if (parseInt(age) <= 20) {
        response.status(200).send({
            message: 'Chào bạn trẻ'
        });
    } else {
        response.status(200).send({
            message: `Chào cụ ${name}`
        });
    }
});
server.listen(3000, () => {
    console.log("Running!!");
});