import React from 'react';
import {ReactComponent as ShopeeLogo} from '../../icons/shopee.svg';
import {ReactComponent as InstagramLogo} from '../../icons/instagram.svg';
import './Header.scss';

function Header() {
  return (
    <div id="header grid grid-cols-1">
        <div className="logoDiv">
            <span data-aos={"zoom-in"} className="logo-en">Craftiviti Zone</span>
            <span data-aos={"fade-in"} className="logo-zh">手作绘</span>
        </div>
        <div className="socialDiv">
            <ShopeeLogo data-aos={"fade-down"} className='socialIcon' onClick={() => {window.open("https://shopee.com.my/craftivitizone", "_blank")}}/>
            <InstagramLogo data-aos={"fade-down"} className='socialIcon' onClick={() => {window.open("https://instagram.com/craftivitizone", "_blank")}}/>
        </div>
    </div>
  );
}

export default Header;
