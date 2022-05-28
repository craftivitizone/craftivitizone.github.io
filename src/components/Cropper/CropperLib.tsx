import React, { useRef } from "react";
import Cropper from "react-cropper";
//import "cropperjs/dist/cropper.css";
import "./CropperLib.scss";

function CropperLib(props: any) {
  const cropperRef = useRef<HTMLImageElement>(null);
  const onCrop = () => {
    const imageElement: any = cropperRef?.current;
    const cropper: any = imageElement?.cropper;
    let url = cropper.getCroppedCanvas().toDataURL();
    cropper.destroy();
    cropper.replace(url, true);
    //props.updateImg(url);
  };

  return (
    <Cropper
      src={props.url}
      className="cropper"
      style={{height: 200, width: "fit-content"}}
      // Cropper.js options
      initialAspectRatio={1/1}
      guides={false}
      crop={onCrop}
      ref={cropperRef}
      zoomable={false}
      zoomOnWheel={false}
    />
  );
};

export default CropperLib;