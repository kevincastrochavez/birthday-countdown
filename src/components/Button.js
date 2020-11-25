import React from "react";

function Button({ title, callback }) {
  return (
    <button onClick={callback} className="button">
      {title}
    </button>
  );
}

export default Button;
