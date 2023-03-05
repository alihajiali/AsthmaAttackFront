import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import AboutUsImage from "../../assets/img/icons img2/m2.png";
import OurServices from './OurServices';
import Card from "./card/index"
import ImageSlider from "./SliderTop/ImageSlider2";
import "./style.css"


const AboutUsPage = () => {
  const data = ["تضمین سلامتی" ,"مشاهده ی لحظه به لحظه ی سلامتی" ,"دسترسی آسان","بهترین متخصصان کشور"]
  return (
    <Box sx={{ padding: '3rem', position:"relative"}}>
              <Box sx={{backgroundImage:`url(${require("../../assets/img/bg.jpg")})`,backgroundPosition:"center",backgroundSize:"cover", width:"100vw",height:"100vh",position:"fixed",top:"0px",left:"0px",zIndex:"-1"}}></Box>
       <Box className="slider4" sx={{width:"100%",margin:"10px 0px",maxWidth:"1800px",margin:"0px auto",overflowX:"hidden",mt:13}}>
                    <ImageSlider />
        </Box>
      <Grid container spacing={3} sx={{mt:15,direction:"rtl"}}>
       
        <Grid item xs={12} md={6}>
          <img src={AboutUsImage} className="imgaboutus" alt="تصویر درباره ما" style={{ width: '100%', borderRadius: '15px' }} />
        </Grid>
        <Grid item xs={12} md={6}>
         <Box className="boxaboutus" sx={{boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                    backdropFilter: "blur(8.5px)",border:"1px solid white" , borderRadius:"15px",p:5}}>
            <Typography variant="h3" sx={{ marginBottom: '1rem', color: 'rgb(4, 145, 152)' }}>درباره ما</Typography>
              <Typography variant="body1" sx={{ marginBottom: '1rem', lineHeight: 1.8 }}>
                ما یک تیم پزشکی مجرب هستیم که با بیش از ۱۰ سال تجربه در زمینه پزشکی، به ارائه خدمات پزشکی با کیفیت و حرفه‌ای به مراجعین خود متعهدیم.
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: '1rem', lineHeight: 1.8 }}>
                با توجه به این که سلامتی یکی از ارزشمندترین دارایی‌های انسان است، تلاش می‌کنیم تا در طول درمان بیماران، آن‌ها را به خوبی آگاه کنیم تا بتوانند بهترین تصمیم‌گیری را برای سلامتی خودشان بگیرند.
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: '1rem', lineHeight: 1.8 }}>
                خدماتی که ارائه می‌دهیم شامل مشاوره پزشکی، درمان‌های مختلف، آزمایشات و تست‌های پزشکی، ارائه خدمات پرستاری و مراقبت از بیمار و دیگر خدمات پزشکی مرتبط است.
              </Typography>
              <OurServices />
         </Box>
        </Grid>
    
     
          
        </Grid>
    
        
    </Box>
  );
};

export default AboutUsPage;