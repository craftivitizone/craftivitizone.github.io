import React, { Component, useEffect } from 'react';
import {ReactComponent as Cross} from '../../icons/cross.svg';
import './Carousel.scss';
import $ from 'jquery';
import { executionAsyncResource } from 'async_hooks';

function Carousel(props: any) {
    useEffect(() => {
        $(".carousel").fadeIn();
    }, [])

  return (
    <div className="carousel">
        <button id="closeCarouselBtn" onClick={() => $(".carousel").fadeOut()}><Cross id="cross"/></button>
        <img src={props.img} />
    </div>
  );
}

export default Carousel;
