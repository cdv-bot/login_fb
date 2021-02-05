import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import slider1 from './../../Image/Slider/slider1.jpg';
import slider2 from './../../Image/Slider/slider2.jpg';
import slider3 from './../../Image/Slider/slider3.jpg';
import './style.scss';

function Sliders(props) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        <img src={slider3} alt="img" className="auto_slider" />
        <img src={slider1} alt="img" className="auto_slider" />
        <img src={slider2} alt="img" className="auto_slider" />
      </Slider>

    </div>
  );
}

export default Sliders;