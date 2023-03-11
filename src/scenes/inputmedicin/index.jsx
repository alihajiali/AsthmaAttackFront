import React, { useState } from 'react';
import { TextField, Button ,Box ,Grid} from '@mui/material';
import img1 from "../../assets/img/icons img2/m7.png"
import Header from "../../components/Header";
import axios from 'axios';
import "./style.css";
const MedicalPage = () => {
  const [name, setName] = useState('');
  const [peakFlow, setPeakFlow] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    let config = {
      headers: {
        "Authorization" : `Bearer ${localStorage.getItem("token")}`
      }
    }
    
    axios.post("http://185.142.156.246:8081/asthma_data", {
      medicine: name,
      have_medicine: name===""?false:true, 
      percent: parseFloat(peakFlow), 
      user_id:localStorage.getItem("user_id")
    }, config)
    .then((response) => {
      
    });
  };

  return (
    <Box sx={{m:"20px",direction:"rtl"}}>
      <Box>
       <Header title="داروهای مصرفی روزانه" subtitle="ثبت عدد پیک فلومتر و داروی مصرفی" />
      </Box>
        <Grid container>
          <Grid xs={12} md={6}>
              <Box>
                <form onSubmit={handleSubmit}>
                  <TextField
                    id="name"
                    label="نام دارو"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    sx={{
                      color:"rgb(80, 204, 189)",
                      margin:{md:"20px auto"},
                      '& .MuiOutlinedInput-root': {  
                        '& fieldset': {           
                            borderColor: 'rgb(80, 204, 189)',  
                        },
                        '&:hover fieldset': {
                            borderColor: 'rgba(80, 204, 189,0.5)',
                        },
                        '&.Mui-focused fieldset': {  
                            borderColor: 'rgba(80, 204, 189,0.5)',
                        },
                    },
                    }}
                  />
                  <TextField
                    id="peak-flow"
                    label="پیک فلومتر"
                    type="number"
                    variant="outlined"
                    margin="normal"
                    min={0}
                    max={100}
                    fullWidth
                    value={peakFlow}
                    onChange={(event) => setPeakFlow(event.target.value)}
                    inputProps={{ min: 0, max: 100, step: 1 }}
                    required
                    sx={{
                      color:"rgb(80, 204, 189)",
                      margin:{md:"20px auto"},
                      '& .MuiOutlinedInput-root': {  
                        '& fieldset': {           
                            borderColor: 'rgb(80, 204, 189)',  
                        },
                        '&:hover fieldset': {
                            borderColor: 'rgba(80, 204, 189,0.5)',
                        },
                        '&.Mui-focused fieldset': {  
                            borderColor: 'rgba(80, 204, 189,0.5)',
                        },
                    },
                    }}
                  />
                  <Button variant="contained" sx={{background:"rgb(80, 204, 189)",mt:8,color:"black","&:hover":{background:"rgba(80, 204, 189,0.5)"},fontSize:"20px",fontWeight:"300"}} type="submit">
                    ثبت اطلاعات
                  </Button>
                </form>
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
                <img className="medicinanim" src={img1} style={{width:"100%",height:"auto",objectFit:"cover"}}/>
          </Grid>
        </Grid>
    </Box>
  );
};

export default MedicalPage;