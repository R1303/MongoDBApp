var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
var mongo = require("mongoose");

var db = mongo.connect("mongodb+srv://rajan_rana_db:Rajan123@cluster0.had30i8.mongodb.net/test?retryWrites=true&w=majority", function(err, response){
     if(err){console.log(err);}
     else{ console.log('Connected to '+ db,' + ', response);}
});

var app = express()
app.use(bodyParser());
app.use(bodyParser.json({limit:'5mb'}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(function (req, res, next) {
   res.setHeader('Access-Control-Allow-Origin','*');
   res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE');
   res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');
   res.setHeader('Access-Control-Allow-Credentials',true);
   next();
});

var Schema = mongo.Schema;

var UsersSchema = new Schema({
 name: { type: String },
 address: { type: String },
},{ versionKey: false });

var model = mongo.model('users', UsersSchema, 'users');

app.post("/api/SaveUser",function(req,res){
  var mod = new model(req.body);
if(req.body.mode == "Save")
{
  mod.save(function(err,data){
   if(err){
      res.send(err);
   }
   else {
      res.send({data:"Record has been Inserted..!!"});
   }
});
}
else
{
   model.findByIdAndUpdate(req.body.id, { name: req.body.name, address: req.body.address},
     function(err,data){
      if(err) {
        res.send(err);
      }
      else{
        res.send({data:"Record has been Updated..!!"});
      }
   });
}
})

app.post("/api/deleteUser",function(req,res){
   model.remove({ _id: req.body.id }, function(err) {
     if(err){
        res.send(err);
     }
     else{
        res.send({data:"Record has been Deleted..!!"});
     }
});
})

app.get("/api/getUser",function(req,res){
    model.find({},function(err,data){
      if(err){
         res.send(err);
      }
      else{
         res.send(data);
      }
    });
})

app.listen(8080,function() {
   console.log("Example app listening on port 8080");
})


// ------------------------------------------------------------------------


var adminSchema = new Schema({
   username: { type: String },
   password: { type: String },
  },{ versionKey: false });

  var model1 = mongo.model('admin', adminSchema, 'admin');

  app.get("/api/getAdminDetails",function(req,res){
   model1.find({},function(err,data){
     if(err){
        res.send(err);
     }
     else{
        res.send(data);
     }
   });
})

app.post("/api/adminSave",function(req,res){
   var mod = new model(req.body);
   mod.save(function(err,data){
    if(err){
       res.send(err);
    }
    else {
       res.send({data:"Record has been Inserted..!!"});
    }
 });
 })

