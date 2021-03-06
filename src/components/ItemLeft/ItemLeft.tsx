import './ItemLeft.scss';
import Slideshow from '../Slideshow/Slideshow';

function ItemLeft(props: any) {
  return (
    <div className='itemLeft w-full flex flex-row' id={props.id}>
        <div className="imgDiv w-1/2 left-0">
            <Slideshow key={props.url} img={props.imgArr} imgAlt={props.name} direction={'left'} requireCrop={props.requireCrop}/>
        </div>
        <div className="infoDiv w-1/2 flex flex-col justify-center">
            <a href={props.url} target="_blank"><span className='title'>{props.name}</span></a>
        </div>
    </div>
  );
}

export default ItemLeft;
