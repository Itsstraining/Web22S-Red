const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const admin = require("firebase-admin");
const { response } = require("express");
const path = require('path');

var key = require("./keys/firebase-admin.json");
let arr = [];

admin.initializeApp({
    credential: admin.credential.cert(key),
});

const firestore = admin.firestore();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


app.get('', (request, response) => {
    response.sendFile(path.join(__dirname, 'index.html'))
})
app.get("/item/:name", async function(request, response) {
    let params = request.params.name;
    let querySnapshot = await firestore.collection(params).get();

    let datas = await querySnapshot.docs.map((value) => {
        let temp = value.data();
        return temp;
    });
    response.send(datas);
});
app.get("/item", async function(request, response) {
    let temp = request.query;
    console.log("API 2 " + JSON.stringify(temp));
    try {
        let querySnapshot = await (
            await firestore.collection(temp.data).get()
        ).docs.map((value) => {
            let temp = value.data();
            return temp;
        });
        response.send(querySnapshot);
    } catch (error) {
        console.log("Lỗi không lấy được data");
    }
});

app.get(('/api/:collection/:docId'), async(request, response) => {
    let collectionName = request.params.collection;
    let docId = request.params.docId;
    try {
        let documentSnapshot = await firestore.collection(collectionName).doc(docId).get();
        console.log(documentSnapshot.result);
        response.send(documentSnapshot.result);
    } catch (err) {
        response.send({
            message: "Unsuccessful!!",
            error: err,
        });
    }
});

app.get('/api', async(request, respone) => {
    let collectionName = request.query.collection == undefined ? "" : request.query.collection;
    let docId = requset.query.docId == undefined ? "" : requset.query.docId;
});

app.post("/item", async(req, res) => {
    let body = req.body;
    console.log(body);

    let docName =
        body.data.name + "-" + Math.round(Math.random() * 10).toString();

    let result = await firestore
        .collection(body.collectionName)
        .doc(docName)
        .set(body.data);

    res.send({
        message: "Successful!!!",
    });
});



// thêm sửa trường đã có sẵn
app.put("/api/update", async(request, response) => {
    try {
        let collectionName = request.body.collectionName;
        let docId = request.body.docId;
        console.log(collectionName, docId);
        //update: update len du lieu ban dau
        let result = await firestore.collection(collectionName).doc(docId).update({
            name: "dattttt",
        });
        console.log(result);
        response.send("Thanh cong")
    } catch (err) {
        response.send({
            error: err.toString(),
        })
    }
});

//update = set
//set: xoa cai cu, set lai cai moi

app.put("/api/newUpdate", async(request, response) => {
    try {
        let collectionName = request.body.collectionName;
        let docId = request.body.docId;
        console.log(collectionName, docId);
        let result = await firestore.collection(collectionName).doc(docId).set({
            name: "trong",
            age: 331,
        });
        console.log(result);
    } catch (err) {
        response.send({
            error: err.toString(),
        })
    }
});

//xoá phần tử đang có trong dữ liệu đã có
app.put("/api/deleteField", async(request, response) => {
    let collectionName = request.body.collectionName;
    let docId = request.body.docId;
    let fields = request.body.fields;
    console.log(fields);
    for (let i = 0; i < fields.length; i++) {
        await firestore.collection(collectionName).doc(docId).update({
            [fields[i]]: admin.firestore.FieldValue.delete()
        });
    }
    console.log("deleted field " + fields);
    response.send({
        message: 'Deleted',
    });
});

//delete 1 document
app.delete("/delete", async(request, response) => {
    let collectionName = request.body.collectionName;
    let docId = request.body.docId;
    firestore.collection(collectionName).doc(docId).delete();
    response.send({
        message: "Đã xoá",
    });
});

//delete nhiều document
app.delete("/deletes", async(request, response) => {
    let collectionName = request.body.collectionName;
    let docs = [...request.body.docs];
    for (let docId of docs) {
        await firestore.collection(collectionName).doc(docId).delete();
    }
    response.send({
        message: "Đã xoá",
    });

});

//delete tất cả document trong collection
app.delete("/api/:name", async function(request, response) {
    let params = request.params.name;
    let querySnapshot = firestore.collection(params).get()
        .then(res => {

            res.forEach(element => {
                element.ref.delete();
            });
        });
    response.send(querySnapshot);
});

app.listen(3000, () => {
    console.log("Server is running!!");
});