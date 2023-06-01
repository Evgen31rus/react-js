import React from 'react';
import './main.css';
import ShopItemClass from './ShopItemClass/ShopItemClass.jsx';

export const ShopItemFunc = ({item}) => {
  return (
    <ShopItemClass item={item}/>
  )
}
