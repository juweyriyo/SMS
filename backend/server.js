const cors = require("cors")
const express = require("express")
const mongoose = require("mongoose")
const app = express ()
app.use(express.json())
app.use(cors())
//conect data base
mongoose.connect("mongodb://localhost:27017/schoolSystem2").then(()=>{
    console.log("Database has been connect successfully")
}).catch((error)=> console.log(error))

// import router
const teacherRoute = require("./Routes/TeacherRoute")
const studentRoute = require("./Routes/studentRoute")
const adminRoure = require("./Routes/adminRoute")
const documentRout = require("./Routes/documentRout")
app.use(studentRoute)
app.use(teacherRoute)
app.use(adminRoure)
app.use(documentRout)

app.use("/alldocts", express.static("documents"))


//port number web
app.listen(3000, () =>{
    console.log("server is runing");
})