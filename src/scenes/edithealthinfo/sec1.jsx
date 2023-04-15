import { useState, useEffect } from 'react'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Link, useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';
import "./style.css"
import axios from 'axios';
const validationSchema = Yup.object({
  name: Yup.string()
    .max(30, 'نام  نباید بیشتر از 30 کاراکتر باشد')
    .required('نام  الزامی است'),
  age: Yup.number()
    .min(18, ' باید حداقل ۱۸ سال سن داشته باشید')
    .max(100, 'سن  باید کمتر از ۱۰۰ سال باشد')
    .required('سن  الزامی است'),
  nationalCode: Yup.string()
    .matches(/^\d{10}$/, 'کد ملی  باید دقیقا ۱۰ رقم باشد')
    .required('کد ملی  الزامی است'),
  phoneNumber: Yup.string()
    .matches(/^09\d{9}$/, 'شماره تلفن وارد شده صحیح نیست')
    .required('شماره تلفن شما الزامی است'),
  doctorNote: Yup.string(),
  kindIll: Yup.string().required("وارد کردن نوع بیماری الزامی است"),
  email: Yup.string().email("لطفا ایمیل معتبر وارد کنید ").required("وارد کردن ایمیل الزامی است"),
  doctorName: Yup.string()
    .max(30, 'نام پزشک نباید بیشتر از ۳۰ کاراکتر باشد')
    .required('نام پزشک الزامی است'),
});

const PatientForm = () => {

  const [getData, setGetData] = useState(true)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [age, setAge] = useState("")
  const [nationalCode, setNationalCode] = useState("")
  const [kindIll, setKindIll] = useState("")
  const [recomendedOrder, setRecomendedOrder] = useState("")

  const GetData = () => {
    let config = {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    }

    axios.get(`http://185.142.156.246:8081/user/?id=${localStorage.getItem("doctor_filter_bimar")}`, config)
      .then((response) => {
        setName(response.data.users[0]._source.full_name)
        setEmail(response.data.users[0]._source.email)
        setPhoneNumber(response.data.users[0]._source.phone_number)

        setAge(response.data.users[0]._source.medical_record.age)
        setNationalCode(response.data.users[0]._source.medical_record.national_code)
        setKindIll(response.data.users[0]._source.medical_record.sickness)
        setRecomendedOrder(response.data.users[0]._source.medical_record.doctor_recommendations)

      });
  }
  useEffect(() => {
    if (getData) {
      setGetData(false)
      GetData()
    }
  });

  const EditUser = () => {
    console.log(1)
    let config = {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    }
    console.log("_iddddd")
    let _source = {
      full_name: name,
      email: email,
      phone_number: phoneNumber,
      medical_record: {
        age: age,
        national_code: nationalCode,
        sickness: kindIll,
        doctor_recommendations: recomendedOrder
      }
    }
    console.log(_source)

    axios.put(`http://185.142.156.246:8081/user222/?id=${localStorage.getItem("doctor_filter_bimar")}`, {
      _source: 1
    }, config)
      .then((response) => {

      });
  }

  const [formData, setFormData] = useState({
    name: "فاطمه کریمی",
    email: "johndoe@example.com",
    phoneNumber: "09211638463",
    age: "25",
    nationalCode: "9372947295",
    kindIll: "آسم",
    recomendedOrder: "قرص ها هر 8 ساعت خورده شود و شربت روزی یک قاشق غذاخوری"
  });
  const formik = useFormik({
    initialValues: {
      name: formData.name,
      age: formData.age,
      nationalCode: formData.nationalCode,
      email: formData.email,
      kindIll: formData.kindIll,
      phoneNumber: formData.phoneNumber,
      doctorNote: formData.recomendedOrder,
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box sx={{ maxWidth: "70%", margin: 'auto', direction: "rtl" }}>
      <form onSubmit={formik.handleSubmit} className="editform">
        <TextField
          fullWidth
          sx={{ color: "#52d8bd" }}
          id="name"
          name="name"
          label="نام"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          margin="normal"
        />
        <TextField
          fullWidth
          id="age"
          name="age"
          label="سن"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          onBlur={formik.handleBlur}
          error={formik.touched.age && Boolean(formik.errors.age)}
          helperText={formik.touched.age && formik.errors.age}
          margin="normal"
        />
        <TextField
          fullWidth
          id="nationalCode"
          name="nationalCode"
          label="کد ملی"
          value={nationalCode}
          onChange={(e) => setNationalCode(e.target.value)}
          onBlur={formik.handleBlur}
          error={
            formik.touched.nationalCode && Boolean(formik.errors.nationalCode)
          }
          helperText={formik.touched.nationalCode && formik.errors.nationalCode}
          margin="normal"
        />
        <TextField
          fullWidth
          id="phoneNumber"
          name="phoneNumber"
          label="شماره تلفن"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          onBlur={formik.handleBlur}
          error={
            formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
          }
          helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          margin="normal"
        />

        <TextField
          fullWidth
          id="kindIll"
          name="kindIll"
          label="نوع بیماری"
          value={kindIll}
          onChange={(e) => setKindIll(e.target.value)}
          onBlur={formik.handleBlur}
          error={
            formik.touched.kindIll && Boolean(formik.errors.kindIll)
          }
          helperText={formik.touched.kindIll && formik.errors.kindIll}
          margin="normal"
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="ایمیل"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={formik.handleBlur}
          error={
            formik.touched.email && Boolean(formik.errors.email)
          }
          helperText={formik.touched.email && formik.errors.email}
          margin="normal"
        />
        <TextField
          fullWidth
          id="doctorNote"
          name="doctorNote"
          label="توضیحات و نکات پزشک"
          multiline
          rows={4}
          value={recomendedOrder}
          onChange={(e) => setRecomendedOrder(e.target.value)}
          onBlur={formik.handleBlur}
          error={formik.touched.doctorNote && Boolean(formik.errors.doctorNote)}
          helperText={formik.touched.doctorNote && formik.errors.doctorNote}
          margin="normal"
        />

        {/* <Link to="/dashboard/healthinfo"> */}
          <Button
          onClick={() => EditUser()}
          type="submit"
          variant="contained"
          disabled={!formik.isValid || formik.isSubmitting}
          sx={{ background: "rgb(82, 216, 189)", color: "black", "&:hover": { background: "rgba(82, 216, 189,0.5)" }, fontSize: "1.1rem", px: 4, my: 3 }}
        >
          ثبت تغییرات
        </Button>
        {/* </Link> */}
      </form>
    </Box>
  );

}
export default PatientForm;