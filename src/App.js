import React, { Component } from 'react';
import logo from './logo.svg'
import './App.css';
import Navigator from './navigator.js';
import Display from './displayLoader'
import content from './content'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      page: null
    }
  }

  setPage = (e) => {
    this.setState({page: e.target.id.toLowerCase()})
  }

  render() {
    const pageToRender = content[this.state.page] || null
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <Navigator onClick={this.setPage}/>
        </div>

        <div className={'display'}>
            <Display page={this.state.page}>
              <div>{ pageToRender && pageToRender() }</div>
            </Display>
        </div>
      </div>
    );
  }
}

export default App;
