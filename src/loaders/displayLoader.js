import React, { Component } from "react";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.page !== this.props.page) {
      this.setState({ animation: false });
      setTimeout(() => {
        this.setState({ animation: true });
      }, 10);
    }
  }

  componentWillUnmount() {
    this.setState({ animation: false });
  }

  render() {
    const { children } = this.props;
    return (
      <div className={"monitor"}>
        <div className={"screen"}>
          <div
            className={`animateScreen-out ${this.state.animation
              ? "animateScreen-in"
              : ""}`}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default Display;
