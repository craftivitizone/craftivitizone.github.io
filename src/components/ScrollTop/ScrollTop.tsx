import React, { useEffect } from 'react';
import {ReactComponent as ScrollTopIcon} from '../../icons/scrollTop.svg';
import './ScrollTop.scss';
import $ from 'jquery';

const delay = 5000;

function ScrollTop() {
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.outerWidth >= 768){
                if (window.scrollY > 50){
                    $("#scrollTop").fadeIn("fast");
                }
                else{
                    $("#scrollTop").fadeOut("fast");
                }
            }
        });
        return () => {
            window.removeEventListener('scroll', () => {});
        };
    });
    return (
        <button data-aos={"zoom-in-left"} id="scrollTop" onClick={() => window.scroll({top: 0, left: 0, behavior: 'smooth' })}><ScrollTopIcon /></button>
    );
}

export default ScrollTop;
