import React, { component } from "react";
import { connect } from "react-redux";

export default class newComp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Subscribe to simplilearn",
    };
  }

  styles = {
    fontStyle: "Italic",
    color: "purple",
  };

  ButtonChange = () => {
    this.setState({
      message: "Thank you for subscribing",
    });
  };
  render() {
    return (
      <div className="App">
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.ButtonChange}>Subscribe</button>
      </div>
    );
  }
}
