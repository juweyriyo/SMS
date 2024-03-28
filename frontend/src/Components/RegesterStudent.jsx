import axios from "axios"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom"
function RegesterStudent(){
    const [Id, setId] = useState()
    const [Name, setName] = useState()
    const [Addres, setAddres] = useState()
    const [Gender, setGender] = useState()
    const [Contact, setContact] = useState()
    const [Class, setClass] = useState()

    //page ki hore kuso celi
    const navigate = useNavigate()

    //register
    const handleRegisterStudent = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/create/student", {
            "Id":Id,
            "Name": Name,
            "Addres": Addres,
            "Gender": Gender,
            "Contact": Contact,
            "Class": Class
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
    <h1>Regester Student</h1>
    <form className=" text-center pt-20">
    <input value={Id} onChange={(e) => setId(e.target.value)} className=" w-[350px] h-[50px] pl-10 border-2 m-3 border-gray-300 rounded" type="text" placeholder="Enter Student Id " />
    <input value={Name} onChange={(e) => setName(e.target.value)} className=" w-[350px] h-[50px] pl-10 border-2  m-3 border-gray-300 rounded" type="text" placeholder="Enter Student Name " />
    <br />
    <input value={Addres} onChange={(e) => setAddres(e.target.value)} className=" w-[350px] h-[50px] pl-10 border-2  m-3 border-gray-300 rounded" type="text" placeholder="Enter Student Addres " />
    <input value={Gender} onChange={(e) => setGender(e.target.value)} className=" w-[350px] h-[50px] pl-10 border-2  m-3 border-gray-300 rounded" type="text" placeholder="Enter Student Gender " />
    <br />
    <input value={Contact} onChange={(e) => setContact(e.target.value)} className=" w-[350px] h-[50px] pl-10 border-2  m-3 border-gray-300 rounded" type="text" placeholder="Enter Student Contact " />
    <input value={Class} onChange={(e) => setClass(e.target.value)} className=" w-[350px] h-[50px] pl-10 border-2  m-3 border-gray-300 rounded" type="text" placeholder="Enter Student Class " />
    <br />
    <button onClick={handleRegisterStudent} className=" bg-blue-500 px-16 text-white rounded ml-[730px] mt-20 py-2 text-3xl">Save</button>
    </form>
    < ToastContainer />
    </div>

}
export default RegesterStudent