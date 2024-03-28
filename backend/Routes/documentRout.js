const express = require("express")
const DocumentController = require("../controller/documentController")
const router = express.Router()
const { regesterDocument, upload} = require("../controller/documentController")
router.post("/teacher/file",upload.single("file"),regesterDocument)
router.get("/alldocument", DocumentController.getAllDocuments)

module.exports = router