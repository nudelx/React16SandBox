import React, { Component } from 'react'

class Display extends Component {
  state = {
    animation: false
  }

  componentWillMount () { // => componentDidMount
    setTimeout(() => {
      this.setState({ animation: true })
    }, 10)
  }

  componentWillReceiveProps(nextProps) { // in this case use componentDidUpdate
    if (nextProps.page !== this.props.page) {
      this.setState({ animation: false })
      setTimeout(() => {
        this.setState({ animation: true })
      }, 10)
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.page !== this.props.page) {
  //     this.setState({ animation: false })
  //     setTimeout(() => {
  //       this.setState({ animation: true })
  //     }, 10)
  //   }
  // }

  componentWillUnmount() { // => this is OK
    this.setState({ animation: false })
  }

  render() {
    const { children } = this.props
    return (
      <div className={'monitor'}>
        <div className={'screen'}>
          <div
            className={`animateScreen-out ${this.state.animation
              ? 'animateScreen-in'
              : ''}`}
          >
            {children}
          </div>
        </div>
      </div>
    )
  }
}

export default Display
