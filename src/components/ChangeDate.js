import React from "react";
import { Today } from "@material-ui/icons";

function ChangeDate({ title, callback }) {
  return (
    <button onClick={callback} className="changeDate">
      <Today />
      {title}
    </button>
  );
}

export default ChangeDate;
