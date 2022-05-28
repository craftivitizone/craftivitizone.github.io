import ItemLeft from '../ItemLeft/ItemLeft';
import ItemRight from '../ItemRight/ItemRight';
import items from '../../data/items.json';

function ItemWrapper(){

    const STATE_LEFT = 'left';
    const STATE_RIGHT = 'right';

    let itemArr: any = [];
    let leftItems: number = 0; let rightItems: number = 0;
    let state: string = STATE_LEFT;
    for (let i=0; i < items.length; i++){
      if (state == STATE_LEFT){
        itemArr.push(
          <div data-aos={"slide-left"} className="grid grid-cols-1" key={`left${i}`}>
            <ItemLeft key={`leftChild${i}`} name={items[i].name} url={items[i].url} imgArr={items[i].img_encoded} id={items[i].id} requireCrop={items[i].requireCrop}/>
          </div>
        );
        leftItems++;
        if (leftItems >= 1){leftItems = 0; state = STATE_RIGHT}
      }
      else{
        itemArr.push(
          <div data-aos={"slide-right"} className="grid grid-cols-1" key={`right${i}`}>
            <ItemRight key={`rightChild${i}`} name={items[i].name} url={items[i].url} imgArr={items[i].img_encoded} id={items[i].id} requireCrop={items[i].requireCrop}/>
          </div>
        );
        rightItems++;
        if (rightItems >= 1){rightItems = 0; state = STATE_LEFT}
      }
    }

    return (itemArr);
}

export default ItemWrapper;