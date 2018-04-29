import React, { Component } from 'react'
import './App.css'
import Navigator from './components/navigator'
import Display from './loaders/displayLoader'
import content from './pages/content'
import Welcome from './pages/welcome'
import ErrorHandler from './components/errorHandler'
import Header from './components/header'
import { ThemeContext, themes } from './context/ThemeContext'

class App extends Component {
  constructor(props) {
    super(props)

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

    this.state = {
      page: null,
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    }
  }

  setPage = e => {
    this.setState({ page: e.target.id.toLowerCase() })
  }

  render() {
    console.log('app-state', this.state)
    const pageToRender = content[this.state.page] || null
    return (
      <ThemeContext.Provider value={this.state}>
        <div className="App">
          <ErrorHandler>
            <Header>
              <Navigator onClick={this.setPage} />
            </Header>
            <div className={'display'}>
              <Display page={this.state.page}>
                <div>{pageToRender ? pageToRender() : <Welcome />}</div>
              </Display>
            </div>
          </ErrorHandler>
        </div>
      </ThemeContext.Provider>
    )
  }
}

export default App
