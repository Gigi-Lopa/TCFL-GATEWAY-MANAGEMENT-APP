const express = require("express")
const session = require("express-session")
const body_parser = require("body-parser")
const path = require("path")
const EventEmitter = require("events")
const sqlite = require("sqlite3")
const {Console} =  require("console")
const fs = require("fs")

let db_ =  new sqlite.Database("./database/tcfl_manage.sqlite3", sqlite.OPEN_READWRITE, (err)=>{
    err ? console.log(err)  : console.log("Connection Successful")
    

})
let myLogger = new Console({
    stdout  : fs.createWriteStream("RegisteredStudents.txt"),
    stderr : fs.createWriteStream("errStudents.txt")
})


let cors = require("cors")
let app = express()
let events = new EventEmitter()
events.removeAllListeners()


app.use(express.static('static')); 
app.use("/css",express.static(__dirname+"static/css"))
app.use("/js",express.static(__dirname+"static/js"))
app.use("/img",express.static(__dirname+"static/img"))
app.use("/fonts",express.static(__dirname+"static/fonts"))
app.use("/vendor", express.static(__dirname+"static/vendor"))
app.use(session({
    secret: "XwPp9xazJ0ku5CZnlmgAx2Dld8SHkAeT",
    resave: false,
    saveUninitialized:false
}))
const urlenCoded = body_parser.urlencoded({extended: true})
app.use(body_parser.json());
app.use(cors({
    origin:"*",
    
}))
app.set("views", path.join(__dirname, "pages"));
app.set('view engine', 'ejs');
app.set('view options',{layout :false});

const USERNAME = "gilbert"
const PASSWORD =  "th3"

/* GET REQUEST*/
app.get("/",(req, res)=>{
    res.render("index")
})
app.get("/create/acc",(req, res)=>{
    res.render("sign-up")
})
app.get("/write/log/file/:id", (req, res)=>{
 
    myLogger.log(Date() + ".> STUDENT NUMBER .> " + req.params.id + " REGISTERD IN EXAM")
    res.json({
        logged: true
    })
})
app.get("/main/page", (req, res)=>{
    db_.all("SELECT * FROM students", (err, row)=>{
        if(!err){
            res.render("home", {
                students : row
            })
        }
    })
})
app.get("/employee/side/", (req, res)=>{
    db_.all("SELECT * FROM guard_records", (err, row)=>{
        if(!err){
            res.render("employees", {
                students : row
            })
        }
    })
})
app.get("/get/student/infor/:id", (req, res)=>{
    
    let sql = `SELECT * FROM students WHERE student_id = ${parseInt(req.params.id)}`
    db_.all(sql, (err, row)=>{
       
        if(!err && row.length != 0){
            res.json({
                scan_com : false,
                row :row
            })
        }
        else{
            res.json({
                scan_com : true
            })
        }
    })
})

/* POST METHODS */
app.post("/auth/company", urlenCoded, (req, res)=>{
    let username =  req.body.accessLabel;
    let password = req.body.password;

    let sql= `SELECT * FROM main_admin WHERE username = "${username}" AND password = "${password}"; `
    db_.all(sql, (err, row)=>{
        if(!err){
            if (row.length <= 0){
                res.json({
                    status:false
                })
            }
            else{
                res.json({
                    status:true,
                    id: row[0].id 
                })
             }
         }  
         else{
             console.log(err)
         }                
    })
})

app.post("/update/student", urlenCoded, (req, res)=>{
    let sql =  `UPDATE students SET name = "${req.body.data.name}",
    tuition_fee = "${req.body.data.tuition}",
    pendings = "${req.body.data.pendings}",
    grant_access = "${req.body.data.access}"
    
    WHERE student_id = ${req.body.data.std_id}
`
    db_.run(sql, err=>{
        if(!err){
            res.json({
                update_done: true
            })
        }
        else{
            res.json({
                update_done: false
            })
        }
    })
})
app.post("/create/student", urlenCoded, (req, res)=>{
    let sql =  `INSERT INTO students(name,tuition_fee, pendings, grant_access) VALUES ("${req.body.data.name}","${req.body.data.tuition}","${req.body.data.pendings}","${req.body.data.access}")`
    console.log(sql)
    db_.run(sql, err=>{
        if(!err){
            res.json({
                update_done: true
            })
        }
        else{
            res.json({
                update_done: false
            })
        }
    })
})
app.post("/create/guard", urlenCoded, (req, res)=>{
    let sql =  `INSERT INTO guard_records(name,username,password) VALUES ("${req.body.name}","${req.body.username}","${req.body.password}")`
    db_.run(sql, err=>{
        if(!err){
            res.json({
                creation_done: true
            })
        }
        else{
            res.json({
                creation_done: false
            })
        }
    })
})


app.post("/get/user/details", urlenCoded, (req, res)=>{

    let username = req.body.username;
    let password = req.body.password;
    let sql= `SELECT * FROM guard_records WHERE username = "${username}" AND password = "${password}"; `

    db_.all(sql, (err, rows)=>{
        if(!err){
            if(rows.length > 0){
                res.json({
                    credentials_match : true
                })
            }
            else{
                console.error(false)
                res.json({
                    credentials_match : false
                })
            }
        }
    })
})
app.post("/get/student/infor",urlenCoded ,(req, res)=>{
    console.log("hello")
    let sql =  `SELECT * FROM students WHERE student_id = ${req.body.id}`
    db_.all(sql, (err, row)=>{
        if(!err && row.length > 0){
            res.json({
                infor: row
            })
        }
        else{
            res.json({
                infor : undefined
            })
        }
    })
})

PORT = process.env.PORT || 8080 
app.listen(PORT,()=>{console.log("Listening on port http://127.0.0.1:"+PORT)})
