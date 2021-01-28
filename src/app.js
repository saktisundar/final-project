const express = require("express");
const path = require("path")
require("./db/conn");
const User = require("./models/usermessage");
const Users = require("./models/usermessage1");
const hbs = require("hbs");
const { registerPartials } = require("hbs")


const app = express()
const port = process.env.port || 3000

//setting the path
const staticpath = path.join(__dirname , "../public");
const tamplatepath = path.join(__dirname , "../templates/views");
const partialspath = path.join(__dirname , "../templates/partials");

//middleware
app.use('/css' , express.static(path.join(__dirname , "../node_modules/bootstrap/dist/css")))
app.use('/js' , express.static(path.join(__dirname , "../node_modules/bootstrap/dist/js")))
app.use('/jq' , express.static(path.join(__dirname , "../node_modules/jquery/dist")))

app.use(express.urlencoded({extended : false}))
app.use(express.static(staticpath))
app.set("view engine" , "hbs")
app.set("views" , tamplatepath)
hbs.registerPartials(partialspath)

//routing
//app.get(path , callback)
app.get("/" , (req , res) => {
    res.render("index1");
})

app.get("/about_us" , (req , res) => {
    res.render("About Us");
})

app.get("/admission" , (req , res) => {
    res.render("Admission");
})

app.get("/attendance" , (req , res) => {
    res.render("Attendance");
})

app.get("/environmental" , (req , res) => {
    res.render("Environmental");
})

app.get("/fee" , (req , res) => {
    res.render("Fee");
})

app.get("/contact_us" , (req , res) => {
    res.render("contact_us");
})

app.get("/contact" , (req , res) => {
    res.render("Good_Earth");
})

app.get("/health" , (req , res) => {
    res.render("Health");
})

app.get("/online_class" , (req , res) => {
    res.render("Online");
})

app.get("/parents" , (req , res) => {
    res.render("PARENTS");
})

app.get("/students-g" , (req , res) => {
    res.render("STUDENTS-G");
})

app.get("/students" , (req , res) => {
    res.render("Students");
})

app.get("/teachers" , (req , res) => {
    res.render("Teachers");
})

app.get("/time-table" , (req , res) => {
    res.render("Time Table");
})

app.get("/timings" , (req , res) => {
    res.render("Timings");
})

app.get("/signin" , (req , res) => {
    res.render("index");
})

app.post("/contact" , async(req , res) => {
    try {
        //res.send(req.body);
        const userData = new User(req.body)
        await userData.save()
        res.status(201).render("Good_Earth");
    } catch (error) {
        res.status(500).send(error); 
    }
})


//server create
app.listen(port , () => {
    console.log(`Server is running at port no ${port}`);
})