import { useState }  from 'react'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import "./style.css"
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
  const [formData, setFormData] = useState({
    name: "فاطمه کریمی",
    email: "johndoe@example.com",
    phoneNumber: "09211638463",
    age:"25",
    nationalCode:"9372947295",
    doctorName:"حمید حسینی",
    kindIll:"آسم",
    recomendedOrder:"قرص ها هر 8 ساعت خورده شود و شربت روزی یک قاشق غذاخوری"
  });
  const formik = useFormik({
    initialValues: {
      name: formData.name,
      age: formData.age,
      nationalCode: formData.nationalCode,
      email:formData.email,
      kindIll:formData.kindIll,
      phoneNumber: formData.phoneNumber,
      doctorNote: formData.recomendedOrder,
      doctorName: formData.doctorName,
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
      <Box sx={{ maxWidth:"70%", margin: 'auto' ,direction:"rtl"}}>
        <form onSubmit={formik.handleSubmit} className="editform">
          <TextField
            fullWidth
            sx={{color:"#52d8bd"}}
            id="name"
            name="name"
            label="نام"
            value={formik.values.name}
            onChange={formik.handleChange}
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
            value={formik.values.age}
            onChange={formik.handleChange}
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
            value={formik.values.nationalCode}
            onChange={formik.handleChange}
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
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
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
            value={formik.values.kindIll}
            onChange={formik.handleChange}
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
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.email && Boolean(formik.errors.email)
            }
            helperText={formik.touched.email && formik.errors.email}
            margin="normal"
          />
          <TextField
            fullWidth
            id="doctorName"
            name="doctorName"
            label="نام پزشک"
            size="medium"
            value={formik.values.doctorName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.doctorName && Boolean(formik.errors.doctorName)
            }
            helperText={formik.touched.doctorName && formik.errors.doctorName}
            margin="normal"
          />
          <TextField
            fullWidth
            id="doctorNote"
            name="doctorNote"
            label="توضیحات و نکات پزشک"
            multiline
            rows={4}
            value={formik.values.doctorNote}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.doctorNote && Boolean(formik.errors.doctorNote)}
            helperText={formik.touched.doctorNote && formik.errors.doctorNote}
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            disabled={!formik.isValid || formik.isSubmitting}
            sx={{ background:"rgb(82, 216, 189)",color:"black","&:hover":{background:"rgba(82, 216, 189,0.5)"},fontSize:"1.1rem",px:4,my:3}}
          >
           ثبت تغییرات
          </Button>
        </form>
      </Box>
);
  
  }
  export default PatientForm;