import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increaseCounter } from "../redux/actions/counterActions";

class IncreaseCounter extends Component {
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
            this.props.dispatch(increaseCounter());
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(increaseCounter, dispatch) };
}

export default connect(mapDispatchToProps)(IncreaseCounter);
