var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var ejs=require('ejs');
var path = require('path');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json())
app.set('view engine','ejs');

app.get("/",function(req,res){
  res.render('index');
})

app.post("/",function(req,res){
  res.render('index');
 })

app.get("/new",function(req,res){
  res.render('signup');
})

app.get("/login",function(req,res){
  res.render('login');
})

app.get("/cardiology",function(req,res){
  res.render('cardiology');
})

app.get("/cardiology/new",function(req,res){
  res.render('cardiologyform');
 })

app.get("/nephrology",function(req,res){
  res.render('nephrology');
})

app.get("/nephrology/new",function(req,res){
  res.render('nephrologyform');
 })

app.get("/neurology",function(req,res){
  res.render('neurology');
})

app.get("/neurology/new",function(req,res){
  res.render('neurologyform');
 })



app.get("*", function(req, res){
   res.render("index"); 
});

// app.listen(3000,function(){
//     console.log("Server is listening at port 3000");
// })

let port_number = process.env.PORT || 3000;
app.listen(port_number);
