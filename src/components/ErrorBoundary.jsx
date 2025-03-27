import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error: error };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return (
        <h2 className="text-danger">
          Error occured:{this.state.error.message}
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
