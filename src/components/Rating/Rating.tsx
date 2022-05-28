import React, { Component } from 'react';
import {ReactComponent as DefaultThumbnail} from '../../icons/default_thumbnail.svg';
import {ReactComponent as ExternalLink} from '../../icons/external_link.svg';
import Slideshow from '../Slideshow/Slideshow';
import $ from 'jquery';
import './Rating.scss';

function Rating(props: any) {
  return (
    <div className="rating">
        <div className="buyerDiv">
        {
            props.data.buyer.thumbnail != "" ?
            <img src={props.data.buyer.thumbnail_encoded} className="buyerThumbnail rounded-full" alt={ `Rating Thumbnail of ${props.data.buyer.name}` }/> :
            <DefaultThumbnail className="buyerThumbnail rounded-full"/>
        }
        <span>{props.data.buyer.name}</span>
        </div>
        <div className="ratingDiv">
            <div className='slideshowDiv'>
                <Slideshow key={props.id} img={props.data.rating.thumbnail_encoded} direction={'left'} requireCrop={props.data.requireCrop}/>
            </div>
            <div className='responseDiv'>
              <span>{props.data.rating.response}</span>
            </div>
        </div>
        {/* <a className="linkBtn" href={`#${props.data.correspond_prod}`}><ExternalLink className="linkIcon"/></a> */}
    </div>
  );
}

export default Rating;
