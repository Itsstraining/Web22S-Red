const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sever = express();
const admin = require("firebase-admin");
var serviceAccount = require("../key/key-admin.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
const firestore = admin.firestore();
sever.use(bodyParser.json());
sever.use(bodyParser.urlencoded({ extended: false }));
sever.use(cors());

sever.get("/get",(req,res)=>{
    res.send("Hello Các BẠn");
});
// get with params
sever.get("/get/:name", async function (request, response) {
    let params = request.params.name;
    let querySnapshot = await firestore.collection(params).get();
  
    let datas =  querySnapshot.docs.map((value) => {
      let temp = value.data();
      return temp;
    });
    response.send(datas);
    response.send("Hehe");
  });

  // get with query
sever.post("/post", async (req, res) => {
    let body = req.body;
    console.log(body);
    let docName =
      body.data + "-" + Math.round(Math.random() * 10).toString();
    let result = await firestore
      .collection(body.collectionName)
      .doc(docName)
      .set(body.data);
    res.send({result});
  });


sever.listen(3000,()=>{
    console.log("Sever is starting");
});