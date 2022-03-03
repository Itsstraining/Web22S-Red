const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const admin = require("firebase-admin");
var key = require("./keys/firebase-admin.json");

admin.initializeApp({
    credential: admin.credential.cert(key),
});

const firestore = admin.firestore();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


app.get("/", (request, response) => {
    response.send({
        message: "Hello World",
    });
});


//get with params
app.get("/item/:name", async function(request, response) {
    let params = request.params.name;
    console.log(params);
    let querySnapshot = await firestore.collection(params).get();

    let datas = await querySnapshot.docs.map((value) => {
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


// get with query
app.get("/item/", async function(request, response) {
    let temp = request.query.name;
    let querySnapshot = await (
        await firestore.collection(temp).get()
    ).docs.map((value) => {
        let temp = value.data();
        return temp;
    });
    response.send(querySnapshot);
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

app.listen(3000, () => {
    console.log("Server is running");
});