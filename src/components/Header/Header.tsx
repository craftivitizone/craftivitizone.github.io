import React from 'react';
import './Header.scss';

function Header() {
  return (
    <div id="header grid grid-cols-1">
        <div className="logoDiv">
            <span data-aos={"zoom-in"} className="logo-en">Craftiviti Zone</span>
            <span data-aos={"fade-in"} className="logo-zh">手作绘</span>
        </div>
    </div>
  );
}

export default Header;
