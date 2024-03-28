
const teacherModel = require("../model/teacherModel")

//create methode
const creteTeacher = async (req, res) =>{
    const newData = teacherModel(req.body)
    const saveData = await newData.save()
    if(saveData)
    res.send(saveData)
}

//read method
const getAllTeachers = async (req, res) =>{

    const perPage = req.query.page || 0
    const numberOfTeacher = 5
    const allTeachers = await teacherModel.find()
    .skip(numberOfTeacher * perPage)
    .limit(numberOfTeacher)
    if(allTeachers){
        res.send(allTeachers)
    }
}



//Searching teacher API starts
const searchTeacher = async (req,res) =>{
    const searchData = await teacherModel.find({
        $or:[
        {Name: {$regex: req.params.key} },
        ]
    })
    if(searchData){
        res.send(searchData)
    }
}

//total object method
const getTotalTeachers = async (req,res) =>{
    const total = await teacherModel.find().countDocuments()
    if(total){
        res.send({total})
    }
}

//Getting total Salary  of all teachers

const getTotalSalary  = async (req ,res) =>{
    const totalSalary =  await teacherModel.aggregate([
        {
            $group: {_id: null, salary: {$sum: "$Salary"} }
        }
    ])

    if(totalSalary){
        res.send(totalSalary)
    }
}

module.exports = {
    creteTeacher,
    searchTeacher,
    getAllTeachers,
    getTotalTeachers,
    getTotalSalary
}

