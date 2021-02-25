import React from 'react';
import './style.scss';
import gif from './../Image/loading1.gif';
function Homeload(props) {
  return (
    <div className="loading">
      <img className="img_loading" src={gif} />
    </div>
  );
}

export default Homeload;