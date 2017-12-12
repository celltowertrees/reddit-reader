import React, { Component } from 'react';
import './App.css';
import Item from './components/item';

class App extends Component {
  render() {
    console.log(this.props.hotPosts);

    // there's a better way to do this
    const hotPosts = this.props.hotPosts.data.children.map((post) => {
      return <Item key={post.data.id} post={post.data.title} />
    });

    return (
      <div className="App">
        <h1>{hotPosts}</h1>
      </div>
    );
  }
}

export default App;
