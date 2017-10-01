import React, {Component} from 'react'
import ReactDOM from 'react-dom'
const quotes = [
  'When nine hundred years old you reach, look as good you will not.',
  'Truly wonderful, the mind of a child is.',
  'That is why you fail.',
  'A Jedi uses the Force for knowledge and defense, never for attack.',
  'Adventure. Excitement. A Jedi craves not these things.',
  'Judge me by my size, do you?',
  'Fear is the path to the dark side…fear leads to anger…anger leads to hate…hate leads to suffering.',
  'Wars not make one great.',
  'Luminous beings are we…not this crude matter.',
  'Do. Or do not. There is no try.',

]


class Portal extends Component {

  constructor(props) {
    super(props)
    this.state = {portal: false}
  }

  setPortal = () => {
    this.setState({portal: true})
  }

  renderInPortal = () => {
    return ReactDOM.createPortal(
      this.renderCard(),
      document.querySelector('body')
    );
  }

  renderCard = () => {
    return (
      <div>
        <div className="cardPortal">
          <div className="yoda"></div>
          <div className="quote"> {quotes[Math.floor(Math.random() * 10) + 0 ]}</div>
        </div>
        <button onClick={this.setPortal} className={'btn btn-warning btn-lg btn-block'}> Open Portal</button>
      </div>
    )
  }

  render() {
    console.log('portal !!!')
    const { portal } = this.state
    return (
      <div>
        {this.renderCard()}
        { portal ? this.renderInPortal() : null}
      </div>
    )
}

}


export default Portal
