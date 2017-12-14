import React from 'react';

const Item = (props) => {
  return (
    <div>
      {props.post.data.title}
    </div>
  )
}

export default Item;