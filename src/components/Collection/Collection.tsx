import React, { Component } from 'react';
import './Collection.scss';
import tiger from '../../images/tiger.gif';
import wdfq from '../../images/wangdaofeiqi.png';
import nnyy from '../../images/niannianyouyu.png';
import paxl from '../../images/pinganxile.jpg';
import shsf from '../../images/shiheshuifeng.jpg';
import yc from '../../images/yingchuan.jpg';
import koif from '../../images/koi_frame.jpg';

function Collection(props: any) {
  return (
    <div className="collection" data-aos={"zoom-in-up"}>
      <div className="item" id='item1'><img src={koif}/></div>
      <div className="item" id='item2'><img src={tiger}/></div>
      <div className="item" id='item3'><img src={nnyy}/></div>
      <div className="item" id='item4'><img src={shsf}/></div>
      <div className="item" id='item5'><img src={yc}/></div>
      <div className="item" id='item6'><img src={paxl}/></div>
      <div className="item" id='item7'><img src={wdfq}/></div>
    </div>
  );
}

export default Collection;
