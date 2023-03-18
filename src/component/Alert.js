import React from "react";

function Alert(props) {
  // FIRST LATER CAPITALIZE

  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{height: '50px'}}>
   { props.alert && <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
      </div> }
      </div>
    
  );
}

export default Alert;

// her props.alert && some item

// here props.alert false so some item not show and true to show some item
