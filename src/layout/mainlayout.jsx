import Home from "./Home";
import Login from "./common/login/signup";
import Box from "@mui/material/Box"
import AppBar from "./tabbar/muitabbar.jsx"
import { Outlet } from "react-router-dom";
const MainLayout = ()=>{
    return(
        <>
            <Box sx={{width:1,height:"100vh", overflow:"auto"}}>
                <AppBar />
                <Outlet />
                
            </Box>
        </>
    )
}
export default MainLayout;