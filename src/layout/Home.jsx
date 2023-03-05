import { useTheme ,Box , Typography} from "@mui/material";
import Button from "@mui/material/Button";
import Slider from "../components/slider/Slider.jsx";
import Timeline from "../components/Timeline/timeline.jsx";
import Anim from "../components/imganim/index";
import "./style.css";
const Home = ()=>{
    const theme = useTheme()
    return(
        <>
        <Box sx={{backgroundImage:`url(${require("../assets/img/bg.jpg")})`,backgroundPosition:"center",backgroundSize:"cover", width:"100vw",height:"100vh",position:"fixed",top:"0px",left:"0px",zIndex:"-1"}}></Box>
        <Box sx={{width:"100%",height:"100vh",position:"relative",overflow:"auto",zIndex:"999"}}>
            <Box sx={{width:1,height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",zIndex:"999"}}> 
                 <Box className="homeanim" sx={{direction:"rtl",zIndex:"9",p:3,borderRadius:4,width:"50%",height:"auto",textAlign:"center",background:theme.palette.mode ==="dark"?"rgba(0,0,0,0.05)":" rgba(255, 255, 255, 0.05)",
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                    backdropFilter: "blur(8.5px)",border:"1px solid white"}}>
                    <Typography variant="h1" sx={{py:3}}>نگران سلامتیت هستی ؟</Typography>
                    <Typography variant="h4">ما اینجا  کنارتیم تا بتونی  سلامتیت رو تضمین کنی زیر نظر بهترین پزشکان و متخصصان از سراسر کشور</Typography>
                    <Typography variant="h5" sx={{py:2}}>فرصت رو از دست نده و همین الان ثبت نام کن</Typography>
                    <Button sx={{borderRadius:"30px",background:"white",border:"1px solid white" , color:"rgb(102, 118, 154)",fontSize:"15px",padding:"6px 20px","&:hover ":{background:"none",color:"white"}}}>اطلاعات بیشتر</Button>
                 </Box>
            </Box>
            <Box>
                <Anim />
            </Box>
            <Box sx={{width:{xs:"90%",md:"60%"},margin:"0px auto",zIndex:"999"}}>
                <Timeline />
            </Box>
            <Box sx={{width:"100%",zIndex:"999" }}>
                <Slider />
            </Box>
            
            
        </Box>
        </>
    )
}
export default Home;