import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Login() {
    const [Username, setUsername] = useState()
    const [Password, setPassword] = useState()

    const navigate = useNavigate()

    const loginAdmin = (e) =>{
        e.preventDefault()

        axios.post("http://localhost:3000/create/login",{
            "Username": Username,
            "Password": Password
        }).then((response) =>{
            if(response.data.error){
                alert("Incorrect password or username")
            }
            else{
                alert("successfully login")
                // localStorage.setItem("hh","vvv")
         localStorage.setItem("Admin",JSON.stringify(response.data));
            // console.log(response.data);
                navigate("/Dashboard")
            }
        })
    }

    return <div>
        <h1>Login Page</h1>

        <div className=" flex justify-center mt-10">
            <form className=" w-[400px] p-5 rounded shadow-lg h-[300px]  bg-white">
                <input  value={Username} onChange={(e) => setUsername(e.target.value)} className="border-2 border-gray-400  w-[340px] " type="text"  placeholder="Enter Gmail"/>
                <br />
                <input  value={Password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Enter Password"/>
                <br />
                <button onClick={loginAdmin}>Login</button>
            </form>
        </div>
    </div>
}

export default Login