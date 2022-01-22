import React from 'react';
import {ReactComponent as ShopeeLogo} from '../../icons/shopee.svg';
import './ItemLeft.scss';
import Slideshow from '../Slideshow/Slideshow';

function ItemLeft(props: any) {
  return (
    <div className='itemLeft w-full flex flex-row'>
        <div className="imgDiv w-1/2 left-0">
            <Slideshow key={props.url} img={props.imgArr} direction={'left'}/>
        </div>
        <div className="infoDiv w-1/2 flex flex-col justify-center">
            <a href={props.url} target="_blank"><span className='title'>{props.name}</span></a>
        </div>
    </div>
  );
}

export default ItemLeft;
