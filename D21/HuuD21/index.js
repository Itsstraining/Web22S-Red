console.log("Hello");


const express = require("express");
const server = express();
const bodyParser = require("body-parser");
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());


let arr=[
{ name: 'Hữu', age: '22' },
{ name: 'Trọng', age: '20' },
{ name: 'Mạnh', age: '27' },
{ name: 'Kiên', age: '22' }
];
server.get("/",(request,response)=>{
    response.send("Hello các bạn")
})

server.post("/post",(request,respone)=>{
    let temp=request.body;
    console.log(temp);
    arr.push(temp);
    respone.send();

})
console.log(arr);
server.put("/put",(request,respone)=>{
    let temp=request.body;
    let name = temp.name;
    for (let i=0;i<arr.length;i++)
    {
        if (name==arr[i].name)
        {
            arr[i]={...temp};
        }
    }
    respone.send({respone:arr});
    
})

server.delete("/delete",(request,respone)=>{
    let temp=request.body
    let age=temp.age;
    for (let i=0;i<arr.length;i++)
    {
        if (age==arr[i].age)
        {
            arr.splice(i,1);
        }
    }
    respone.send({respone:arr});
})

server.listen(3000,()=>{
    console.log("Server is running");
})