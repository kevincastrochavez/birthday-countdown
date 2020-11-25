import React, { Component } from "react";
import Button from "./Button";
import Clock from "./Clock";
import Picker from "./Picker";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  renderItems = function () {
    if (this.state.active) {
      return [<Clock />];
    } else {
      return (
        <Button
          title="Generate Countdown"
          callback={() => this.setState({ active: true })}
        />
      );
    }
  }.bind(this);

  render() {
    return (
      <div className="grid">
        <div className="grid__title">BirthdayCountdown</div>

        <div className="grid__skew-dark-one-box"></div>
        <div className="grid__skew-dark-two"></div>
        <div className="grid__skew-dark-three"></div>
        <div className="grid__skew-light-one"></div>
        <div className="grid__skew-light-two"></div>
        <div className="grid__skew-light-three-box"></div>

        <Picker />

        {this.renderItems()}
      </div>
    );
  }
}
