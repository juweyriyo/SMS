
const express = require("express")
const teacherController = require("../controller/teacherController")

const router = express.Router()

router.post("/create/teacher", teacherController.creteTeacher)
router.get("/allteachers", teacherController.getAllTeachers)
router.get("/search/teacher/:key", teacherController.searchTeacher)
router.get("/teacher/total", teacherController.getTotalTeachers)
router.get("/Salary/total", teacherController.getTotalSalary)
module.exports = router
