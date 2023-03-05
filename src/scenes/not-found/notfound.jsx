import "./style.css"
import {useNavigate} from "react-router-dom"
const Notf = ()=>{
    const navigate  = useNavigate();
    return (
        <>
       


            <div>
            <div className="starsec"></div>
            <div className="starthird"></div>
            <div className="starfourth"></div>
            <div className="starfifth"></div>
            </div>



            <div className="lamp__wrap">
            <div className="lamp">
                <div className="cable"></div>
                <div className="cover"></div>
                <div className="in-cover">
                <div className="bulb"></div>
                </div>
                <div className="light"></div>
            </div>
            </div>

            <section className="error">

            <div className="error__content">
                <div className="error__message message">
                <h1 className="message__title">چنین صفحه ای وجود ندارد</h1>
                <p className="message__text"> برای برگشت به خانه روی دکمه ی زیر کلید کنید</p>
                </div>
                <div className="error__nav e-nav">
                <a href="" className="e-nav__link" onClick={()=>navigate("/")}></a>
                </div>
            </div>


            </section>
        </>
    )
}
export default Notf;