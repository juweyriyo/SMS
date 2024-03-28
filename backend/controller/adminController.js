const adminModel = require("../model/adminModel")

//regester
const registerAdmin = (req, res) =>{
    const newAdmin = adminModel(req.body)
    const saveAdmin = newAdmin.save()

    if(saveAdmin){
        res.send(saveAdmin)
    }
}

const loginAdmin = async (req,res) =>{
    const adminData = await adminModel.findOne({
        Username: req.body.Username,
        Password: req.body.Password
    })
    if(adminData){
        res.send(adminData)
    }
    else{
        res.send({
            error: "Incorrect password or username"
        })
    }
}

module.exports ={
    registerAdmin,
    loginAdmin
}