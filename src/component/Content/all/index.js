import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Slider from "react-slick";
import '../../slick/slick-theme.scss';
import '../../slick/slick.scss';
import { cartProducts } from './../../Actions';
import arrow from './../../Image/arrow.jpg';
import st2 from './../../Image/baner/st1.jpg';
import gift from './../../Image/gift.png';
import news from './../../Image/new.png';
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
        infinite: false,
        dots: false
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
      breakpoint: 414,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
};

function All({ name }) {
  const dispatch = useDispatch();

  const [boders, setBoder] = useState({
    boders: null,
    indexs: null
  });

  const arr = [
    {
      id: 1,
      title: " Giày Thể Thao Nam Biti's Hunter X Festive Aurora Black DSMH03401XDG (xanh Dương)",
      img: st2,
      sort: "Hunter Nam",
      price: 999000,
      list: "products",
      msp: "DSMH03401XDG44"
    },
    {
      id: 2,
      title: " Giày Thể Thao Nam Biti's Hunter X Festive Aurora Black DSMH03401XDG (xanh Dương)",
      img: st2,
      sort: "Hunter Nam",
      price: 99000,
      list: "products",
      msp: "DSMH03401XDG44"
    },
    {
      id: 3,
      title: " Giày Thể Thao Nam Biti's Hunter X Festive Aurora Black DSMH03401XDG (xanh Dương)",
      img: st2,
      sort: "Hunter Nam",
      price: 99000,
      list: "products",
      msp: "DSMH03401XDG44"
    },
    {
      id: 4,
      title: " Giày Thể Thao Nam Biti's Hunter X Festive Aurora Black DSMH03401XDG (xanh Dương)",
      img: st2,
      sort: "Hunter Nam",
      price: 99000,
      list: "products",
      msp: "DSMH03401XDG44"
    },
    {
      id: 5,
      title: " Giày Thể Thao Nam Biti's Hunter X Festive Aurora Black DSMH03401XDG (xanh Dương)",
      img: st2,
      sort: "Hunter Nam",
      price: 99000,
      list: "products",
      msp: "DSMH03401XDG44"
    },
    {
      id: 6,
      title: " Giày Thể Thao Nam Biti's Hunter X Festive Aurora Black DSMH03401XDG (xanh Dương)",
      img: st2,
      sort: "Hunter Nam",
      price: 999000,
      list: "products",
      msp: "DSMH03401XDG44"
    },
  ];


  const handerBoder = (x, y) => {
    setBoder({
      boders: x,
      indexs: y
    });
  };
  // ------------submit

  const submitItem = item => {
    dispatch(cartProducts({
      product: item,
      size: boders.boders
    }))
  };
  const as = () => {
    let b = arr.map((key, index) => {
      return <div className="List__item-one" key={index}>
        <a href={`/products/giay-the-thao-nam-biti-s-hunter-x-festive-aurora-black-dsmh03401xdg-xanh-duong`} className="link_img">
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
          <span className="msp">{key.msp}</span>
        </div>
        <div className="count">
          <span>{`${key.price} đ`}</span>
        </div>
        <div className="bt_a">
          {
            (boders.indexs === index) ? <button onClick={() => submitItem(key)}>Đặt Mua Ngay</button> : <button>Mua Hàng</button>
          }
        </div>
        <div>
          <img className="news_icon" alt="img" src={news} />

          <img className="gift_icon" alt="img" src={gift} />
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
        <div className="List__title-name">
          <a href="/#" className="names">
            {name}
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

export default All;