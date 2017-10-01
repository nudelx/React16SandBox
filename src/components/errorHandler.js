import React, { Component } from "react";

class ErrorHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    console.log("error", error); // eslint-disable-line
    console.log("error", info); // eslint-disable-line
    debugger
    this.setState({ hasError: true, error, info });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <div class="alert alert-danger" role="alert">
            <strong>Oh snap!</strong> WE HAVE the ERROR !!!!! YEAH !!!!
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorHandler;
