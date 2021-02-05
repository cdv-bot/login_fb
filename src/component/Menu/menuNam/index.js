import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React from 'react';
import './style.scss';
function MenuNam({ onBack, handerShow }) {
  const onHandlerBack = () => {
    onBack();
  }
  return (
    <>
      <ul className={classNames("menu_ul-two ", { shows: handerShow.name === "man" })}>
        <li className="menu_li" onClick={onHandlerBack}>
          <FontAwesomeIcon className="menu_two" icon={faChevronLeft} />
          <p className="text_li">NAM</p>
        </li>
        <li className="menu_li-one">
          <a href="/#">Xem tất cả "NAM"</a>
        </li>
        <li className="menu_li-one">
          <a href="/#">Hunter</a>
        </li>
        <li className="menu_li-one">
          <a href="/#">Sandal</a>
        </li>
        <li className="menu_li-one">
          <a href="/#">Giày Đá Banh</a>
        </li>
        <li className="menu_li-one">
          <a href="/#">Giàu Chạy Bộ</a>
        </li>
        <li className="menu_li-one">
          <a href="/#">Giày Tây</a>
        </li>
        <li className="menu_li-one">
          <a href="/#">Dép</a>
        </li>
      </ul>
      <ul className={classNames("menu_ul-two ", { shows: handerShow.name === "wonman" })}>
        <li className="menu_li" onClick={onHandlerBack}>
          <FontAwesomeIcon className="menu_two" icon={faChevronLeft} />
          <p className="text_li">NỮ</p>
        </li>
        <li className="menu_li-one">
          <a href="/#">Xem tất cả "NỮ"</a>
        </li>
        <li className="menu_li-one">
          <a href="/#">Hunter</a>
        </li>
        <li className="menu_li-one">
          <a href="/#">Giàu Búp Bê</a>
        </li>
        <li className="menu_li-one">
          <a href="/#">Giày Thời Trang</a>
        </li>
        <li className="menu_li-one">
          <a href="/#">Giàu Chạy Bộ</a>
        </li>
        <li className="menu_li-one">
          <a href="/#">Dép</a>
        </li>
        <li className="menu_li-one">
          <a href="/#">Túi Xách</a>
        </li>
      </ul>
      <ul className={classNames("menu_ul-two ", { shows: handerShow.name === "gosto" })}>
        <li className="menu_li" onClick={onHandlerBack}>
          <FontAwesomeIcon className="menu_two" icon={faChevronLeft} />
          <p className="text_li">GOSTO</p>
        </li>
        <li className="menu_li-one">
          <a href="/#">Xem tất cả "GOSTO"</a>
        </li>
        <li className="menu_li-one">
          <a href="/#">Giày Cao Gót</a>
        </li>
        <li className="menu_li-one">
          <a href="/#">Giày Thời Trang</a>
        </li>
        <li className="menu_li-one">
          <a href="/#">Sandal</a>
        </li>
        <li className="menu_li-one">
          <a href="/#">Dép</a>
        </li>
        <li className="menu_li-one">
          <a href="/#">Túi Xách - Ví</a>
        </li>
      </ul>
      <ul className={classNames("menu_ul-two ", { shows: handerShow.name === 'boy' })}>
        <li className="menu_li" onClick={onHandlerBack}>
          <FontAwesomeIcon className="menu_two" icon={faChevronLeft} />
          <p className="text_li">BÉ TRAI</p>
        </li>
        <li className="menu_li-one">
          <a href="/#">Xem tất cả "BÉ TRAI"</a>
        </li>
        <li className="menu_li-one">
          <a href="/#">Sandal</a>
        </li>
        <li className="menu_li-one">
          <a href="/#">Giày Thể Thao</a>
        </li>
        <li className="menu_li-one">
          <a href="/#">Dép</a>
        </li>
      </ul>
      <ul className={classNames("menu_ul-two ", { shows: handerShow.name === 'girl' })}>
        <li className="menu_li" onClick={onHandlerBack}>
          <FontAwesomeIcon className="menu_two" icon={faChevronLeft} />
          <p className="text_li">BÉ GÁI</p>
        </li>
        <li className="menu_li-one">
          <a href="/#">Xem tất cả "BÉ GÁI"</a>
        </li>
        <li className="menu_li-one">
          <a href="/#">Sandal</a>
        </li>
        <li className="menu_li-one">
          <a href="/#">Giày Thể Thao</a>
        </li>
        <li className="menu_li-one">
          <a href="/#">Giày Búp Bê</a>
        </li>
        <li className="menu_li-one">
          <a href="/#">Dép</a>
        </li>
      </ul>
    </>
  )
}

export default MenuNam;