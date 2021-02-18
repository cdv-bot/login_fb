import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHeart, faShoppingCart, faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';

function ProductItem(props) {
  const cart = useSelector(state => state.cart);

  function formatVnd(n) {
    return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  }

  const listCart = (cart) => {
    let arr = [];
    if (cart.length > 0) {
      arr = cart.map((value, index) => (
        <div className="all_item" key={index}>
          <div className="shop_buy">
            <div className="shop_buy-img">
              <img alt="img" src="http://product.hstatic.net/1000230642/product/dtb073800den__1__314b0a3e8bba4d6ea5c1b8b785fd4706_small.jpg" />
            </div>
            <div className="shop_buy-product">
              <a href="/#">{value.product.title}</a>
              <div className="number_price">
                <div className="number_price-one">{value.count}</div>
                <div className="number_price-two">{formatVnd(value.product.price * value.count)}<ins>đ</ins></div>
              </div>
            </div>
            <div className="shop_buy-close">
              <FontAwesomeIcon className="icon_close" icon={faTimes} />
            </div>
          </div>
          <div className="shop_buy-line"></div>
        </div>
      ));
    }
    return arr;
  }

  const sumMoney = (cart) => {
    let sum = 0;
    if (cart.length > 0) {
      sum = cart.reduce((x, y) => {
        return x + y.product.price * y.count;
      }, 0);
    }
    return formatVnd(sum);
  }

  return (
    <>
      <div className="Nav__menu-buy">
        <div className="buy_heart">
          <FontAwesomeIcon className="icon_buy-icon icon_heart" icon={faHeart} />
        </div>
        <div className="buy_icon">
          <a href="/#">
            <FontAwesomeIcon className="icon_buy-icon" icon={faShoppingCart} />
          </a>
          <div className="buy_icon-number">
            <span>{cart.length}</span>
          </div>
          <div className="buy_icon-hover">
            <div className="arrow-up"></div>
            <div className="shop_buy-hover" >
              {
                listCart(cart)
              }
            </div>

            <div className="shop_buy-total">
              <div className="line_total"></div>
              <div className="total_buy">
                <div className="total_buy-text">
                  <span className="total-money">Tổng tiền:</span>
                  <span className="number-money">{sumMoney(cart)} <ins>đ</ins></span>
                </div>
                <div className="total_buy-button">
                  <button className="bt bt-one">XEM GIỎ HÀNG</button>
                  <button className="bt bt-two">THANH TOÁN</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;