import React, { Component, useState } from 'react';
import './RatingCollection.scss';
import rating from '../../data/rating.json';
import Rating from '../Rating/Rating';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function RatingCollection() {

  const [isActive, setIsActive] = useState(false);
  let collection: any[] = [];
  for (let i = 0; i < rating.length; i++){
    collection.push(<Rating data={rating[i]} id={i}/>)
  }
  
  return (
    <div className='ratingMain'>
      <div className='ratingTitle' onClick={() => {
          setIsActive(!isActive);
          isActive ? $(".ratingCollection").slideDown().show() : $(".ratingCollection").slideUp();
        }}>
        <span id='ratingTitleZh'>看看买家们怎么说</span>
        <span id='ratingTitleEn'>Feedback from our customers</span>
        {/* <FontAwesomeIcon icon={"fa-solid fa-angle-down"} /> */}
      </div>
      <div className="ratingCollection">
        {collection}
      </div>
    </div>
  );
}

export default RatingCollection;
