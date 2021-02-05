import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React, { useState } from 'react';
import MenuNam from './../menuNam';
import './style.scss';

function MobileMenu(props) {
  const [clName, setClName] = useState({
    key: false,
    name: ""
  });
  const onHander = (name) => {
    setClName({
      key: !clName.key,
      name: name
    });
  }
  return (
    <>
      <div className="mobile">
        <div className="mobile_icon">
          <img alt="img" src="https://upload.wikimedia.org/wikipedia/vi/thumb/3/37/Bitis_logo.svg/1200px-Bitis_logo.svg.png" />
        </div>
        <div className="mobile_login">
          <div className="logo">
            <img alt="img" src="http://file.hstatic.net/1000230642/file/member.png" />
          </div>
          <div className="login">
            <a href="/#">ĐĂNG NHẬP</a>
          </div>
          <div className="signup">
            <a href="/#">ĐĂNG KÝ</a>
          </div>
        </div>
        <div className="mobile_menus" >
          <ul className={classNames("menu_ul", { hides: clName.key === true, shows: clName.key === false })}>
            <li className="menu_li">
              <a href="/#">VỀ BITI'S</a>
            </li>
            <li className="menu_li-one">
              <a href="/#">NAM</a>
              <FontAwesomeIcon onClick={() => onHander("man")} className="menu_two menu_nam-click" icon={faAngleDoubleRight} />
            </li>
            <li className="menu_li-one" onClick={() => onHander("wonman")}>
              <a href="/#">NỮ</a>
              <FontAwesomeIcon className="menu_two" icon={faAngleDoubleRight} />
            </li>
            <li className="menu_li-one" onClick={() => onHander("gosto")}>
              <a href="/#">GOSTO</a>
              <FontAwesomeIcon className="menu_two" icon={faAngleDoubleRight} />
            </li>
            <li className="menu_li-one" onClick={() => onHander("boy")}>
              <a href="/#">BÉ TRAI</a>
              <FontAwesomeIcon className="menu_two" icon={faAngleDoubleRight} />
            </li>
            <li className="menu_li-one" onClick={() => onHander("girl")}>
              <a href="/#">BÉ GÁI</a>
              <FontAwesomeIcon className="menu_two" icon={faAngleDoubleRight} />
            </li>
            <li className="menu_li-one">
              <a href="/#">SALE</a>
            </li>
            <li className="menu_li-one">
              <a href="/#">TUYỂN DỤNG</a>
            </li>
          </ul>
          <MenuNam handerShow={clName} onBack={onHander} />
        </div>
      </div>
    </>
  );
}

export default MobileMenu;