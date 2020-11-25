import React, { Component } from "react";
import Button from "./Button";
import Picker from "./Picker";

export default class App extends Component {
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

        <Button title="Generate Countdown" />
      </div>
    );
  }
}
