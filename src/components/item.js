import React from 'react';

const Item = (props) => {
  const permalink = `http://reddit.com/${props.post.data.permalink}`;
  const item = props.post.data;
  const hasImage = item.thumbnail && item.thumbnail !== 'default' && item.thumbnail !== 'nsfw' && item.thumbnail !== 'image';

  console.log(item);

  return (
    <div className="item">
      <div className="item__inner">
        <a href={permalink} target="_blank">{item.title}</a>
        { hasImage &&
          <img src={item.thumbnail} width={item.thumbnail_width} height={item.thumbnail_height} />
        }
        <span>{item.link_flair_text}</span>
        <span>({item.domain})</span>
        <span>By {item.author}</span>
        to <span>{item.subreddit_name_prefixed}</span>
      </div>
    </div>
  )
}

export default Item;