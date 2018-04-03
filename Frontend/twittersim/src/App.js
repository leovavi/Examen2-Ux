import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TweetsContainer from './Components/TweetsContainer'
import TweetForm from './Components/TweetForm';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <h1 className="App-title text-primary">Twitter Simulation</h1>
        </div>
        <div>
          <TweetsContainer />
        </div>
      </div>
    );
  }
}

export default App;
