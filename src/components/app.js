import React, { Component } from "react";
import Button from "./Button";
import ChangeDate from "./ChangeDate";
import Clock from "./Clock";
import LargeText from "./LargeText";
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
      return [
        <Clock />,
        <ChangeDate
          title="Change Date"
          callback={() => this.setState({ active: false })}
        />,
        <LargeText text="04/03" />,
        <label className="grid__remaining">
          Remaining until your 21st birthday
        </label>,
      ];
    } else {
      return [
        <Picker />,
        <Button
          title="Generate Countdown"
          callback={() => this.setState({ active: true })}
        />,
      ];
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

        {this.renderItems()}
      </div>
    );
  }
}
