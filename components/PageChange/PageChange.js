import React from "react";

export default function PageChange(props) {
  return (
    <div>
      <div className="page-transition-wrapper-div">
        <div className="page-transition-icon-wrapper mb-3">
        </div>
        <h4 className="title text-white">
          Loading page contents for: {props.path}
        </h4>
      </div>
    </div>
  );
}
