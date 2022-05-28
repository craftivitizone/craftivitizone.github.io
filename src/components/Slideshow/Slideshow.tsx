import React, { Component, useRef, useState } from 'react';
import CropperLib from '../Cropper/CropperLib';
import './Slideshow.scss';

const delay = 5000;

function Slideshow(props: any) {
  const [index, setIndex] = useState(0);
  const timeoutRef: { current: NodeJS.Timeout | null } = useRef(null);
  const imgArr = props.img;
  const imgAlt = props.imgAlt;
  const direction = props.direction; //Left or Right
  const requireCrop = props.requireCrop;
  const [img, setImg] = useState('');

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  function updateImg(img: any){
    setImg(img);
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          direction == 'left' ? 
          (prevIndex === imgArr.length - 1 ? 0 : prevIndex + 1) :
          (prevIndex === 0 ? imgArr.length - 1 : prevIndex - 1)
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {imgArr.map((url: any, index: any) => (
          <div className="slide" key={index}>
            {
              requireCrop ? 
              <CropperLib url={url} updateImg={updateImg}/>:
              <img src={url} alt={`${imgAlt}${index}`}/>
            }
          </div>
        ))}
      </div>
      {
        imgArr.length > 1 ?
        <div className="slideshowDots">
        {imgArr.map((_: any, idx: any) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div> :
      ""
      }
    </div>
  );
}

export default Slideshow;
