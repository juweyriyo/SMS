
const studendenModel = require("../model/studendenModel")

//create methode
const creteStudent = async (req,res) =>{
    const newData = studendenModel(req.body)
    const saveData = await newData.save()
    if(saveData)
    res.send(saveData)
}

//read method
const getAllStudents = async (req, res) =>{
    const allStudent = await studendenModel.find()
    if(allStudent){
        res.send(allStudent)
    }
}

//Searching teacher API starts
const searchStudent = async (req,res) =>{
    const searchData = await studendenModel.find({
        $or:[
        {Name: {$regex: req.params.key} },
        ]
    })
    if(searchData){
        res.send(searchData)
    }
}

//total teachaes object method
const getTotalStudent = async (req,res) =>{
    const total = await studendenModel.find().countDocuments()
    if(total){
        res.send({total})
    }
}

//Getting total Salary  of all teachers

const getTotalSalary  = (req ,res) =>{
    const totalSalary = tea
}

module.exports = {
    creteStudent,
    searchStudent,
    getAllStudents,
    getTotalStudent
}

