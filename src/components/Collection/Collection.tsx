import React, { Component, useState } from 'react';
import './Collection.scss';
import { koi_frame, niannianyouyu, shiheshuifeng, yingchuan, pinganxile, wangdaofeiqi } from '../../images/encoded/img_encoded';
import TigerVideo from '../../videos/tiger_video';

function Collection(props: any) {
  return (
    <div className="collection" data-aos={"slide-up"}>
      <div className="item" id='item1'><img src={koi_frame} alt="Koi Fish"/></div>
      <div className="item" id='item2'><TigerVideo/></div>
      <div className="item" id='item3'><img src={niannianyouyu} alt="Nian Nian You Yu"/></div>
      <div className="item" id='item4'><img src={shiheshuifeng} alt="Shi He Shui Feng"/></div>
      <div className="item" id='item5'><img src={yingchuan} alt="Ying Chuan"/></div>
      <div className="item" id='item6'><img src={pinganxile} alt="Ping An Xi Le"/></div>
      <div className="item" id='item7'><img src={wangdaofeiqi} alt="Wang Dao Fei Qi"/></div>
    </div>
  );
}

export default Collection;
