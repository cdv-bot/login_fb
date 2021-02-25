import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Grid from "@material-ui/core/Grid";
import React from 'react';
import st1 from './../Image/baner/st1.jpg';
import dadangky from './../Image/dadangky.png';
import logo_bitis from './../Image/logo_bitis.png';
import HeThong from './he_thong';
import './style.scss';
function Footer(props) {
  return (
    <div>
      <HeThong />
      <div className="dear__banner">
        <div className="dear__banner-text">
          <span>HASHTAG <a href="/#">BITIS</a> ĐỂ CÓ CƠ HỘI XUẤT HIỆN TRÊN WEBSITE CỦA CHÚNG TÔI </span>
        </div>
        <div className="dear__banner-img">
          <div className="banner-one">
            <img alt="img" src={require('./../Image/baner_footer/one.jpg')} />
          </div>
          <div className="banner-one">
            <img alt="img" src={require('./../Image/baner_footer/two.jpg')} />
          </div>
          <div className="banner-one">
            <img alt="img" src={require('./../Image/baner_footer/four.jpg')} />
          </div>
          <div className="banner-one">
            <img alt="img" src={require('./../Image/baner_footer/five.jpg')} />
          </div>
          <div className="banner-one">
            <img alt="img" src={require('./../Image/baner_footer/six.jpg')} />
          </div>
          <div className="banner-one">
            <img alt="img" src={require('./../Image/baner_footer/seven.jpg')} />
          </div>
          <div className="banner-one">
            <img alt="img" src={require('./../Image/baner_footer/eight.jpg')} />
          </div>
          <div className="banner-one">
            <img alt="img" src={require('./../Image/baner_footer/ten.jpg')} />
          </div>
        </div>
      </div>
      <div className="dear__info">
        <div className="dear__info-one grid">
          <div className="one-left">
            <span>ĐĂNG KÝ EMAIL ĐỂ NHẬN THÊM NHIỀU THÔNG TIN MỚI TỪ BITI’S</span>
          </div>
          <div className="one-right">
            <form>
              <input className="one-right-input" type="email" placeholder="Nhập E-mail của bạn..." />
              <button className="one-right-button" type="submit">
                <FontAwesomeIcon className="bt-icon" icon={faLocationArrow} />
                ĐĂNG KÝ
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="dear__footer">
        <footer className="grid">
          <Grid container>
            <Grid item xs={3}>
              <ul className="dear__footer-ul">
                <li>Trợ Giúp</li>
                <li><a href="/#">Trạng thái đơn hàng</a></li>
                <li><a href="/#">Hình thức giao hàng</a></li>
                <li><a href="/#">Hình thức thanh toán</a></li>
                <li><a href="/#">Chính sách đổi trả</a></li>
                <li><a href="/#">Chính sách bảo hành</a></li>
                <li><a href="/#">Chính sách khách hàng thân thiết</a></li>
              </ul>
            </Grid>
            <Grid item xs={2}>
              <ul className="dear__footer-ul">
                <li>Thông tin</li>
                <li><a href="/#">Tuyển Dụng</a></li>
                <li><a href="/#">Hệ thống cửa hàng</a></li>
                <li><a href="/#">Liên hệ hợp tác</a></li>
                <li><a href="/#">Q&A</a></li>
              </ul>
            </Grid>
            <Grid item xs={2}>
              <ul className="dear__footer-ul">
                <li>Về Biti's</li>
                <li><a href="/#">Về Bitis</a></li>
                <li><a href="/#">Câu chuyện Biti's</a></li>
                <li><a href="/#">Bước tiến phát triển</a></li>
                <li><a href="/#">Hoạt động</a></li>
                <li><a href="/#"> liên hệ</a></li>
              </ul>
            </Grid>
            <Grid item xs={5}>
              <ul className="dear__footer-ul img-top">
                <li>
                  <a href="/#">
                    <img alt="img" src={logo_bitis} className="li-img" />
                  </a>
                </li>
                <li>
                  <p>CÔNG TY TNHH SẢN XUẤT HÀNG TIÊU DÙNG BÌNH TIÊN</p>
                  <p><b>Địa chỉ:</b> 22 Lý Chiêu Hoàng, Phường 10, Quận 6, TP HCM </p>
                  <p><b>Sđt:</b>  (038) 268 6620  </p>
                  <p><b>Email:</b>  Liên hệ các vấn đề về đặt hàng online : tuvan_online@bitis.com.vn  </p>
                  <p><b>Hotline: 19002126</b>  ( cước phí: 3000đ/phút ) </p>
                  <p className="li-p">Thời gian tư vấn: Từ 07h30 đến 12h15, 13h15 đến 21h30 các ngày trong tuần ( Trừ ngày Lễ, Tết)</p>
                </li>
              </ul>
            </Grid>
          </Grid>
        </footer>
      </div>
      <div className="dear__end">
        <div className="grid dear__end-ct">
          <Grid container >
            <Grid item xs={5}>
              <div className="dk-one">
                <a href="/#">Điều khoản</a>
                <a href="/#">Chính Sách Bảo Mật</a>
                <a href="/#">Điều khoản</a>
              </div>
              <div className="dk-two">
                <p>© Copyright Bitis.com.vn. Powered by Haravan Enterprise.</p>
              </div>
            </Grid>
            <Grid item className="dear__end-two" xs={7}>
              <div className="img_dangky">
                <img alt="img" src={dadangky} />
              </div>
              <div className="text_day">
                <p>
                  Giấy CNĐKDN: 0301340497 được cấp ngày 20/01/1992,
                  được sửa đổi lần thứ 20 ngày 28/12/2015 bởi Sở Kế hoạch và Đầu tư TPHCM
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Footer;