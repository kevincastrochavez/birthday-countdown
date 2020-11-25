import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Picker() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="picker">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
}

export default Picker;
