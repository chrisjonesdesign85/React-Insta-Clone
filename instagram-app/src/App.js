<<<<<<< HEAD
import React from 'react'
import data from './dummy-data'
import SearchBar from './components/SearchBar'
import PostContainer from './components/PostContainer'

import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      post: []
    }
  }

  componentDidMount() {
    this.setState({ post: data });
  }

  render() {
    console.log(this.state.post)
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
        <div className='post-container'>
          <PostContainer post={this.state.post} />
        </div>
      </div>
    );
  }
}

export default App;
=======
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
>>>>>>> 68736bb07ba935b19da608477f7afcf2ef05d62d
