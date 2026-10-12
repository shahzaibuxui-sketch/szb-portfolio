import { Component } from "react";

/**
 * Catches render errors in any child page and shows a fallback
 * instead of a blank/black screen. Class component because
 * React only supports error boundaries via lifecycle methods.
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log so you can see the real cause in the console.
    console.error("Route crashed:", error, info);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="errorboundary">
          <h1 className="h2">Something went wrong.</h1>
          <p className="body">Reload the page to try again.</p>
          <button
            type="button"
            className="btn btn--outline"
            onClick={this.handleReload}
          >
            <span className="btn__content">Reload the page</span>
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}