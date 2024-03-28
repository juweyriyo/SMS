const adminController = require("../controller/adminController")

const express = require("express")

const route = express.Router()

route.post("/create/Admin", adminController.registerAdmin)
route.post("/create/login", adminController.loginAdmin)

module.exports = route

