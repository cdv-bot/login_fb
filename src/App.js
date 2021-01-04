import React from 'react';
import './App.scss';
import Input from './components/input';

function App() {

  return (
    <div className="Content">
      <div className="login">
        <div className='login-ip'>
          <div className='ts'>
            <div className="ts__img">
              <img className="fb_logo _8ilh img" src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="Facebook" />
            </div>
            <div className='tt'>
              <h2>
                Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.
            </h2>
            </div>
          </div>
          <div className="content_login">
            <div className="login_from">
              <div className="from_input">
                <form className="from_nhap" >
                  <div className="from_text">
                    <Input place="Email hoặc số điện thoại" />
                    <Input place="Mật khẩu" />
                    <div className="from_button">
                      <button>Đăng nhập</button>
                    </div>
                  </div>
                  <div className='forget'>
                    <div className="forget__pass">
                      <span><a href="/#">Quên mật khẩu?</a></span>
                    </div>
                    <div className="line"></div>
                    <div className="forget_bt">
                      <button>
                        Tạo tài khoản mới
                  </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="text">
              <a href="/#">Tạo trang </a> dành cho người nổi tiếng, nhãn hiệu hoặc doanh nghiệp.
          </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer_width">
          <div className="footer_lg">
            <ul className="footer_ul">
              <li><a href="/#">Tiếng Việt</a></li>
              <li><a href="/#">English (UK)</a></li>
              <li><a href="/#">中文(台灣)</a></li>
              <li><a href="/#">日本語</a></li>
              <li><a href="/#">한국어</a></li>
              <li><a href="/#">ภาษาไทย</a></li>
              <li><a href="/#">Français (France)</a></li>
              <li><a href="/#">Español</a></li>
              <li><a href="/#">Português (Brasil)</a></li>
              <li><a href="/#">Deutsch</a></li>
              <li><a href="/#">Italiano</a></li>
              <li><button>+</button></li>
            </ul>
          </div>
          <div className="line"></div>
          <div className="footer_end">
            <ul className="footer_end_ul">
              <li><a href="/#">Đăng ký</a></li>
              <li><a href="/#">Đăng nhập</a></li>
              <li><a href="/#">Messenger</a></li>
              <li><a href="/#">Facebook Lite</a></li>
              <li><a href="/#">Watch</a></li>
              <li><a href="/#">Danh ba</a></li>
              <li><a href="/#">Trang</a></li>
              <li><a href="/#">Hạng mục Trang</a></li>
              <li><a href="/#">Địa điểm</a></li>
              <li><a href="/#">Trò chơi</a></li>
              <li><a href="/#">Vị trí</a></li>
              <li><a href="/#">Marketplace</a></li>
              <li><a href="/#">Facebook Pay</a></li>
              <li><a href="/#">Nhóm</a></li>
              <li><a href="/#">Việc làm</a></li>
              <li><a href="/#">Oculus</a></li>
              <li><a href="/#">Portal</a></li>
              <li><a href="/#">Instagram</a></li>
              <li><a href="/#">Địa phương </a></li>
              <li><a href="/#">Chiến dịch gây quỹ</a></li>
              <li><a href="/#">Dịch vụ</a></li>
              <li><a href="/#">Trung tâm thông tin bỏ phiếu</a></li>
              <li><a href="/#">Giới thiểu</a></li>
              <li><a href="/#">Tạo quảng cáo</a></li>
              <li><a href="/#">Tạo trang</a></li>
              <li><a href="/#">Nhà phát triển</a></li>
              <li><a href="/#">Tuyển dụng</a></li>
              <li><a href="/#">Quyền riêng tư</a></li>
              <li><a href="/#">Cookie</a></li>
              <li><a href="/#">Lưạ chọn quảng cáo</a></li>
              <li><a href="/#">Điều khoản</a></li>
              <li><a href="/#">Trợ giúp</a></li>
            </ul>
          </div>
          <div className="span_ft">
            <span> Facebook © 2021</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
