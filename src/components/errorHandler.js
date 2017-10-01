import React, { Component } from "react";

class ErrorHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    console.log("error", error); //eslint-disable-line
    console.log("error", info); //eslint-disable-line
    alert(error)
    alert(info)
    this.setState({ hasError: true });
  }

  render() {
    console.log("erro render");
    if (this.state.hasError) {
      return <div>Alex: WE HAVE AN ERROR !!!!! YEA !!!!</div>;
    }
    return this.props.children;
  }
}

export default ErrorHandler;
