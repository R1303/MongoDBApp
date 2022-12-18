const functions = require("firebase-functions");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const express = require("express");
const bodyParser = require("body-parser");
const mongo = require("mongoose");
const cors=require("cors");

const db = mongo.connect("mongodb+srv://rajan_rana_db:Rajan123@cluster0.had30i8.mongodb.net/test?retryWrites=true&w=majority", function(err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to "+ db, " + ", response);
  }
});

const app = express();
app.use(bodyParser.json({limit: "5mb"}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({origin: "*"}));

app.use(function(req, res, next) {
  // res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

const Schema = mongo.Schema;

const UsersSchema = new Schema({
  name: {type: String},
  address: {type: String},
}, {versionKey: false});

const Model = mongo.model("users", UsersSchema, "users");

app.post("/api/SaveUser", function(req, res) {
  const mod = new Model(req.body);
  if (req.body.mode == "Save") {
    mod.save(function(err, data) {
      if (err) {
        res.send(err);
      } else {
        res.send({data: "Record has been Inserted..!!"});
      }
    });
  } else {
    Model.findByIdAndUpdate(req.body.id, {name: req.body.name,
      address: req.body.address},
    function(err, data) {
      if (err) {
        res.send(err);
      } else {
        res.send({data: "Record has been Updated..!!"});
      }
    });
  }
});

app.post("/api/deleteUser", function(req, res) {
  Model.remove({_id: req.body.id}, function(err) {
    if (err) {
      res.send(err);
    } else {
      res.send({data: "Record has been Deleted..!!"});
    }
  });
});

app.get("/api/getUser", function(req, res) {
  Model.find({}, function(err, data) {
    if (err) {
      // res.set("Access-Control-Allow-Origin", "*");
      res.send(err);
    } else {
      // res.set("Access-Control-Allow-Origin", "*");
      res.send(data);
    }
  });
});

// app.listen(2001,function() {
//    console.log("Example app listening on port 2001");
// })

app.get("/hello", (req, res, next) => {
  console.info("/hello call success ");
  res.set("Access-Control-Allow-Origin", "*");
  res.send("Welcome to Firebase Cloud Functions");
});

const adminSchema = new Schema({
  username: {type: String},
  password: {type: String},
}, {versionKey: false});

const Model1 = mongo.model("admin", adminSchema, "admin");

app.get("/api/getAdminDetails/:username", function(req, res) {
  console.log(req.params.username);
  Model1.findOne({username: req.params.username}, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.post("/api/adminSave", function(req, res) {
  const mod = new Model1(req.body);
  mod.save(function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send({data: "Record has been Inserted..!!"});
    }
  });
});

exports.app = functions.https.onRequest(app);


