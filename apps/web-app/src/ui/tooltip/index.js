import React, { useState } from "react";
import "./index.scss";

const Tooltip = ({ children, text }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {isVisible && (
        <div className="tooltip-box">
          {text}
          <span className="tooltip-arrow"></span>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
