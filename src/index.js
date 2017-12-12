import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

fetch('http://www.reddit.com/r/all/hot.json', {
  method: 'GET'
}).then(res => {
  return res.json();
}).then((json) => {
  ReactDOM.render(<App hotPosts={json} />, document.getElementById('root'));
  registerServiceWorker();
});
