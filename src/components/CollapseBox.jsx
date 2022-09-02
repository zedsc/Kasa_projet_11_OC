import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

const CollapseBox = ({ content, title, id, className }) => {
  const [open, setOpen] = useState(false);
  const [arrowActive, setArrowActive] = useState(false);

  /**
   * Set arrow rotation when clicking
   */
  const clickRotateArrow = () => {
    if (arrowActive === false) {
      setArrowActive(true);
    } else {
      setArrowActive(false);
    }
  };

  return (
    <div className={className}>
      <Button
        bsPrefix="btn-collapse"
        onClick={() => {
          setOpen(!open);
          clickRotateArrow();
        }}
        aria-controls={title + id}
        aria-expanded={open}
      >
        {title}
        <svg
          className={arrowActive ? "arrow-collapse rotate" : "arrow-collapse"}
          width="25"
          height="15"
          viewBox="0 0 25 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.6635 0.859489L0.530579 3.00462L12.4605 14.9233L24.3904 2.99257L22.2575 0.859489L12.4605 10.6572L2.6635 0.859489Z"
            fill="white"
          />
        </svg>
      </Button>
      <Collapse in={open}>
        <p id={title + id} className={"collapse__txt " + className + "__txt"}>
          {content}
        </p>
      </Collapse>
    </div>
  );
};

export default CollapseBox;
