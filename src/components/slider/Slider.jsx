import "./style.css"
import img4 from "../../assets/img/icons img/img17.png"
import img3 from "../../assets/img/icons img/img4.jfif"
import img2 from "../../assets/img/icons img/img8.jfif"
import img1 from "../../assets/img/icons img/img16.png"
const Slider = ()=>{
    return (
        <>
      

            <section className="hero-section">
            <div className="card-grid">
                <a className="card" href="#">
                <div className="card__background" style={{backgroundImage: `url(${img1})`}}></div>
                <div className="card__content">
                    <p className="card__category">امنیت</p>
                    <h3 className="card__heading">با سایت سلامت جو از امن بودن اطلاعات خود اطمینان داشته باشید</h3>
                </div>
                </a>
                <a className="card" href="#">
                <div className="card__background" style={{backgroundImage:`url(${img2})`}}></div>
                <div className="card__content">
                    <p className="card__category">در دسترس</p>
                    <h3 className="card__heading">شما هر زمان نیاز داشته باشید در هرجایی به خدمات سایت سلامت جو دسترسی دارید</h3>
                </div>
                </a>
                <a className="card" href="#" >
                <div className="card__background" style={{backgroundImage:`url(${img3})`}}></div>
                <div className="card__content">
                    <p className="card__category">تجربه</p>
                    <h3 className="card__heading">سلامتی خود را با بهترین متخصصان کشور تضمین کنید</h3>
                </div>
                </a>
                <a className="card" href="#">
                <div className="card__background" style={{backgroundImage:`url(${img4})`}}></div>
                <div className="card__content">
                    <p className="card__category">پیشرفت</p>
                    <h3 className="card__heading">شما امکان مشاهده ی لحظه به لحظه ی پیشرفت سلامتی خود را دارید</h3>
                </div>
                </a>
            </div>
            </section>
        </>
    )
}
export default Slider;