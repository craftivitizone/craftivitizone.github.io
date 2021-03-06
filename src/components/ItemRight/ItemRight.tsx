import './ItemRight.scss';
import Slideshow from '../Slideshow/Slideshow';

function ItemRight(props: any) {
  return (
    <div className='itemRight w-full flex flex-row' id={props.id}>
        <div className="infoDiv w-1/2 flex flex-col px-5 justify-center">
          <a href={props.url} target="_blank"><span className='title'>{props.name}</span></a>
        </div>
        <div className="imgDiv w-1/2 left-0">
            <Slideshow key={props.url} img={props.imgArr} imgAlt={props.name} direction={'right'} requireCrop={props.requireCrop}/>
        </div>
    </div>
  );
}

export default ItemRight;
