import { faBell, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import classNames from 'classnames';
import './style.scss';

function BackTop(props) {
  const [topScroll, setTopScroll] = useState(false);
  const [showNoti, setNoti] = useState(false);

  const scrollMenuTop = () => {
    window.scrollY >= 130 ? setTopScroll(true) : setTopScroll(false);

  }

  const handerOnTop = () => {
    if (window.scrollY >= 130) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  window.addEventListener('scroll', scrollMenuTop);

  const onShow = () => {
    setNoti(!showNoti);
  }

  return (
    <>
      <div className={classNames("back_top", { show_top: topScroll })} onClick={handerOnTop}>
        <FontAwesomeIcon className="icon_top" icon={faChevronUp} />
      </div>
      <div className="bell_left" onClick={onShow}>
        <FontAwesomeIcon className="icon_bell" icon={faBell} />
        <div className={classNames("notification", { show_noti: showNoti === true, hide_noti: showNoti === false })}>
          <div className="x_top">x</div>
          <div className="text__noti">
            <p className="text__noti-tt">Thông báo</p>
            <div className="text__noti-line"></div>
            <p className="text__noti-tb">1. Các chương trình khuyến mãi chỉ áp dụng khi đặt hàng trên website</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BackTop;