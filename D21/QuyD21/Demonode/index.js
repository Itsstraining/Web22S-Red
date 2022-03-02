const { response } = require("express");
const bodyParser = require("body-parser");
const { request } = require("express");
const express = require("express");
const sever = express();
sever.use(bodyParser());
let arr =[]
sever.get("/",(request,response)=>{
    let name = request.query.name;
    let age = request.query.age;

    console.log(name,age);
    if(parseInt(age)<=20){
        response.status(200).send({
            message: `Chào ${name}, bạn còn non lắm!!`,
        });
    }else{
        response.status(200).send({
            message: `Chào cụ ${name}, cụ đã ngoài ${age}!!`,
        });
    }   
})

sever.post("/",(request,response)=>{
    let temp = request.body;
    let name = temp.name;
    let age = temp.age;
    if(parseInt(age)<=20){
        arr.push(temp);
        response.status(200).send({
            message: `Chào ${name}, bạn còn non lắm!!`,
            array:arr,
        });
    }else{
        response.status(200).send({
            message: `Chào cụ ${name}, cụ đã ngoài ${age}!!`,
        });
    } 
});

sever.listen(3000,()=>{
    console.log("Chạy được rồi");
})