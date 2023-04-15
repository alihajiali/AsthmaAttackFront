import "./signup.css"
import Box from "@mui/material/Box"
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { createNewUser } from "../../../actions/users";
import { useEffect, useState } from "react";
import { Formik } from "formik"
import * as Yup from "yup"
import { setUser } from "../../../actions/user";
import axios from 'axios';
function Signup() {
  const [userType, setUserType] = useState("سلامت جو");
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [doctorCode, setDoctorCode] = useState("");

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const changeUserType = (type) => {
    setUserType(type)
  }


  const Register = () => {
    axios.post("http://185.142.156.246:8081/user/", {
      full_name: fullName,
      username: username,
      password: password,
      email: email,
      phone_number: phoneNumber,
      type: userType === "سلامت جو" ? "bimar" : "doctor",
      medical_system_number: userType === "سلامت جو" ? "" : doctorCode,
      doctors: userType === "سلامت جو" ? [doctorCode] : []
    })
      .then((response) => {

      });
  }

  return (
    <Box className="contlogin" sx={{ direction: "rtl" }}>
      <div className="MainContainer">
        <h2 className="WelcomeText">خوش آمدین</h2>

        <Formik
          // initialValues={{ username: '', password: '', email: '', phone: '' }}
          // validationSchema={Yup.object({
          //   username: Yup.string("نام کاربری را درست وارد کنید").required('وارد کردن نام کاربری الزامیست'),
          //   email: Yup.string().required('وارد کردن ایمیل الزامیست').email("لطفا ایمیل معتبر وارد کنید"),
          //   password: Yup.string().min(8, "پسورد حداقل 8 کاراکتر باشد").required('وارد کردن پسورد الزامیست'),
          //   phone: Yup.string().required("وارد کردن تلفن همراه الزامیست").matches("09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}", "لطفا شماره تلفن معتبر وارد کنید")
          // })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(async () => {
              const res = await dispatch(createNewUser(values.username, values.password, values.email, values.phone))
              if (res.status === 201) {
                const user = { username: values.username, password: values.password, email: values.email, phone: values.phone }
                dispatch(setUser(user))
                localStorage.setItem("username", values.username)
                navigate("/dashboard")

              }
              setSubmitting(false);
            }, 400);
          }}
        >
          {formik => (
            <form onSubmit={formik.handleSubmit}>

              <input
                id="fullName"
                type="text"
                placeholder="نام و نام خانوادگی"
                value={fullName}
                // {...formik.getFieldProps('username')}
                onChange={(e) => setFullName(e.target.value)}
              />
              {formik.touched.username && formik.errors.username ? (
                <div className="error-msg">{formik.errors.username}</div>
              ) : <div className="error-msg"></div>}


              <input
                id="username"
                type="text"
                placeholder="نام کاربری"
                value={username}
                // {...formik.getFieldProps('username')}
                onChange={(e) => setUsername(e.target.value)}
              />
              {formik.touched.username && formik.errors.username ? (
                <div className="error-msg">{formik.errors.username}</div>
              ) : <div className="error-msg"></div>}

              <input
                id="email"
                type="email"
                placeholder="ایمیل"
                value={email}
                // {...formik.getFieldProps('email')}
                onChange={(e) => setEmail(e.target.value)}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error-msg">{formik.errors.email}</div>
              ) : <div className="error-msg"></div>}

              <input id="password" type="password"
                // {...formik.getFieldProps('password')} 
                value={password} placeholder="پسورد" onChange={(e) => setPassword(e.target.value)} />
              {formik.touched.password && formik.errors.password ? (
                <div className="error-msg">{formik.errors.password}</div>
              ) : <div className="error-msg"></div>}

              <input id="phone" type="phone"
                // {...formik.getFieldProps('phone')} 
                value={phoneNumber} placeholder="تلفن همراه" onChange={(e) => setPhoneNumber(e.target.value)} />
              {formik.touched.phone && formik.errors.phone ? (
                <div className="error-msg">{formik.errors.phone}</div>
              ) : <div className="error-msg"></div>}

              <div className="level" >نوع اکانت خود را انتخاب کنید:</div>
              <div className="wrapper">
                <input type="radio" name="select" id="option-1" value="سلامت جو" onChange={(e) => changeUserType(e.target.value)} />
                {/* formik.values.select = e.target.value */}
                <input type="radio" name="select" id="option-2" value="پزشک" onChange={(e) => changeUserType(e.target.value)} />
                {/* formik.values.select = e.target.value */}
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
              ) : <div className="error-msg"></div>}

              <input id="doctorCode" type="text"
                // {...formik.getFieldProps('phone')} 
                value={doctorCode}
                placeholder={userType === 'سلامت جو' ? 'کد نظام پزشکی پزشک حود را وارد گنید' : 'کد نظام پزشکی خود را وارد کنید'}
                onChange={(e) => setDoctorCode(e.target.value)} />
              {formik.touched.phone && formik.errors.phone ? (
                <div className="error-msg">{formik.errors.phone}</div>
              ) : <div className="error-msg"></div>}
              <Link to="/login"> 
                <button type="submit" style={{width:"200%"}} onClick={() => { Register() }}>ثبت</button>
              </Link>
            </form>
          )}
        </Formik>
        <Box sx={{ direction: "rtl", color: "rgba(23, 98, 130,0.8)" }}>آیا از قبل اکانت دارید؟ <Link to="/login"> از این جا وارد شوید </Link></Box>
        <Box sx={{ direction: "rtl", color: "rgba(23, 98, 130,0.5)" }}><Link to="/">برگشت به صفحه اصلی</Link></Box>

      </div>
    </Box>
  );
}


export default Signup;
