import React, { Component } from "react";
import { connect } from "react-redux";

class NewComp extends Component {
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
        <h3 style={this.styles}>{this.props.message}</h3>
        <button onClick={this.props.ButtonChange}>Subscribe</button>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    message: state.message,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    ButtonChange: () => dispatch({ type: "message change" }),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(NewComp);
