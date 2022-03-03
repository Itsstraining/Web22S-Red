const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const admin = require("firebase-admin");
var firebasekey = require("./keys/firebase-key.json");

admin.initializeApp({
    credential: admin.credential.cert(firebasekey),
  });

const firestore = admin.firestore();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));
app.use(cors());

app.get("/", (request,response) => {
    response.send({
        message: "Hello World",
    });
});

app.get("/item/:name", async function(response,request){
    let params = request.params.name;
    console.log("API 1" + params);
    let querySnapShot = await firestore.collection(params).get();

    let datas = await querySnapShot.docs.map((value) => {
        let temp = value.data();
        return temp;
    });
    response.send(datas);
});

//params cần "<path>/:<tên thuộc tính cần truyền>/" trong code back-end
// trên browser thì tuân thủ "<url/path/<tên thuộc tính>"

//query thì back-end k cần khai báo trước thuộc tính query
// trên browser thì tuân thủ "url/path?<tên thuộc tính>=<giá trị thuộc tính>" 
//query nếu có nhiều hơn 1 thuộc tính thì cách nhau bằng ký tự "&"

//Get with query

app.get("/item/", async function (request,response){
    let temp = request.query.name;
    console.log("API 2 " + JSON.stringify(temp));
    try{
    let querySnapShot = await (
        await firestore.collection(temp).get()
    ).docs.map((value) => {
        let temp = value.data();
        return Temp;
    });
    response.send(querySnapShot);
 }catch (error) {
    console.log("Lỗi không lấy được data");
  }
});

app.post("/item", async (request,response) => {
    let body = request.body;
    console.log(body);
    let docName = body.data.name + "-" + Math.round(Math.random() * 10).toString();
    let result = await firestore.collection(body.collectionName).doc(docName).set(body.data);
    response.send({
        message: "Successfull!!!",
    });
});

app.listen(3000, ()=>{
    console.log("Sever is running!!!")
})