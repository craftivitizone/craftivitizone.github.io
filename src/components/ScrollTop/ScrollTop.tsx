import React, { useState } from 'react';
import {ReactComponent as ScrollTopIcon} from '../../icons/scrollTop.svg';
import './ScrollTop.scss';
import $ from 'jquery';

const delay = 5000;

function ScrollTop() {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0;;
        if (!window.matchMedia('(max-width: 768px)').matches){
            if (scrolled > 50){
                $("#scrollTop").fadeIn();
                setVisible(true)
            }
            else{
                $("#scrollTop").fadeOut();
                setVisible(false)
            }
        }
        else{setVisible(false)}
    };
    
    window.addEventListener('scroll', toggleVisible);
    return (
        <button style={{visibility: visible ? 'visible' : 'hidden'}} data-aos={"zoom-in-left"} id="scrollTop" onClick={() => window.scroll({top: 0, left: 0, behavior: 'smooth' })}><ScrollTopIcon className='scrollTopIcon'/></button>
    );
}

export default ScrollTop;

