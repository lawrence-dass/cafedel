import React from 'react';

const footerStyles = {
  position: 'absolute',
  bottom: '0px',
  display: 'flex',
};
const Footer = () => (
  <div
    style={footerStyles}
    className=" italic text-pink-900 text-lg	 w-10/12 flex justify-between"
  >
    <div className=""> Cafedel @2020</div>
    <div className=" text-right"> Icon credits - flaticon.com </div>
  </div>
);

export default Footer;
