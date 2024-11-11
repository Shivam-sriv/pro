import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { FaInfo } from "react-icons/fa";
const Tooltip_info = () => {
  return (
    <>
      {["top"].map((placement) => (
        <OverlayTrigger
          className=""
          key={placement}
          placement={placement}
          overlay={
            <Tooltip id={`tooltip-${placement}`}>
              Use 8 or more characters with letters, numbers & symbols*
            </Tooltip>
          }
        >
          <a href="#">
            {" "}
            <FaInfo className="text-white" />
          </a>
        </OverlayTrigger>
      ))}
    </>
  );
};
export default Tooltip_info;
