import React from "react";
import "./WarningCard.css";
import "./CardModal.css";
import warnImg from "../images/Popup.png";

const WarningCard = () => {
  return (
    <>
      <div className="Warning_card">
        <p>Are you sure you want to unmark these funds as collateral?</p>
        <div className="image">
          <img src={warnImg} alt=""></img>
        </div>
        <h5 style={{ color: "rgba(129, 129, 165, 1)" }}>
          Your Credit line value will decrease.
        </h5>
        <h5>New Credit Line Value ₹ 23000</h5>
        <div className="unmarked_btn">
          <button className="unmarked_btn-1 ">Go back</button>
          <button className="unmarked_btn-2">Confirm</button>
        </div>
      </div>
    </>
  );
};

export default WarningCard;
