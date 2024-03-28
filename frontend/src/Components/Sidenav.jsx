import {Link} from "react-router-dom"
import { useState } from "react"
import Topbar from "./Topbar"



function Sidenav({children}){

    const [isOpen, setIsopen] = useState(false)

    const handleIsopen = ()=>{
        setIsopen(true)
    }

    const handleIsclose = ()=>{
        setIsopen(false)
    }

        const logout = () =>{
            localStorage.clear()
        }

    return <div>
        <Topbar/>
    <div style={{width: isOpen == true ? "100px" : ""}} className=" bg-slate-900 h-screen w-[20%]  text-white fixed">
    <i style={{display: isOpen == true ? "none" : "flex"}} onClick={handleIsopen} class="fa-solid fa-x text-4xl absolute right-2 "></i>
    <i style={{display: isOpen == true ? "block" : "none "}} onClick={handleIsclose} class="fa-solid fa-bars text-4xl absolute right-4 "></i>
 
        <div className=" text-3xl flex flex-col space-y-14 pl-10 pt-10 ">
            {isOpen== true ?<i class="fa-brands fa-microsoft"></i> :<Link to="/Dashboard"><i class="fa-brands fa-microsoft mr-10"></i>Dashboard </Link>}
            { isOpen == true ? <i class="fa-solid fa-user"></i> : <Link to="/Students"> <i class="fa-solid fa-user mr-10"></i> Students </Link>}
            { isOpen == true ? <i class="fa-solid fa-person-chalkboard"></i>: <Link to="/Teacher"><i class="fa-solid fa-person-chalkboard mr-10"></i>Teacher</Link>}
            { isOpen == true ? <i class="fa-solid fa-file"></i>: <Link to="/Documents"><i class="fa-solid fa-file mr-10"></i>Documents</Link>}
            { isOpen == true ? <i class="fa-solid fa-right-from-bracket"></i> : <Link to="/" onClick={logout}><i class="fa-solid fa-right-from-bracket mr-10"></i>Logout </Link>}
        </div>
        </div>
        <div className={` ${isOpen == true  ? "ml-[120px]" : " ml-[21%]"} transition-all duration-500`}>
            {children}
        </div>
    </div>
}
export default Sidenav