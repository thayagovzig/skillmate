const express = require('express'); 
const app = express(); 
// const mysql = require('mysql2/promise');   
const { createPool } = require('mysql2/promise');   
require("dotenv").config(); 
// const bcrypt = require('bcrypt');  
const cors = require('cors'); 

// app.use(cors({origin:true})); 
app.use(express.json()) 
app.use(express.urlencoded({extended:true}));  

const client_url = "https://stage.skillmate.ai";  

//const railway_url = `mysql://root:${process.env.MYSQLPASSWORD}@monorail.proxy.rlwy.net:44771/railway`

const dbParams = {
    host:process.env.MYSQLHOST,
    user:process.env.MYSQLUSER,  
    password:process.env.MYSQLPASSWORD,  
    database:process.env.MYSQLDATABASE, 
    port:process.env.MYSQLPORT, 
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
    // protocol:"TCP railway"
}

// console.log(dbParams);  

// const db = mysql.createConnection(dbParams); 

// const db = mysql.createConnection(process.env.MYSQL_URL);  

// db.connect(err => {
//     if(err){
//         console.log("Connection to DB Unsuccessful")
//         console.log(err?.sqlMessage) ;  
//     }else{
//         console.log("Database Connected Successfully!") 
//     }
// }) 

const pool = createPool(dbParams) 

async function checkPoolConnection() {
    try {
        const connection = await pool.getConnection();
        await connection.ping();
        console.log("Database connected successfully!");
        connection.release();
    } catch (err) {
        console.error("Error connecting to the database:");
        console.error(err.message);
    }
}

// Check pool connection when the server starts
checkPoolConnection();



// Manual CORS BLocking 

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT");
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
    let {fullname, email, phonenumber, feedback} = req.body; // , password 
    try{
        // let salt = await bcrypt.genSalt(); 
        // let hashed_pw = await bcrypt.hash(password,salt)
        // if(!(fullname && email && phonenumber && feedback)){ 
        //     return 
        // }
        phonenumber = parseInt(phonenumber.replace(" ",""))
        let query = `insert into waitlist(fullname, email, phonenumber, feedback) values(?,?,?,?);`; // "${fullname}", "${email}", ${phonenumber}, "${feedback}"   

        // db.query(query,[fullname, email, phonenumber, feedback] ,async (err) => {
        //     if(err){
        //         // res.send({"message":"Insert Failed", "status":false});
        //         console.log("[ERROR FROM DB QUERY!]")
        //         console.log(err?.sqlMessage); 
        //         console.log(err.message); 
        //         console.log(err)   
        //         console.log("[ERROR MESSAGE ☝🏻]"); 
        //         console.log("Data Upload Failed!"); 
        //         // res.redirect(client_url+"/failed") 
        //         res.send({"ok":false, "message":"Failed", ...err})  
        //         if(err.code == "PROTOCOL_CONNECTION_LOST"){

        //         }   
        //     }else{
        //         // res.send({"message":"Data Upload Successful", "status":true}) 
        //         // res.redirect(client_url+"/success"); 
        //         res.send({"ok":true, "message":"Success"})  
        //     }

        // }); 

        await pool.query(query, [fullname, email, phonenumber, feedback]);
        res.send({ "ok": true, "message": "Success" });

    }catch(e){
        console.log(e.message); 
        console.log("Error Occured while inserting data!");  
        // res.redirect(client_url+"/failed");  
        res.send({"ok":false, "message":"Failed", ...e}) 
           
    }  

})  


const PORT = process.env.PORT || 5000;  
app.listen(PORT, "0.0.0.0", () => {
    console.log("[SERVER STARTED] http://localhost:"+PORT)  
}) 