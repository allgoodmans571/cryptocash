import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import SliderImg from '../Images/Slider-1.png'
import InvestImg from '../Images/Invest.png'

const Invest = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return ( 
    <section className="invest">
      <h2 className="invest__title">Куда мы инвестируем?</h2>
      <Slider className="slider" {...settings}>
          <div className="slider__item">
            <img className="slider__img" src={SliderImg} alt="SliderImg"/>
            <h6 className="slider__title">Biim</h6>
            <p className="slider_sub">Игровой проект</p>
            <h5 className="slider__percent">34%</h5>
            <p className="slider_sub">Наша доля в компании</p>
          </div>
          <div className="slider__item">
            <img className="slider__img" src={SliderImg} alt="SliderImg"/>
            <h6 className="slider__title">Biim</h6>
            <p className="slider_sub">Игровой проект</p>
            <h5 className="slider__percent">34%</h5>
            <p className="slider_sub">Наша доля в компании</p>
          </div>
          <div className="slider__item">
            <img className="slider__img" src={SliderImg} alt="SliderImg"/>
            <h6 className="slider__title">Biim</h6>
            <p className="slider_sub">Игровой проект</p>
            <h5 className="slider__percent">34%</h5>
            <p className="slider_sub">Наша доля в компании</p>
          </div>
        </Slider>
      <img className="invest__img" src={InvestImg} alt="InvestImg"/>
    </section>
   );
}
 
export default Invest;