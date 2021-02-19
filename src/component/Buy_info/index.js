import { faChevronRight, faChevronUp, faHome, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import './style.scss';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import zalo from './../Image/nam/zalopay.jpg';
import cod from './../Image/nam/cods.jpg';
import mastercard from './../Image/nam/mastercard.jpg';
import visa from './../Image/nam/visa.jpg';
import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION,
  MagnifierContainer,
  MagnifierPreview,
  MagnifierZoom
} from "react-image-magnifiers";
import st2 from './../Image/img1.jpg';

const BuyInfo = () => {
  const [showImg, setShowImg] = useState(1);
  const [slides, setSlides] = useState(0);

  const { id } = useParams();
  const handlerSliceDown = () => {
    if (-76 * 5 + slides !== -76 * 6) {
      setSlides(-76 + slides);
    }
  }
  const handlerSliceUp = () => {
    if (slides < 0) {
      setSlides(76 + slides);
    }
  }

  const handerShow = (x) => {
    setShowImg(x);
  }


  return (
    <div className="Products">
      <div className="Products__link">
        <div className="Products__link-content grid">
          <a href="/#" className="">
            <FontAwesomeIcon className="link_content" icon={faHome} />
          </a>
          <a href="/#" className="">Trang chủ</a>
          <FontAwesomeIcon className="link_content" icon={faChevronRight} />
          <a href="/#" className="">NỮ</a>
          <FontAwesomeIcon className="link_content" icon={faChevronRight} />
          <span > Giày Thể Thao Nữ Biti's Hunter X Festive Aurora Black DSWH03401HOD (Hồ</span>
        </div>
      </div>
      <div className="Products__info">
        <div className="grid">
          <Grid container spacing={3}>
            <Grid item xs={1}>
              <div className="Products__info-ul">
                <span className="angle-up">
                  <i className="fa fa-angle-up div-item itemUp" onClick={() => handlerSliceUp()}></i>
                </span>
                <div className="list-center">
                  <ul className="list-ul" style={{ transform: `translateY(${slides}px)` }}>
                    <li onClick={() => handerShow(1)}>
                      <img src={require('./../Image/nam/1 (1).jpg')} />
                    </li>
                    <li onClick={() => handerShow(2)}>
                      <img src={require('./../Image/nam/1 (4).jpg')} />
                    </li>
                    <li onClick={() => handerShow(5)}>
                      <img src={require('./../Image/nam/1 (5).jpg')} />
                    </li>
                    <li onClick={() => handerShow(6)}>
                      <img src={require('./../Image/nam/1 (6).jpg')} />
                    </li>
                    <li onClick={() => handerShow(7)}>
                      <img src={require('./../Image/nam/1 (7).jpg')} />
                    </li>
                    <li onClick={() => handerShow(8)}>
                      <img src={require('./../Image/nam/1 (8).jpg')} />
                    </li>
                  </ul>
                </div>
                <span className="angle-down">
                  <i className="fa fa-angle-down div-item itemDown" onClick={() => handlerSliceDown()}></i>
                </span>
              </div>
            </Grid>
            <Grid item xs={5}>
              <SideBySideMagnifier
                className="Products__info-zoom"
                style={{ order: 4 }}
                imageSrc={require(`./../Image/nam/1 (${showImg}).jpg`)}
                largeImageSrc={require(`./../Image/nam/1 (${showImg}).jpg`)}
                alwaysInPlace={false}
                overlayOpacity={0.2}
                switchSides={false}
                inPlaceMinBreakpoint={400}
                fillAvailableSpace={false}
                inPlaceMinBreakpoint={300}
                fillAlignTop={false}
                cursorStyle="pointer"
                zoomContainerBorder="1px solid #ccc"
                zoomContainerBoxShadow="0 4px 8px rgba(0,0,0,.5)"
              />
              <div className="border_description">
                <span>Chưa có mô tả cho sản phẩm này</span>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="Products__info-right">
                <div className="info_top">
                  <p>Giày Thể Thao Nam Biti's Hunter X Festive Aurora Black DSMH03401XDG (xanh Dương)</p>
                  <p className="msp" >Mã sản phẩm: DSMH03401XDG42</p>
                  <div className="count_text">
                    <p className="monny">999,000 ₫</p>
                    <p className="msp">*Đã bao gồm VAT</p>
                  </div>
                </div>
                <div className="line"></div>
                <div className="color_product">
                  <p className="">Màu sắc</p>
                  <div className="img_color">
                    <img src={require(`./../Image/nam/1 (${showImg}).jpg`)} />
                    <p>Xanh Dương</p>
                  </div>
                </div>
                <div className="size_product">
                  <p>Kích thước</p>
                  <div className="size_product-number">
                    <div className="border_number hideSize"> <p>39</p> </div>
                    <div className="border_number"> <p>40</p> </div>
                    <div className="border_number"> <p>41</p> </div>
                    <div className="border_number"> <p>42</p> </div>
                    <div className="border_number"> <p>43</p> </div>
                    <div className="border_number"> <p>44</p> </div>
                    <div className="border_number"> <p>45</p> </div>
                  </div>
                </div>
                <div className="still">
                  <div className="still__row">
                    <span>Còn hàng:</span>
                    <span style={{ marginLeft: "23px" }}><b>3</b> sản phẩm</span>
                  </div>
                  <div>
                    <a href="/#" className="linkSize">
                      + Xem hướng dẫn chọn size
                    </a>
                  </div>
                </div>
                <div className="bt_buy">
                  <button>MUA NGAY</button>
                  <button> 🖤 Thêm vào yêu thích</button>
                </div>
                <div className="select__buy">
                  <div className="select__buy-text" >
                    <span>Chọn quà tặng:</span>
                    <p className="select_gift">Chọn 1 trong các loại quà tặng</p>
                    <p className="select_gift">Chỉ áp dụng khi mua online</p>
                  </div>
                  <div className="select__buy-product">
                    <div className="img_select">
                      <img src="http://product.hstatic.net/1000230642/product/4.jpg" />
                      <p>Combo 3 Đôi Vớ Biti's Hunter (màu ngẫu nhiên)</p>
                      <input type="checkbox" />
                    </div>
                    <div className="img_select">
                      <img src="http://product.hstatic.net/1000230642/product/4.jpg" />
                      <p>Combo 3 Đôi Vớ Biti's Hunter (màu ngẫu nhiên)</p>
                      <input type="checkbox" />
                    </div>
                    <div className="img_select">
                      <img src="http://product.hstatic.net/1000230642/product/4.jpg" />
                      <p>Combo 3 Đôi Vớ Biti's Hunter (màu ngẫu nhiên)</p>
                      <input type="checkbox" />
                    </div>
                  </div>
                </div>
                <div className="you__border">
                  <span>Bạn vui lòng kiểm tra sản phẩm quà tặng có hiển thị tại trang giỏ hàng trước khi thanh toán</span>
                </div>
                <div className="line"></div>
                <div className="call">
                  <span>Tư vấn: 0966 158 666</span>
                  <div>
                    <img src={zalo} />
                    <img src={visa} />
                    <img src={mastercard} />
                    <img src={cod} />
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default BuyInfo;