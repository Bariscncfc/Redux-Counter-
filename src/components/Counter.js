import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "white",
          width: 300,
          height: 80,
          textAlign: "center",
          borderRadius: 8,
        }}
      >
        <h1 style={{ color: "black", fontSize: 44, marginTop: 5 }}>
          {this.props.counter}
        </h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { counter: state.counterReducer };
}

export default connect(mapStateToProps)(Counter);
