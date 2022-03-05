const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sever = express();
const admin = require("firebase-admin");
var serviceAccount = require("../key/admin-key.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
const firestore = admin.firestore();
sever.use(bodyParser.json());
sever.use(bodyParser.urlencoded({ extended: false }));
sever.use(cors());



sever.get("/",(req,res)=>{
    res.sendFile(__dirname + '/index.html');
    //res.send("Hello World");
});

sever.get("/get/:name", async function (request, response) {
    let params = request.params.name;
    let querySnapshot = await firestore.collection(params).get();
  
    let datas =  querySnapshot.docs.map((value) => {
      let temp = value.data();
      return temp;
    });
    response.send(datas);
    response.send("Lay thanh cong!");
  });

 
sever.post("/post", async (req, res) => {
    let temp = req.body;
    console.log(temp);
    let docName =temp.data.name;
    let result = await firestore
      .collection(temp.collectionName)
      .doc(docName)
      .set(temp.data);
    res.send({result});
  });
// cập nhật 1 món mới
  sever.put("/put", async (req,res)=>{
    let collectionName=req.body.collectionName;
    let docID=req.body.docID;
    let result = await firestore
    .collection(collectionName)
    .doc(docID)
    .update(req.body.data)
    console.log(result);
    res.send(result);
    
    
  })
  // sửa thông tin
  sever.put("/put/set", async (req,res)=>{
    let collectionName=req.body.collectionName;
    let docID=req.body.docID;
    let result = await firestore
    .collection(collectionName)
    .doc(docID)
    .set(req.body.data)
    res.send(result);
    console.log(result.writeTime);
  })


  // delete nhiều doc
  sever.delete("/delete/multi", async(req,res)=>{
    let collectionName=req.body.collectionName;
    let docID=req.body.docID;
    for (let doc of docID)
    {
      let result = await firestore
    .collection(collectionName)
    .doc(doc)
    .delete();
    res.send(result);
    }
    // let result = await firestore
    // .collection(collectionName)
    // .doc(docID)
    // .delete();
    // res.send(result);
  })

//delete 1 field 
  sever.delete("/delete/field", async(req,res)=>{
    let collectionName=req.body.collectionName;
    let docID=req.body.docID;
    let fields=req.body.fields;

    console.log(fields)
    for ( let field of fields)
    {
      let result =  await firestore
    .collection(collectionName)
    .doc(docID)
    .update({[field]:admin.firestore.FieldValue.delete(),});
    res.send(result);
    }
   
  })



//delet 1 doc
  sever.delete("/delete", async(req,res)=>{
    let collectionName=req.body.collectionName;
    let docID=req.body.docID;
    let result = await firestore
    .collection(collectionName)
    .doc(docID)
    .delete();
    res.send(result);
  })

sever.listen(3000,()=>{
    console.log("Sever is starting");
});