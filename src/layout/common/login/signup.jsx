import "./signup.css"
import Box from "@mui/material/Box"
import { useSelector , useDispatch } from "react-redux";
import { Link , useNavigate} from "react-router-dom"
import { createNewUser } from "../../../actions/users";

import {Formik } from "formik"
import * as Yup from "yup"
import { setUser } from "../../../actions/user";
function Signup() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
   
  return (
    <Box className="contlogin" sx={{direction:"rtl"}}>
      <div className="MainContainer">
      <h2 className="WelcomeText">خوش آمدین</h2>
      
      <Formik
       initialValues={{ username: '', password: '', email: '',phone:'' }}
       validationSchema={Yup.object({
         username: Yup.string("نام کاربری را درست وارد کنید").required('وارد کردن نام کاربری الزامیست'),
         email: Yup.string().required('وارد کردن ایمیل الزامیست').email("لطفا ایمیل معتبر وارد کنید"),
         password: Yup.string().min(8 ,"پسورد حداقل 8 کاراکتر باشد").required('وارد کردن پسورد الزامیست'),
         phone:Yup.string().required("وارد کردن تلفن همراه الزامیست").matches("09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}","لطفا شماره تلفن معتبر وارد کنید")
       })}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(async () => {
          const res = await dispatch(createNewUser(values.username , values.password , values.email , values.phone))
          if(res.status===201){
            const user = {username:values.username , password:values.password , email:values.email , phone:values.phone}
            dispatch(setUser(user))
            localStorage.setItem("username" , values.username)
            navigate("/dashboard")
            
           }
          setSubmitting(false);
         }, 400);
       }}
     >
       {formik => (
         <form onSubmit={formik.handleSubmit}>
           <input
             id="username"
             type="text"
             placeholder="نام کاربری"
             {...formik.getFieldProps('username')}
           />
           {formik.touched.username && formik.errors.username ? (
             <div className="error-msg">{formik.errors.username}</div>
           ) : <div className="error-msg"></div>}
 
           <input
             id="email"
             type="email"
             placeholder="ایمیل"
             {...formik.getFieldProps('email')}
           />
           {formik.touched.email && formik.errors.email ? (
             <div className="error-msg">{formik.errors.email}</div>
           ) : <div className="error-msg"></div>}
 
           <input id="password" type="password" {...formik.getFieldProps('password')}  placeholder="پسورد"/>
           {formik.touched.password && formik.errors.password ? (
             <div className="error-msg">{formik.errors.password}</div>
           ) : <div className="error-msg"></div>}

           <input id="phone" type="phone" {...formik.getFieldProps('phone')} placeholder="تلفن همراه"/>
           {formik.touched.phone && formik.errors.phone ? (
             <div className="error-msg">{formik.errors.phone}</div>
           ) : <div className="error-msg"></div>}
           <button type="submit">ثبت اطلاعات</button>
         </form>
       )}
     </Formik>
      <Box sx={{direction:"rtl", color:"rgba(23, 98, 130,0.8)"}}>آیا از قبل اکانت دارید؟ <Link to="/login"> از این جا وارد شوید </Link></Box>
      <Box sx={{direction:"rtl", color:"rgba(23, 98, 130,0.5)"}}><Link to="/">برگشت به صفحه اصلی</Link></Box>

    </div>
    </Box>
  );
}


export default Signup;
