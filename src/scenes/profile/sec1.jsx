import React, { useState } from "react";
import {
  Avatar,
  Button,
  Grid,
  TextField,
  Typography,
  Box
} from "@mui/material";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "مهناز کریمی",
    email: "johndoe@example.com",
    phoneNumber: "555-1234",
    avatarUrl:require("../../assets/img/2.jpg"),
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={4}>
        <Avatar alt="User Profile" src={formData.avatarUrl} sx={{ width: 200, height: 200, mx: "auto" }} />
        <Button variant="contained" component="label" sx={{ mt: 2 ,color:"black",background:"rgb(82, 216, 189)","&:hover":{background:"rgba(82, 216, 189,0.5)"}}}>
          اپلود عکس
          <input type="file" hidden />
        </Button>
      </Grid>
      <Grid item xs={12} sm={8} className="info">
      <Box sx={{direction:"rtl"}}>
      <Typography className="subinfo" variant="h4" sx={{color:"rgb(82, 216, 189)"}}>اطلاعات کاربر</Typography>
        <Typography className="subinfo" variant="subtitle1"><span className="title">نام : </span><span className="valtitle">{formData.name}</span> </Typography>
        <Typography className="subinfo" variant="subtitle1"><span className="title">ایمیل : </span><span className="valtitle">{formData.email}</span> </Typography>
        <Typography className="subinfo" variant="subtitle1">
        <span className="title"> شماره تماس : </span><span className="valtitle">{formData.phoneNumber}</span>
        </Typography>
      </Box>
      </Grid>
      <Grid item xs={10} sx={{direction:"rtl",margin:"0px auto"}} className="form1">
        
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h3" sx={{color:"rgb(82, 216, 189)"}}>ویرایش اطلاعات</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="نام کاربری"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="ایمیل"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="شماره تماس"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" sx={{background:"rgb(82, 216, 189)",color:"black","&:hover":{background:"rgba(82, 216, 189,0.5)"}}} type="submit">
                ذخیره تغییرات
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default Profile;