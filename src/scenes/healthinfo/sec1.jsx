import React, { useState } from "react";
import "./style.css"
import {
  Avatar,
  Button,
  Grid,
  TextField,
  Typography,
  Box
} from "@mui/material";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const [formData, setFormData] = useState({
    name: "فاطمه کریمی",
    email: "johndoe@example.com",
    phoneNumber: "09211638463",
    avatarUrl: require("../../assets/img/2.jpg"),
    age:"25",
    nationalCode:"9372947295",
    doctorName:"حمید حسینی",
    kindIll:"آسم",
    recomendedOrder:"قرص ها هر 8 ساعت خورده شود و شربت روزی یک قاشق غذاخوری"
  });
 const navigate = useNavigate();
  

  return (
    <Box>
        <Grid container spacing={3} >
        
        <Grid item xs={12} >
        <Box  className="info" sx={{direction:"rtl",width:"90%",margin:"50px auto"}}>
              <Typography className="subinfo" sx={{color:"#70d8bd" , border:"1px solid #70d8bd"}} variant="h4">اطلاعات پرونده</Typography>
              <Typography className="subinfo" variant="subtitle1">نام: {formData.name}</Typography>
              <Typography className="subinfo" variant="subtitle1">ایمیل: {formData.email}</Typography>
              <Typography className="subinfo" variant="subtitle1">
              شماره تلفن: {formData.phoneNumber}
              </Typography>
              <Typography className="subinfo" variant="subtitle1">کد ملی: {formData.nationalCode}</Typography>
              <Typography className="subinfo" variant="subtitle1">سن: {formData.age}</Typography>
              <Typography className="subinfo" variant="subtitle1">نام دکتر: {formData.doctorName}</Typography>
              <Typography className="subinfo" variant="subtitle1">نوع بیماری: {formData.kindIll}</Typography>
              <Typography className="subinfo" variant="subtitle1">توصیه های پزشک: {formData.recomendedOrder}</Typography>
          
              <Button onClick={()=>navigate("/dashboard/edithealthinfo")} variant="contained" sx={{background:"rgb(82, 216, 189)",color:"black","&:hover":{background:"rgba(82, 216, 189,0.5)"},fontSize:"1.1rem",px:4,my:3}} >
                 ویرایش 
              </Button>
            </Box>
           
        </Grid>
       
        </Grid>
        
    </Box>
  );
};

export default Profile;