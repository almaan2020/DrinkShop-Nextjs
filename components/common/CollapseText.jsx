import { useState } from "react";
import { Collapse } from "react-bootstrap";
import config from "../../config/config.json";

const CollapseText = (props) => {
  const [open, setOpen] = useState(false);
  const { text } = props;

  if (text.length < config.collapseTextTreshhold)
    return (
      <div>
        <h6>Description:</h6>
        <div className="text-justify">{text}</div>
      </div>
    );

  return (
    <div className="collapse-group">
      <h6>Description:</h6>
      <div className="text-justify">
        {text.split(".")[0]}
        <Collapse in={open}>
          <span id="collapse-text">
            {text.slice(text.split(".")[0].length)}
          </span>
        </Collapse>
        <a className="more" onClick={() => setOpen(!open)}>
          {" "}
          {open ? "Less..." : "More..."}
        </a>
      </div>
    </div>
  );
};

export default CollapseText;
