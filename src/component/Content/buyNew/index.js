import Grid from '@material-ui/core/Grid';
import React from 'react';
import contents2 from './../../Image/contents2.jpg';
import fb from './../../Image/fb.png';
import goog from './../../Image/g+.png';
import images from './../../Image/images.png';
import './style.scss';


function buyNew(props) {
  return (
    <div className="New">
      <div className="New__sper">
        <div className="New__sper-bitti">
          <a href="/#">TIN TỨC BITI'S</a>
        </div>
      </div>
      <div className="New__img">
        <Grid container spacing={2} >
          <Grid item xs={12} sm={6}>
            <div className="clm_img">
              <img alt="img" src={contents2} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="sale">
              <div className="sale__content">
                <div className="sale__content-img">
                  <img alt="img" src={contents2} />
                  <div className="sale__content-before">
                    <div className="all_share">
                      <div className="flus">
                        +
                    </div>
                      <div className="text_share">
                        Share now
                    </div>
                      <div className="all_icon">
                        <img alt="img" src={fb} className="icon_sale" />
                        <img alt="img" src={goog} className="icon_sale" />
                        <img alt="img" src={images} className="icon_sale" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sale__content-text">
                  <div className="link_text">
                    <a href="/#">SĂN BITI’S – TRÚNG VINFAST 10/12/2020 - 10/01/2021</a>
                  </div>
                  <div className="text_new">
                    <span>Tên chương trình khuyến mãi:"SĂN BITI’S – TRÚNG VINFAST” Hàng hoá, dịch vụ khuyến mãi: Tất cả sản phẩm giày, dép mang thương hiệu Biti’s (Danh mục đính kèm) Thời gian khuyến mãi: Từ ngày 10/12/2020...</span>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default buyNew;