import axios from "axios"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom"
function RegesterTeachar(){
    const [Id, setId] = useState()
    const [Name, setName] = useState()
    const [Addres, setAddres] = useState()
    const [Email, setEmail] = useState()
    const [Gender, setGender] = useState()
    const [Salary, setSalary] = useState()

    //page ki hore kuso celi
    const navigate = useNavigate()

    //register
    const handleRegisterTeacher = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/create/teacher", {
            "Id":Id,
            "Name": Name,
            "Addres": Addres,
            "email": Email,
            "Gender": Gender,
            "Salary": Salary
        }).then(() => {
            toast("Student has been registered successfully",{
                position: "top-right",
                aoutoClose: 5000,
                hideProgressBar: false
            }) 
            // navigate("/")
        }).catch((error) => console.log(error))
    }



    return <div>
    <h1>Regester Teacher</h1>
    <form className=" text-center pt-20">
    <input value={Id} onChange={(e) => setId(e.target.value)} className=" w-[350px] h-[50px] pl-10 border-2 m-3 border-gray-300 rounded" type="text" placeholder="Enter Id teacher" />
    <input value={Name} onChange={(e) => setName(e.target.value)} className=" w-[350px] h-[50px] pl-10 border-2  m-3 border-gray-300 rounded" type="text" placeholder="Enter Name teacher" />
    <br />
    <input value={Addres} onChange={(e) => setAddres(e.target.value)} className=" w-[350px] h-[50px] pl-10 border-2  m-3 border-gray-300 rounded" type="text" placeholder="Enter Addres teacher" />
    <input value={Email} onChange={(e) => setEmail(e.target.value)} className=" w-[350px] h-[50px] pl-10 border-2  m-3 border-gray-300 rounded" type="text" placeholder="Enter Email teacher" />
    <br />
    <input value={Gender} onChange={(e) => setGender(e.target.value)} className=" w-[350px] h-[50px] pl-10 border-2  m-3 border-gray-300 rounded" type="text" placeholder="Enter Gender teacher" />
    <input value={Salary} onChange={(e) => setSalary(e.target.value)} className=" w-[350px] h-[50px] pl-10 border-2  m-3 border-gray-300 rounded" type="text" placeholder="Enter Salary teacher" />
    <br />
    <button onClick={handleRegisterTeacher} className=" bg-blue-500 px-16 text-white rounded ml-[730px] mt-20 py-2 text-3xl">Save</button>
    </form>
    < ToastContainer />
    </div>

}
export default RegesterTeachar