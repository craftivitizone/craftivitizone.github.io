import React from 'react';
import EmptyDiv from '../EmptyDiv/EmptyDiv';
import {ReactComponent as Coffee} from '../../icons/coffee.svg';
import {ReactComponent as Heart} from '../../icons/heart.svg';
import './Footer.scss';

function Footer() {
  return (
    // <div className='grid grid-rows-2 gap-0'>
      /* <div data-aos={"slide-left"} id="czFooter"><span className='absolute'>CRAFTIVITI ZONE</span></div> */
      <div className='footerDiv'>
        <footer className='grid grid-cols-2'>
            <div className="leftFDiv grid grid-cols-2 gap-0">
              <div className="fuDiv">
                <span id="fu" onClick={() => window.scroll({top: 0, left: 0, behavior: 'smooth' })}>福</span>
              </div>
              <div className="socialFDiv">
                <span>Visit us at</span>
                <a href={"https://shopee.com.my/craftivitizone"} target={"_blank"}>Shopee</a>
                <a href={"https://instagram.com/craftivitizone"} target={"_blank"}>Instagram</a>
              </div>
            </div>
            <div className="textFDiv">
              <span className="footerSpan">© Copyright 2021-2022 craftivitizone, Craftiviti Zone, 手作绘 and YHM Craftiviti Enterprise. All right reserved. Registered under SSM as YHM Craftiviti Enterprise (003225811-T).</span><br/>
              <span className="footerSpan">Made with <Coffee className="footerIcon"/> and <Heart className="footerIcon"/> by proscawards.</span>
            </div>
        </footer>
      </div>
    // </div>
  );
}

export default Footer;
