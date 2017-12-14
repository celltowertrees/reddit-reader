import React, { Component } from 'react';
import './App.css';
import ItemList from './components/item-list';


const url = 'http://www.reddit.com/r/all/hot.json?limit=5';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hotPosts: this.props.hotPosts.data
    }

    this.onNextClick = this.onNextClick.bind(this);
    this.onPrevClick = this.onPrevClick.bind(this);
  }

  fetchPage(url) {
    fetch(url, {
      method: 'GET'
    }).then(res => {
      return res.json();
    }).then((json) => {
      this.setState({ hotPosts: json.data });
    });
  }

  onPrevClick() {
    this.fetchPage(`${url}&before=${this.state.hotPosts.before}`);
  }

  onNextClick() {
    this.fetchPage(`${url}&after=${this.state.hotPosts.after}`);
  }

  render() {

    return (
      <div className="app">
        <div className="item-list">
          <ItemList items={this.state.hotPosts.children} />
        </div>
        <div className="pagination">
          <button onClick={this.onPrevClick}>Previous</button>
          <button onClick={this.onNextClick}>Next</button>
        </div>
      </div>
    );
  }
}

export default App;