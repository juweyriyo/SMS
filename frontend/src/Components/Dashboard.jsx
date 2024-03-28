import { useState, useEffect } from "react"
import axios from "axios"


function Dashboard(){
    const [totalTeacher, setTotalTeacher] = useState([])

    const [totalsALARY, setTotalsALARY] = useState([])

    const getTotalTeachers = () =>{
        axios.get("http://localhost:3000/teacher/total").then((response) =>{
            setTotalTeacher(response.data.total)
        }).catch((error) =>console.log(error))
    }

    //total Student
    const [totalStudent, setTotalStudent] = useState([])

    const getTotalStudent = () =>{
        axios.get("http://localhost:3000/student/total").then((response) =>{
            setTotalStudent(response.data.total)
        }).catch((error) =>console.log(error))
    }

    const getTotalSalary = () =>{
        axios.get("http://localhost:3000/Salary/total").then((res) =>{
            setTotalsALARY(res.data[0].salary)
        }).catch((error) =>console.log(error))
    }

    useEffect(() =>{
        getTotalTeachers()
        getTotalStudent()
        getTotalSalary()
    },[])
    return <div>
        <div className=" flex justify-center gap-10 pt-10">
        <div className="w-[300px] h-[200px] border-b-4 border-black bg-zinc-600">
            <i class="fa-solid fa-person-chalkboard mr-10 text-4xl text-white ml-32 mt-5"></i>
             <p className="text-center text-2xl text-white">Total of Teachers</p>
             <h1 className=" text-5xl text-center mt-5 text-white ">{totalTeacher}</h1>
             </div>
        <div className="w-[300px] h-[200px] border-b-4 border-yellow-300 bg-red-700">
        <i class="fa-solid fa-user mr-10 text-4xl text-white ml-32 mt-5"></i>
        <p className="text-center text-2xl text-white">Total of Student</p>
        <h1 className=" text-5xl text-center mt-5 text-white ">{totalStudent}</h1>
        </div>
        <div className="w-[300px] h-[200px] border-b-4 border-red-500 bg-lime-800">
             <i class="fa-solid fa-comments-dollar text-4xl text-white ml-32 mt-5"></i>
             <p className="text-center text-2xl text-white">Total of Salary</p>
             <h1 className=" text-5xl text-center mt-5 text-white ">${totalsALARY}</h1>
        </div>
        </div>
    </div>
}
export default Dashboard