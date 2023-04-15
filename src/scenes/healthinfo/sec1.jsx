import React, { useState, useEffect } from "react";
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
import axios from 'axios';
const Profile = () => {

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
        "Authorization" : `Bearer ${localStorage.getItem("token")}`
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
    if (getData){
      setGetData(false)
      GetData()
    }
  });


  const [formData, setFormData] = useState({
    // name: "فاطمه کریمی",
    // email: "johndoe@example.com",
    // phoneNumber: "09211638463",
    avatarUrl: require("../../assets/img/2.jpg"),
    age:"25",
    nationalCode:"9372947295",
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
              <Typography className="subinfo" variant="subtitle1">نام: {name}</Typography>
              <Typography className="subinfo" variant="subtitle1">ایمیل: {email}</Typography>
              <Typography className="subinfo" variant="subtitle1">
              شماره تلفن: {phoneNumber}
              </Typography>
              <Typography className="subinfo" variant="subtitle1">کد ملی: {nationalCode}</Typography>
              <Typography className="subinfo" variant="subtitle1">سن: {age}</Typography>
              <Typography className="subinfo" variant="subtitle1">نوع بیماری: {kindIll}</Typography>
              <Typography className="subinfo" variant="subtitle1">توصیه های پزشک: {recomendedOrder}</Typography>
          
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