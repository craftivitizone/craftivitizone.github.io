import React from 'react';
import EmptyDiv from '../EmptyDiv/EmptyDiv';
import './Footer.scss';

function Footer() {
  return (
    <footer>
      <div id="relative">
        <div className="logoDiv" id="logoFooterDiv" onClick={() => window.scroll({top: 0, left: 0, behavior: 'smooth' })}>
            <span data-aos={"zoom-in"} className="logo-en" id="logo-en-footer">Craftiviti Zone</span>
            <span data-aos={"zoom-in"} className="logo-zh" id="logo-zh-footer">手作绘</span>
        </div>
        <EmptyDiv/><EmptyDiv/>
        <div className='text-center'>
        <span id="copyrightSpan">© Copyright 2021-2022 craftivitizone, Craftiviti Zone and YHM Craftiviti Enterprise. All right reserved. Registered under SSM as YHM Craftiviti Enterprise (003225811-T).</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
