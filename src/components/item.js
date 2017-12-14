import React from 'react';

const Item = (props) => {
  const permalink = `http://reddit.com/${props.post.data.permalink}`;
  const item = props.post.data;
  const hasImage = item.thumbnail && item.thumbnail !== 'default' && item.thumbnail !== 'nsfw' && item.thumbnail !== 'image' && item.thumbnail !== 'self';

  return (
    <div className="item">
      <a href={permalink} target="_blank">
        <div className="item__inner">
          { item.link_flair_text && 
            <span className="item__flair">{item.link_flair_text}</span>
          }
          <span className="item__subreddit">{item.subreddit_name_prefixed}</span>
          { hasImage &&
            <div className="item__thumbnail">
              <img src={item.thumbnail} width={item.thumbnail_width} height={item.thumbnail_height} />
            </div>
          }
          <h4 className="item__title">{item.title}</h4>
          <span className="item__meta">
            <span className="item__domain">({item.domain})</span>
            <span className="item__author">By {item.author}</span>
          </span>
        </div>
      </a>
    </div>
  )
}

export default Item;