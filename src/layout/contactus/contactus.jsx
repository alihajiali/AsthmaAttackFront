import "./style.css"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
const Contactus = ()=>{
    return (
        <Box className="contactus" sx={{position:"relative"}}>
          <Box sx={{backgroundImage:`url(${require("../../assets/img/bg.jpg")})`,backgroundPosition:"center",backgroundSize:"cover", width:"100vw",height:"100vh",position:"fixed",top:"0px",left:"0px",zIndex:"0"}}></Box>
            <Grid container sx={{display:"flex",alignItems:"center",justifyContent:"space-around",zIndex:"99"}}>
                <Grid xs={12} sm={12} md={6} sx={{textAlign:"center"}}>
                      <img src={require("../../assets/img/icons img/vec4.png")}/>
                </Grid>
                <Grid xs={12} sm={12} md={6} sx={{textAlign:"center"}}>
                    <div className="container">
                    <h2>ارتباط با ما</h2>
                    <form>
                        <div className="username"><input type="text" className="name" placeholder="نام" /></div>
                        <div className="email"><input type="email" name="E-mail" placeholder="ایمیل" /></div>
                        <div className="number"><input type="phone-number" name="phone-number" placeholder="شماره تلفن" /></div>
                        <div className="textarea"><textarea name="message" placeholder="متن خود را وارد کنید"></textarea></div>
                        <button type="submit">ارسال پیام</button>
                    </form>
                </div>
                </Grid>
            </Grid>
            
        </Box>
    )
}
export default Contactus;