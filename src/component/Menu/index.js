import React, { useState } from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHeart, faShoppingCart, faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import MobileMenu from './Mobile_Menu';
import classNames from 'classnames';
import ProductItem from './productItem';

function Menu(props) {
  const [lock, setLock] = useState(false);
  const [navBar, setNavBar] = useState(false);
  const handlerMenu = () => {
    setLock(!lock);
  };

  const scrollMenu = () => {
    window.scrollY >= 130 ? setNavBar(true) : setNavBar(false);
    // if (window.scrollY >= 130) window.scrollTo(0, 200);
  }

  window.addEventListener('scroll', scrollMenu);

  return (
    <>
      <div className={classNames("Content", { "fixedMenu": navBar })}>
        <div className="Nav__menu-icon ">
          <div className={classNames("mobile_menu", { showMenu: lock })} >
            <MobileMenu />
          </div>
          <div className="black_right"></div>
        </div>
        <div className={classNames("Nav__menu grid ", { showMenus: lock })}>
          <div className="Nav__menu-iconMenu">
            <FontAwesomeIcon className="icon_menu" icon={faBars} onClick={handlerMenu} />
          </div>
          <div className="Nav__menu-logo">
            <div className="logo">
              <img alt="img" src="https://upload.wikimedia.org/wikipedia/vi/thumb/3/37/Bitis_logo.svg/1200px-Bitis_logo.svg.png" />
            </div>
          </div>
          <nav className="menu">
            <ul className="menu_ul">
              <li className="fist_hover"><a href="/#">VỀ BITI'S</a></li>
              <li className="hover_cl"><a href="/#">NAM</a></li>
              <li className="hover_cl"><a href="/#">NỮ</a></li>
              <li className="hover_cl"><a href="/#">GOSTO</a></li>
              <li className="hover_cl"><a href="/#">BÉ TRAI</a></li>
              <li className="hover_cl"><a href="/#">SALES</a></li>
              <li className="hover_cl"><a href="/#">TUYỂN DỤNG</a></li>
            </ul>
          </nav>
          <div className="Nav__menu-seach ">
            <div className="seach_box">
              <div className="input_seach">
                <input type="text" placeholder="Nhập thông tin cần tìm" />
              </div>
              <div className="icon_seach">
                <FontAwesomeIcon className="icon_seach-fa" icon={faSearch} />
              </div>
            </div>
          </div>
          <ProductItem />
        </div>
      </div>
    </>

  );
}

export default Menu;