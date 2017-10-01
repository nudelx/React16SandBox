import React, { Component } from "react";
import "./App.css";
import Navigator from "./components/navigator";
import Display from "./loaders/displayLoader";
import content from "./pages/content";
import ErrorHandler from "./components/errorHandler";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: null
    };
  }

  setPage = e => {
    this.setState({ page: e.target.id.toLowerCase() });
  };

  render() {
    console.log('app-state', this.state)
    const pageToRender = content[this.state.page] || null;
    return (
      <div className="App">
        <ErrorHandler>
          <header className="App-header">
            <Navigator onClick={this.setPage} />
          </header>
          <div className={"display"}>
            <Display page={this.state.page}>
              <div>{pageToRender && pageToRender()}</div>
            </Display>
          </div>
        </ErrorHandler>
      </div>
    );
  }
}

export default App;
