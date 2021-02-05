import React, { useState } from 'react';
import './style.scss';
import st2 from './../../Image/baner/st1.jpg';
import st3 from './../../Image/baner/st3.jpg';
import st4 from './../../Image/baner/st4.jpg';
import arrow from './../../Image/arrow.jpg';
import classNames from 'classnames';

function ListBuyBoy(props) {
  const [sliderRun, setSliderRun] = useState({
    right: 0
  });

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
      price: "999,000",
      list: "products",
      msp: "DSMH03401XDG44"
    },
    {
      id: 2,
      title: " Giày Thể Thao Nam Biti's Hunter X Festive Aurora Black DSMH03401XDG (xanh Dương)",
      img: st2,
      sort: "Hunter Nam",
      price: "99,000",
      list: "products",
      msp: "DSMH03401XDG44"
    },

  ];

  const handerLeft = () => {
    if (sliderRun.right > 0) {
      setSliderRun({
        right: sliderRun.right - 200
      });
    } else {
      setSliderRun({
        right: arr.length * 200 - 5 * 200
      });
    }
  }
  const handerRight = () => {
    if (arr.length * 200 - 5 * 200 > sliderRun.right) {
      setSliderRun({
        right: sliderRun.right + 200
      })
    } else {
      setSliderRun({
        right: 0
      })
    }
  }
  const handerBoder = (x, y) => {
    setBoder({
      boders: x,
      indexs: y
    });
  };

  const as = () => {
    let b = arr.map((key, index) => {
      return <div className="List__item-one" style={{ transform: `translateX(-${sliderRun.right}px)` }} key={index}>
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

  return (
    <div className="List">
      <div className="List__title">
        <div className="List__title-name">
          <a href="/#" className="names">
            BÉ TRAI
         </a>
        </div>
      </div>
      <div className="List__item">
        <div className="List__item-slider">
          <div className="arrow_right">
            <img alt="img" src={arrow} onClick={handerRight} />
          </div>
          {as()}
          <div className="arrow_left" onClick={handerLeft}>
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

export default ListBuyBoy;