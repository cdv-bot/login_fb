import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import classNames from 'classnames';
import React, { useState } from 'react';
import st1 from './../Image/baner/st1.jpg';
import st2 from './../Image/baner/st2.jpg';
import st3 from './../Image/baner/st3.jpg';
import st4 from './../Image/baner/st4.jpg';
import st5 from './../Image/baner/st5.jpg';
import st6 from './../Image/baner/st6.jpg';
import st7 from './../Image/baner/st7.jpg';
import content_center from './../Image/contents.jpg';
import content_center1 from './../Image/contents1.jpg';
import Icon_free from './../Image/Slider/icon_free.jpg';
import All from './All';
import BuyNew from './buyNew';
import ListBuyGosto from './buy_icon_gosto';
import Sliders from './slider';
import './style.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 'auto',
    boxSizing: 'border-box'
  },
  space: {
    height: '100%'
  },
  top: {
    height: '180px',
    marginBottom: '10px'
  },
  right: {
    paddingRight: "5px"
  }
}));

function Content(props) {
  const classes = useStyles();
  const [sliderLeft, setSliderLeft] = useState(true);
  const handerSlider = () => {
    setSliderLeft(!sliderLeft)
  };

  return (
    <div className="dear">
      <Sliders />
      <div className="dear__change">
        <FontAwesomeIcon className="dear__change--icon" icon={faChevronLeft} onClick={handerSlider} />
        <div className="dear__change--boder">
          <div className={classNames("dear__change--free tt", { slow_change: sliderLeft })}>
            <img alt="img" src={Icon_free} />
            <p className="bold_text">ĐỔI SIZE MIỄN PHÍ</p>
            <p>Tại tất cả các cửa hàng, trong vòng 1 tuần</p>
          </div>
          <div className={classNames("dear__change--free ss", { slow_changes: sliderLeft })}>
            <img alt="img" src={Icon_free} />
            <p className="bold_text">ĐỔI SIZE MIỄN PHÍ</p>
            <p>Tại tất cả các cửa hàng, trong vòng 1 tuần</p>
          </div>
        </div>
        <FontAwesomeIcon className="dear__change--icon" icon={faChevronRight} onClick={handerSlider} />
      </div>
      <div className="dear__grid">
        <div className="dear__grid-content grid">
          <div className={classes.root}>
            <Grid container className={classes.space} spacing={1}>
              <Grid item xs={12} sm={2}>
                <a href="/#">
                  <img alt="img" className="img_bn" src={st1} />
                </a>
              </Grid>
              <Grid item xs={12} sm={5} container>
                <Grid item xs={12} className={classes.top} >
                  <a href="/#">
                    <img alt="img" className="img_bn" src={st2} />
                  </a>
                </Grid>
                <Grid item xs={12} container >
                  <Grid item xs={6} className={classes.right}>
                    <a href="/#">
                      <img alt="img" className="img_bn" src={st3} />
                    </a>
                  </Grid>
                  <Grid item xs={6} >
                    <a href="/#">
                      <img alt="img" className="img_bn" src={st4} />
                    </a>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={5} container>
                <Grid item xs={12} className={classes.top} >
                  <a href="/#">
                    <img alt="img" className="img_bn" src={st5} />
                  </a>
                </Grid>
                <Grid item xs={12} container >
                  <Grid item xs={6} className={classes.right}>
                    <a href="/#">
                      <img alt="img" className="img_bn" src={st6} />
                    </a>
                  </Grid>
                  <Grid item xs={6} >
                    <a href="/#">
                      <img alt="img" className="img_bn" src={st7} />
                    </a>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
          <div className="">
            <All name="NAM" />
            <All name="NỮ" />
            <All name="PHỤ KIỆN" />
            <All name="BÉ TRAI" />
          </div>
          <div className="content_ct">
            <img alt="img" src={content_center} />
          </div>
          <div>
            <ListBuyGosto />
          </div>
          <div className="content_ct">
            <img alt="img" src={content_center1} />
          </div>
          <div>
            <All name="BÉ GÁI" />
          </div>
          <div>
            <BuyNew />
          </div>
          <div className="border_content">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;