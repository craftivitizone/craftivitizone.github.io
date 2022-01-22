import React, { Component } from 'react';
import './Slideshow.scss';

const delay = 5000;

function Slideshow(props: any) {
  const [index, setIndex] = React.useState(0);
  const timeoutRef: { current: NodeJS.Timeout | null } = React.useRef(null);
  const imgArr = props.img;
  const direction = props.direction; //Left or Right

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
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
          <img
            className="slide object-fill"
            key={index}
            src={url}
          />
        ))}
      </div>

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
      </div>
    </div>
  );
}

export default Slideshow;
