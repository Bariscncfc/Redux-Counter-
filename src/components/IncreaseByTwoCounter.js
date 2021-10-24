import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increaseByTwoCounter } from "../redux/actions/counterActions";

class IncreaseByTwoCounter extends Component {
  render() {
    return (
      <div>
        <button
          style={{
            backgroundColor: "white",
            width: 100,
            height: 40,
            textAlign: "center",
            borderRadius: 8,
            color: "black",
            fontSize: 20,
            fontWeight: "bold",
          }}
          onClick={(e) => {
            this.props.dispatch(increaseByTwoCounter());
          }}
        >
          +2
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(increaseByTwoCounter, dispatch) };
}

export default connect(mapDispatchToProps)(IncreaseByTwoCounter);
