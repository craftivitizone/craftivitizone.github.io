import React, { useEffect } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ItemLeft from './components/ItemLeft/ItemLeft';
import ItemRight from './components/ItemRight/ItemRight';
import items from './data/items.json';
import AOS from 'aos';
import "aos/dist/aos.css";
import EmptyDiv from './components/EmptyDiv/EmptyDiv';
import ScrollTop from './components/ScrollTop/ScrollTop';

const STATE_LEFT = 'left';
const STATE_RIGHT = 'right';

function App() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  var itemArr: any = [];
  let leftItems: number = 0; let rightItems: number = 0;
  let state: string = STATE_LEFT;
  for (let i=0; i < items.length; i++){
    if (state == STATE_LEFT){
      itemArr.push(
        <div data-aos={"slide-right"} className="grid grid-cols-1" key={`left${i}`}>
          <ItemLeft key={`leftChild${i}`} name={items[i].name} url={items[i].url} imgArr={items[i].img}/>
        </div>
      );
      leftItems++;
      if (leftItems >= 1){leftItems = 0; state = STATE_RIGHT}
    }
    else{
      itemArr.push(
        <div data-aos={"slide-left"} className="grid grid-cols-1" key={`right${i}`}>
          <ItemRight key={`rightChild${i}`} name={items[i].name} url={items[i].url} imgArr={items[i].img}/>
        </div>
      );
      rightItems++;
      if (rightItems >= 1){rightItems = 0; state = STATE_LEFT}
    }
  }
  return (
    <div className="App">
      <ScrollTop/>
      <Header/>
      <div className='flex flex-col'>
        <EmptyDiv/>
        { itemArr }
        <EmptyDiv/>
      </div>
      <Footer/>

    </div>
  );
}

export default App;
