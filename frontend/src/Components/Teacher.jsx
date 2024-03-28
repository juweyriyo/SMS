import { Link } from "react-router-dom"
import RegesterTeachar from "./RegesterTeachar"
import { useEffect, useState } from "react"
import axios from "axios"

function Teacher(){
    const [teacher, setTeacher] = useState([])

    const handleReadData = () =>{
        axios.get("http://localhost:3000/allteachers").then((response) =>{
            setTeacher(response.data)
        }).catch((error)=>{
            console.log(error)
        })

    }

    const handleSearchTeacher = (id) =>{
        const key = id.target.value
        if(key){
        axios.get(`http://localhost:3000/search/teacher/${key}`).then((response) =>{
            setTeacher(response.data)
        }).catch((error) =>{
            console.log(error)
        })
    }
    else{
        handleReadData()
    }
    }
    useEffect(()=>{
        handleReadData()
    },[])
    return <div>
        <div className=" py-5 flex justify-between">
            <Link to="/RegesterTeachar" className=" bg-blue-500 text-white px-5 py-3 rounded mb-3">Add teacher</Link >
            <Link to="/UdateTeachar" className=" bg-blue-500 text-white px-5 py-3 rounded mb-3">Update teacher</Link >
            <form className=" mr-5 ">
                <input onChange={handleSearchTeacher} className=" w-[350px] h-[50px] pl-10 border-2 border-black rounded" type="text" placeholder="Searching teacher" />
            </form>
        </div>
        <table className="  w-full">
            <thead className=" bg-slate-500">
                <tr className=" text-1xl text-white ">
                    <th className=" p-3">ID</th>
                    <th>Name</th>
                    <th>Addres</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Salary</th>
                    <th>Data</th>
                </tr>
            </thead>

            <tbody>
                {
                    teacher.length> 0 ? teacher.map((data) =>{
                        return <tr className=" text-center">
                    <td>{data.Id}</td>
                    <td>{data.Name}</td>
                    <td>{data.Addres}</td>
                    <td>{data.email}</td>
                    <td>{data.Gender}</td>
                    <td>{data.Salary}</td>
                    </tr>
                })
                :
                <p>There is no data</p>
                }
            </tbody>
        </table>
        
    </div>
}
export default Teacher