import React from 'react';
import './style.scss';

function Header(props) {
  return (
    <div className="header">
      <div className="header__content grid">
        <ul className="header__content-ul">
          <li className="li_hover"><a href="/#">Hotline: 0966 158 666 (8h - 12h, 13h30 - 17h)</a></li>
          <li className="li_hover"><a href="/#">Tìm cửa hàng</a></li>
          <li className="li_hover"><a href="/#">Liên hệ hợp tác</a></li>
          <li className="li_hover"><a href="/#">Mua hàng tại Amazon</a></li>
          <li ><a href="/#">Kiểm tra đơn hàng</a></li>
          <li className="line_li" >
            <div className="li_hover li_g">
              <a href="/#">Đăng nhập</a>
            </div>
            <div className="li_hover li_g" >
              <a href="/#">Đăng ký</a>
            </div>
            <div className="header__content-line"></div>
          </li>
          <li><img alt="img" src="https://theme.hstatic.net/1000230642/1000484971/14/vi.png?v=7683" /></li>
        </ul>

      </div>
    </div>
  );
}

export default Header;