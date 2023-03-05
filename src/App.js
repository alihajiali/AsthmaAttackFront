import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Medicin from "./scenes/inputmedicin";
import Geography from "./scenes/geography";
import {  CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Profile from "./scenes/profile/profile.jsx";
import HealthInfo from "./scenes/healthinfo/index.jsx";
import EditHealthInfo from "./scenes/edithealthinfo/index.jsx";
import Notfound from "./scenes/not-found/notfound.jsx";
import Signup from "./layout/common/login/signup";
import Login from "./layout/common/login/signin";
import {ToastContainer} from "react-toastify"
import { useEffect } from "react";
// import { decodeToken } from "./utils/decodeToken";
import MainLayout from "./layout/mainlayout";
import  Home  from "./layout/Home";
import  Aboutus  from "./layout/aboutus/aboutus.jsx";
import  Contactus  from "./layout/contactus/contactus.jsx";
import PersonalLayout from "./layout/personalLayout";
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [theme, colorMode] = useMode();


  
  useEffect(()=>{
  

    // const token = localStorage.getItem("token")
    // const token = "ygyguyg"
    // if(token) {
    //   const decodeToken = decodeToken(token)
      
    // }
   },[])
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        <ToastContainer style={{ fontFamily: 'BYekan' }}/>
                
                  <Routes>
                    <Route path="/" element={<MainLayout />} >
                        <Route index element={<Home />}/>
                        <Route path="aboutus" element={<Aboutus />}/>
                        <Route path="contactus" element={<Contactus />}/>
                        <Route path="*" element={<Notfound />}/>
                    </Route>
                    <Route path="dashboard"  element={<PersonalLayout />} >
                        <Route index element={<Dashboard />} />
                        <Route path="team" element={<Team />} />
                        <Route path="contacts" element={<Contacts />} />
                        <Route path="invoices" element={<Invoices />} />
                        <Route path="form" element={<Form />} />
                        <Route path="bar" element={<Bar />} />
                        <Route path="pie" element={<Pie />} />
                        <Route path="line" element={<Line />} />
                        <Route path="faq" element={<FAQ />} />
                        <Route path="calendar" element={<Calendar />} />
                        <Route path="geography" element={<Geography />} /> 
                        <Route path="setingprofile" element={<Profile />} /> 
                        <Route path="healthinfo" element={<HealthInfo />} /> 
                        <Route path="edithealthinfo" element={<EditHealthInfo />} /> 
                        <Route path="medicin" element={<Medicin />} /> 
                        <Route path="*" element={<Notfound />}/>
                     </Route>
                      <Route path="signup" element={<Signup />}/>
                      <Route path="login" element={<Login />}/>
                      <Route path="*" element={<Notfound />}/>
                  </Routes>
         
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
