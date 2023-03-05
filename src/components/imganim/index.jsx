import "./style.css"
import Box from "@mui/material/Box"
import img4 from "../../assets/img/icons img/img17.png"
import img3 from "../../assets/img/icons img/img4.jfif"
import img2 from "../../assets/img/icons img/img8.jfif"
import img1 from "../../assets/img/icons img/img16.png"
import img5 from "../../assets/img/icons img/img1.jfif"
import img6 from "../../assets/img/icons img/img2.jfif"
import img7 from "../../assets/img/icons img/img3.jfif"
import img8 from "../../assets/img/icons img/img4.jfif"
import img9 from "../../assets/img/icons img/img5.jfif"
import img10 from "../../assets/img/icons img/img6.jfif"
import SpaIcon from '@mui/icons-material/Spa';
const Anim = ()=>{
    return (
        <Box className="imganim" sx={{my:5}}>
            <header>
                <div className="orbits">
                    <div className="left">
                    <div className="outer" data-orbit-rotate="right">
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                    </div>
                    <div className="inner" data-orbit-rotate="left">
                        <img src={img5} alt="" />
                        <img src={img6} alt="" />
                        <img src={img7} alt="" />
                        <img src={img8} alt="" />
                    </div>
                    </div>
                    <div className="right">
                    <div className="outer" data-orbit-rotate="left">
                        <img src={img9} alt="" />
                        <img src={img10} alt="" />
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                    </div>
                    <div className="inner" data-orbit-rotate="right">
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                        <img src={img5} alt="" />
                        <img src={img6} alt="" />
                    </div>
                    </div>
                </div>
                <div className="content">
                    <h4><SpaIcon /></h4>
                    <h1 className="logo">سلامت<wbr /><span>جو</span></h1>
                    <h3>در حال حاضر صدها سلامتجو از این پلتفرم استفاده میکنند</h3>
                </div>
                </header>
        </Box>
    )
}
export default Anim;