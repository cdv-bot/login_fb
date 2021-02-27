import React from 'react';
import gif from './../Image/loading1.gif';
import './style.scss';
function Homeload(props) {
  return (
    <div className="loading">
      <img className="img_loading" alt="img" src={gif} />
    </div>
  );
}

export default Homeload;