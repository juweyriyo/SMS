import{Route , Routes} from "react-router-dom"
import Dashboard from "./Components/Dashboard"
import Students from "./Components/Students"
import Teacher from "./Components/Teacher"
import RegesterTeachar from "./Components/RegesterTeachar"
import RegesterStudent from "./Components/RegesterStudent"
import Sidenav from "./Components/Sidenav"
import Login from "./Components/Login"
import Document from "./Components/Documents"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import Upload from "./Components/Upload"
import {CssBaseline, ThemeProvider} from "@mui/material"
import { ColorModeContext , useMode } from "./theme"
function App(){

    const isAuth = localStorage.getItem("Admin")

    const navigate = useNavigate()

    const handleRefresh = () =>{
        if(!isAuth){
            navigate("/")
        }
    }

    useEffect(() =>{
        handleRefresh()
    },[])

    const [theme, colorMode] = useMode()

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
    <>
    {
        isAuth ?
        <Sidenav>
        <Routes>
            <Route path="/Dashboard" element={<Dashboard/>} />
            <Route path="/Students" element={<Students/>} />
            <Route path="/Teacher" element={<Teacher/>} />
            <Route path="/Documents" element={< Document/>} />
            <Route path="/RegesterTeachar" element={< RegesterTeachar/>} />
            <Route path="/RegesterStudent" element={< RegesterStudent />} />
            <Route path="/uploadfile" element={< Upload />} />
            <Route path="/" element={<  Login/ >} />
        </Routes>
   </Sidenav>
   :
   <Routes>
        <Route path="/" element={<  Login/ >} />
   </Routes>
    }
    </>
    </ThemeProvider>
    </ColorModeContext.Provider>
    )
}
export default App