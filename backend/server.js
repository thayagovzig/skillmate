const express = require('express'); 
const app = express(); 
const mysql = require('mysql'); 
require("dotenv").config(); 
const crypto = require('crypto'); 

app.use(express.json()) 
app.use(express.urlencoded({extended:true}));  

const client_url = "http://localhost:5173"; 

const dbParams = {
    host:process.env.HOST,
    user:process.env.USER,  
    password:process.env.PASSWORD,  
    database:"skillmate_dev" 
}

// console.log(dbParams);  

const db = mysql.createConnection(dbParams);  

db.connect(err => {
    if(err){
        console.log("Connection to DB Unsuccessful")
        console.log(err.sqlMessage) ;  
    }else{
        console.log("Database Connected Successfully!") 
    }
}) 

app.get("/", (req,res) => {
    res.json({"message":"Hello World"}) 
}); 

app.get("/waitlist", (req,res) => {
    let query = "select * from waitlist";  
    db.query(query, (err,data) => {
        if(err){
            console.log(err.sqlMessage); 
            res.send({"status":false, "message":"Retreival Failed"}) 
            return  
        }
        console.log(data); 
        res.send(data) 
    })
})  


app.post("/waitlist", (req,res) => {
    console.log("Body:") 
    console.log(req.body);  
    console.log("JSON: ") 
    console.log(req.json); 
    let {firstname, lastname, email, phonenumber, password} = req.body;  
    phonenumber = parseInt(phonenumber.replace(" ",""))
    let query = `insert into waitlist(firstname, lastname, email, phonenumber, password) values("${firstname}", "${lastname}", "${email}", ${phonenumber},"${password}")`; 

    db.query(query, (err) => {
        if(err){
            res.send({"message":"Insert Failed", "status":false});
            res.redirect("/waitlist-failed") 
            console.log(err.sqlMessage);   
            console.log("Data Upload Failed!"); 
            return 
        }
        // res.send({"message":"Data Upload Successful", "status":true}) 
        res.redirect(client_url+"/waitlist-success"); 

    }); 


})  


const PORT = 5000; 
app.listen(PORT, () => {
    console.log("[SERVER STARTED] http://localhost:"+PORT)  
}) 