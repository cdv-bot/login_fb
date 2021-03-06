import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import Slider from "react-slick";
import arrow from './../../Image/arrow.jpg';
import st2 from './../../Image/baner/st1.jpg';
import st3 from './../../Image/baner/st3.jpg';
import st4 from './../../Image/baner/st4.jpg';
import logo_master from './../../Image/logo_master.jpg';
import './../../slick/slick-theme.scss';
import './../../slick/slick.scss';
import './style.scss';

var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
};
function ListBuyGosto(props) {


  const [boders, setBoder] = useState({
    boders: null,
    indexs: null
  });

  const arr = [
    {
      title: " Giày Thể Thao Nam Biti's Hunter X Festive Aurora Black DSMH03401XDG (xanh Dương)",
      img: st2,
      sort: "Hunter Nam",
      price: "999,000"
    },
    {
      title: " Giày Thể Thao Nam Biti's Hunter X Festive Aurora Black DSMH03401XDG (xanh Dương)",
      img: st2,
      sort: "Hunter Nam",
      price: "99,000"
    },
    {
      title: " Giày Thể Thao Nam Biti's Hunter X Festive Aurora Black DSMH03401XDG (xanh Dương)",
      img: st4,
      sort: "Hunter Nam",
      price: "99,000"
    },
    {
      title: " Giày Thể Thao Nam Biti's Hunter X Festive Aurora Black DSMH03401XDG (xanh Dương)",
      img: st3,
      sort: "Hunter Nam",
      price: "99,000"
    },
    {
      title: " Giày Thể Thao Nam Biti's Hunter X Festive Aurora Black DSMH03401XDG (xanh Dương)",
      img: st2,
      sort: "Hunter Nam",
      price: "999,000"
    },
    {
      title: " Giày Thể Thao Nam Biti's Hunter X Festive Aurora Black DSMH03401XDG (xanh Dương)",
      img: st2,
      sort: "Hunter Nam",
      price: "99,000"
    },
    {
      title: " Giày Thể Thao Nam Biti's Hunter X Festive Aurora Black DSMH03401XDG (xanh Dương)",
      img: st2,
      sort: "Hunter Nam",
      price: "999,000"
    },
    {
      title: " Giày Thể Thao Nam Biti's Hunter X Festive Aurora Black DSMH03401XDG (xanh Dương)",
      img: st2,
      sort: "Hunter Nam",
      price: "99,000"
    },

  ];

  const handerBoder = (x, y) => {
    setBoder({
      boders: x,
      indexs: y
    });
  };

  const as = () => {
    let b = arr.map((key, index) => {
      return <div className="List__item-one" key={index}>
        <a href="/#" className="link_img">
          <img alt="img" src={key.img} className="imgs" />
        </a>
        <div className="size">
          <span className="ten">+ 10 Size</span>
          <div className="size_shoe">
            <span onClick={() => handerBoder(35, index)} className={classNames("font_shoe", { boder_size: boders.boders === 35 && boders.indexs === index })}>35</span>
            <span onClick={() => handerBoder(36, index)} className={classNames("font_shoe", { boder_size: boders.boders === 36 && boders.indexs === index })}>36</span>
            <span onClick={() => handerBoder(37, index)} className={classNames("font_shoe", { boder_size: boders.boders === 37 && boders.indexs === index })}>37</span>
            <span onClick={() => handerBoder(38, index)} className={classNames("font_shoe", { boder_size: boders.boders === 38 && boders.indexs === index })}>38</span>
            <span onClick={() => handerBoder(39, index)} className={classNames("font_shoe", { boder_size: boders.boders === 39 && boders.indexs === index })}>39</span>
            <span onClick={() => handerBoder(40, index)} className={classNames("font_shoe", { boder_size: boders.boders === 40 && boders.indexs === index })}>40</span>
            <span onClick={() => handerBoder(41, index)} className={classNames("font_shoe", { boder_size: boders.boders === 41 && boders.indexs === index })}>41</span>
          </div>
        </div>
        <div className="line">
        </div>
        <div className="heght_a">
          <a href="/#" className="a_text" title="Giày Thể Thao Nam Biti's Hunter X Festive Aurora Black DSMH03401XDG (xanh Dương)">
            {key.title}
          </a>
        </div>
        <div className="title_center">
          <a href="/#">{key.sort}</a>
        </div>
        <div className="count">
          <span>{`${key.price} đ`}</span>
        </div>
        <div className="bt_a">
          <button>Đặt Mua Ngay</button>
        </div>
      </div>;
    });
    return b;
  }

  const sliders = useRef();

  const next = () => {
    // slider.slickNext();
    sliders.current.slickNext();
  }
  const previous = () => {
    sliders.current.slickPrev();
  }

  return (
    <div className="List">
      <div className="List__title">
        <div className="List__title-names">
          <a href="/#" className="name_logo">
            <img alt="img" src={logo_master} />
          </a>
        </div>
      </div>
      <div className="List__item">
        <div className="List__item-slider">
          <div className="arrow_right">
            <img alt="img" src={arrow} onClick={next} />
          </div>
          <Slider ref={sliders} {...settings}>
            {as()}
          </Slider>
          <div className="arrow_left" onClick={previous}>
            <img alt="img" src={arrow} />
          </div>
        </div>
      </div>
      <div className="List__wacth">
        <a href="/#"> XEM THÊM</a>
      </div>
    </div>
  );
}

export default ListBuyGosto;