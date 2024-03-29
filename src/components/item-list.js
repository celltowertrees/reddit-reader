import React from 'react';
import Item from './item';

const ItemList = (props) => {
  return props.items.map((item) => {
    return <Item className="item" key={item.data.id} post={item} />
  });
}

export default ItemList;