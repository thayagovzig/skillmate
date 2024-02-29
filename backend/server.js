const express = require('express'); 
const app = express(); 
const mysql = require('mysql'); 
require("dotenv").config(); 
const bcrypt = require('bcrypt');  
const cors = require('cors'); 

// app.use(cors({origin:true})); 
app.use(express.json()) 
app.use(express.urlencoded({extended:true}));  

const client_url = "https://stage.skillmate.ai";  

const railway_url = `mysql://root:${process.env.MYSQLPASSWORD}@monorail.proxy.rlwy.net:44771/railway`

const dbParams = {
    host:process.env.RAILWAY_HOST,
    user:process.env.RAILWAY_USER,  
    password:process.env.RAILWAY_PASSWORD,  
    database:process.env.RAILWAY_DATABASE, 
    port:process.env.RAILWAY_PORT, 
    // protocol:"TCP railway"
}

// console.log(dbParams);  

// const db = mysql.createConnection(dbParams); 
const db = mysql.createConnection(process.env.MYSQL_URL);   


db.connect(err => {
    if(err){
        console.log("Connection to DB Unsuccessful")
        console.log(err.sqlMessage) ;  
    }else{
        console.log("Database Connected Successfully!") 
    }
}) 

// Manual CORS BLocking 

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/", (req,res) => {
    res.json({"message":"Hello World"}) 
}); 

// app.get("/waitlist", (req,res) => {
//     let query = "select * from waitlist";  
//     db.query(query, (err,data) => {
//         if(err){
//             console.log(err.sqlMessage); 
//             res.send({"status":false, "message":"Retreival Failed"})   
//         }
//         console.log(data); 
//         res.send(data) 
//     })
// })  


app.post("/waitlist", async (req,res) => {
    console.log("Body:") 
    console.log(req.body);  
    // console.log("JSON: ") 
    // console.log(req.json); 
    let {firstname, lastname, email, phonenumber, password} = req.body;
    try{
        let salt = await bcrypt.genSalt(); 
        let hashed_pw = await bcrypt.hash(password,salt)
        phonenumber = parseInt(phonenumber.replace(" ",""))
        let query = `insert into waitlist(firstname, lastname, email, phonenumber, password) values("${firstname}", "${lastname}", "${email}", ${phonenumber},"${hashed_pw}")`; 

        db.query(query, async (err) => {
            if(err){
                // res.send({"message":"Insert Failed", "status":false});
                console.log(err.sqlMessage);   
                console.log("Data Upload Failed!"); 
                // res.redirect(client_url+"/failed") 
                res.send({"ok":false, "message":"Failed", ...err})     
            }else{
                // res.send({"message":"Data Upload Successful", "status":true}) 
                // res.redirect(client_url+"/success"); 
                res.send({"ok":true, "message":"Success"})  
            }

        }); 

    }catch(e){
        console.log(e.message); 
        console.log("Hash Failed");  
        // res.redirect(client_url+"/failed");  
        res.send({"ok":false, "message":"Failed", ...e})     
    }  

})  


const PORT = process.env.PORT || 5000;  
app.listen(PORT, "0.0.0.0", () => {
    console.log("[SERVER STARTED] http://localhost:"+PORT)  
}) 