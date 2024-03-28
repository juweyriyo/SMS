

const express = require("express")
const studentController = require("../controller/studentController")

const router = express.Router()

router.post("/create/student", studentController.creteStudent)
router.get("/allstudents", studentController.getAllStudents)
router.get("/search/student/:key", studentController.searchStudent)
router.get("/student/total", studentController.getTotalStudent)

module.exports = router
