const express = require("express");
const server = express();
const path = require('path')
const bodyParser = require("body-parser");
const { response } = require("express");
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser());

let arr = [{
        "name": "Tom",
        "age": 13
    },
    {
        "name": "Dat",
        "age": 21
    },
    {
        "name": "Alex",
        "age": 66
    }
];

server.get("/", (request, response) => {
    // response.send({
    //     message: "Hello World",
    // });
    console.log(path.join(__dirname, "index.html"));
    response.sendFile(path.join(__dirname, "index.html"));
});
server.get("/api", (request, response) => {
    let temp = request.body;
    let name = temp.name;
    let age = temp.age;
    if (parseInt(age) <= 20) {
        arr.push(temp);
        response.status(200).send({
            message: 'Chào bạn trẻ',
            array: arr,
        });
    } else {
        response.status(200).send({
            message: `Chào cụ ${name}`
        });
    }
});

server.post("/api", (request, response) => {
    let temp = request.body;
    let name = temp.name;
    let age = temp.age;
    if (parseInt(age) <= 20) {
        arr.push(temp);
        response.status(200).send({
            message: `Chào nhóc ${name}`,
            array: arr,
        });
    } else {
        response.status(200).send({
            message: `Chào cụ ${name}`
        });
    }
});

server.put("/api", (request, response) => {
    let temp = request.body;
    let name = temp.name;
    let age = temp.age;
    for (let i = 0; i < arr.length; i++) {
        if (name == arr[i].name) {
            arr[i] = {...temp };
        }
    }
    responses.send({
        response: arr,
    });
});

server.delete("/api", (request, response) => {
    let temp = request.body;
    let name = temp.name;
    let age = temp.age;
    for (let i = 0; i < arr.length; i++) {
        if (name == arr[i].name) {
            console.log(arr[i].name);
            arr.splice(i, 2);
        }
    }
    responses.send({
        response: arr,
    });
});

server.listen(3000, () => {
    console.log("Running!!");
});