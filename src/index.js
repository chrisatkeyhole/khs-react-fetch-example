import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import FetchExample from './fetch'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React Developer'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
         The following is an example of using JavaScript's "Fetch" API
        </p>
        <FetchExample />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
