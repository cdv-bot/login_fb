import { faChevronRight, faChevronUp, faHome, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.scss';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
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
          <Grid container spacing={1}>
            <Grid item xs={1}>
              <div className="Products__info-ul">
                <span className="angle-up">
                  <i className="fa fa-angle-up div-item itemUp" onClick={() => handlerSliceUp()}></i>
                </span>
                <div className="list-center">
                  <ul className="list-ul" style={{ transform: `translateY(${slides}px)` }}>
                    <li>
                      <img src={require('./../Image/small.jpg')} />
                    </li>
                    <li>
                      <img src={require('./../Image/small.jpg')} />
                    </li>
                    <li>
                      <img src={require('./../Image/small.jpg')} />
                    </li>
                    <li>
                      <img src={require('./../Image/small.jpg')} />
                    </li>
                    <li>
                      <img src={require('./../Image/small.jpg')} />
                    </li>
                    <li>
                      <img src={require('./../Image/small.jpg')} />
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
                imageSrc={st2}
                largeImageSrc={st2}
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
            </Grid>
            <Grid item xs={6}>
              <Paper >xs=12</Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default BuyInfo;