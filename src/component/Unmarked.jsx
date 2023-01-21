import React from "react";
import "./Unmarked.css";
import {FaBackward} from "react-icons/fa"

const Unmarked = () => {
  return (
    <>
      <div className="modal">
        <div className="back_icon">
            <span style={{cursor:"arrow"}}><FaBackward></FaBackward></span>
            <span style={{marginBottom:"4px"}}><h4>Back</h4></span>
        </div>
        <h1>Unmark funds as collateral</h1>
        <h4 style={{ fontSize: "15px", color: "grey", marginTop: "1em" }}>
          Select the funds you wish to unmark as collateral
        </h4>
        <h2 style={{ fontSize: "20px", color: "grey", marginTop: "1em" }}>
          List of mututal funds-
        </h2>

        <div className="unmarked">
          <div className="unmarked_child">
            <div className="input_tag">
              <input type="checkbox" name="my-checkbox" />
            </div>
            <div>
              <h5>SBI Mutual Fund</h5>
              <h5 style={{ color: "rgba(129, 129, 165, 1)" }}>
                Marked value ₹ 50000
              </h5>
            </div>
          </div>
        </div>
        <div className="unmarked">
          <div className="unmarked_child">
            <div className="input_tag">
              <input type="checkbox" name="my-checkbox" />
            </div>
            <div>
              <h5>SBI Mutual Fund</h5>
              <h5 style={{ color: "rgba(129, 129, 165, 1)" }}>
                Marked value ₹ 50000
              </h5>
            </div>
          </div>
        </div>

        <div className="unmarked">
          <div className="unmarked_child">
            <div className="input_tag">
              <input type="checkbox" name="my-checkbox" />
            </div>
            <div>
              <h5>SBI Mutual Fund</h5>
              <h5 style={{ color: "rgba(129, 129, 165, 1)" }}>
                Marked value ₹ 50000
              </h5>
            </div>
          </div>
        </div>
        <div className="unmarked">
          <div className="unmarked_child">
            <div className="input_tag">
              <input type="checkbox" name="my-checkbox" />
            </div>
            <div>
              <h5>SBI Mutual Fund</h5>
              <h5 style={{ color: "rgba(129, 129, 165, 1)" }}>
                Marked value ₹ 50000
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="unmarked_card">
        <div className="unmarked_card-1">
          <p>New Credit Line Value</p>
          <p style={{ fontWeight: "bold" }}>₹ 23000</p>
        </div>
        <div className="unmarked_card-2">
          <button className="unmarked_card_btn">Unmark funds</button>
        </div>
      </div>
      </>
  );
};

export default Unmarked;
