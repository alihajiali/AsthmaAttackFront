import "./signup.css"
import Box from "@mui/material/Box"
import { useSelector , useDispatch } from "react-redux";
import {useNavigate , Link} from "react-router-dom"
import {Formik } from "formik"
import * as Yup from "yup"
import { loginUser } from "../../../services/userService";
import { setUser } from "../../../actions/user";
import { useEffect, useState } from "react";
import axios from 'axios';
// import apigetlogincode from "../../../services/httpServices"
function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  


  const SendLogin = () => {
    axios.post("http://185.142.156.246:8081/login", {
      username: username,
      password: password
    })
    .then((response) => {
      localStorage.setItem("token", response.data.access);
      localStorage.setItem("user_id", response.data.user_id);
      // localStorage.setItem("user_type", userType);
      UserData(username, response.data.access)
      localStorage.setItem("username", username);
    });
  }

  const UserData = (username, token) => {
    let config = {
      headers: {
        "Authorization" : `Bearer ${token}`
      }
    }

    axios.get(`http://185.142.156.246:8081/user/?username=${username}`, config)
    .then((response) => {
      console.log(response.data?.users[0]?._source?.type)
      if (response.data?.users[0]?._source?.type === "bimar"){
        localStorage.setItem("user_type", "بیمار")
      }else{
        localStorage.setItem("user_type", "پزشک");
      }
    });
  }


 
  return (
    <Box className="contlogin" sx={{direction:"rtl"}}>
      <div className="MainContainer signin">
      <h2 className="WelcomeText">فرم ورود</h2>
      
      <Formik
       initialValues={{ username: '', password: '' ,select:''}}
       validationSchema={Yup.object({
         username: Yup.string("نام کاربری را درست وارد کنید").required('وارد کردن نام کاربری الزامیست'),
         password: Yup.string().min(8 ,"پسورد حداقل 8 کاراکتر باشد").required('وارد کردن پسورد الزامیست'),
         select: Yup.string().required("لطفا حتما نوع ورود خود را انتخاب کنید ")
        })}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(async() => {
           const response =await loginUser(values.username , values.password)
           
           if(response.status ===200){
            // const user = users.find(item => item);
            const user = {username:values.username , password:values.password , email:"" , phone:""}
            dispatch(setUser(user))
            localStorage.setItem("username",values.username)
            navigate("/dashboard")
           }
           setSubmitting(false);
         }, 40);
       }}
     >
       {formik => (
         <form onSubmit={formik.handleSubmit}>
           <input id="username" type="text" placeholder="نام کاربری" value={username} onChange={(e)=>setUsername(e.target.value)}/>
           {/* {...formik.getFieldProps('username')} */}
           {formik.touched.username && formik.errors.username ? (
             <div className="error-msg">{formik.errors.username}</div>
           ) : <div className="error-msg"></div>}
           
           <input id="password" type="password"  placeholder="پسورد"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
           {/*  {...formik.getFieldProps('password')} */}
           {formik.touched.password && formik.errors.password ? (
             <div className="error-msg">{formik.errors.password}</div>
           ) : <div className="error-msg"></div>}

            {/* <div className="level" >نوع ورود خود را انتخاب کنید:</div>
            <div className="wrapper">
            <input type="radio" name="select" id="option-1" value="سلامت جو" onChange={(e)=>setUserType(e.target.value)}  />
            formik.values.select = e.target.value
            <input type="radio" name="select" id="option-2"  value="پزشک" onChange={(e)=>setUserType(e.target.value)}/>
            formik.values.select = e.target.value
            <label htmlFor="option-1" className="option option-1">
                <div className="dot"></div>
                <span>سلامت جو</span>
                </label>
            <label htmlFor="option-2" className="option option-2">
                <div className="dot"></div>
                <span>پزشک</span>
            </label>
            </div>
            {formik.touched.select && formik.errors.select ? (
             <div className="error-msg">{formik.errors.select}</div>
           ) : <div className="error-msg"></div>} */}
                
            <Link to="/"> 
              <button type="submit" style={{width:"200%"}} onClick={()=>{SendLogin()}}>ورود</button>
            </Link>
         </form>
       )}
     </Formik>
      <Box sx={{direction:"rtl", color:"rgba(23, 98, 130,0.8)"}}>آیا از قبل اکانت ندارید؟ <Link to="/signup"> از این جا اکانت بسازید </Link></Box>
      <Box sx={{direction:"rtl", color:"rgba(23, 98, 130,0.5)"}}><Link to="/">برگشت به صفحه اصلی</Link></Box>
    </div>
    </Box>
  );
}


export default Login;
