import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import quotes from '../loaders/yodaQuotes'

class Portal extends Component {
  constructor(props) {
    super(props)
    this.state = { portal: false, target: 'body' }
  }

  setPortal = () => {
    this.setState({ portal: true })
  }

  unsetPortal = () => {
    this.setState({ portal: false })
  }

  renderInPortal = () => {
    const { target } = this.state
    return ReactDOM.createPortal(
      this.renderCard(),
      document.querySelector(target)
    )
  }

  renderCard = () => {
    return (
      <div className="cardPortal">
        <div>
          <div className="yoda" />
          <div className="quote">
            {quotes[Math.floor(Math.random() * 10) + 0]}
          </div>
        </div>
        <button
          onClick={this.setPortal}
          className={'btn btn-warning btn-lg btn-block'}
        >
          {'Open Portal'}
        </button>
        <button
          onClick={this.unsetPortal}
          className={'btn btn-info btn-lg btn-block'}
        >
          {'Close Portal'}
        </button>
      </div>
    )
  }

  render() {
    console.log('portal !!!')
    const { portal } = this.state
    return <div>{portal ? this.renderInPortal() : this.renderCard()}</div>
  }
}

export default Portal
