import React, { useEffect } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AOS from 'aos';
import EmptyDiv from './components/EmptyDiv/EmptyDiv';
import ScrollTop from './components/ScrollTop/ScrollTop';
import Collection from './components/Collection/Collection';
import RatingCollection from './components/RatingCollection/RatingCollection';
import ItemWrapper from './components/ItemWrapper/ItemWrapper';

function App() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <div className="App">
      <ScrollTop/>
      <Header/>
      <Collection/>
      <div className='flex flex-col'>
        <EmptyDiv/>
        <ItemWrapper/>
        <EmptyDiv/>
      </div>
      <RatingCollection/>
      <Footer/>

    </div>
  );
}

export default App;
