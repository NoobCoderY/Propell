import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./CardModal.css";
import WarningCard from "./WarningCard";

const CardModal = (props) => {
  const [displayModal, setDisplayModal] = React.useState(false);
  return (
    <>
      <div>
        <Modal open={props.open} onClose={props.onCloseModal} center>
          <div className="modal">
            <h2>Unmark funds as collateral</h2>
            <h6 style={{ fontSize: "15px", color: "grey", marginTop: "1em" }}>
              Select the funds you wish to unmark as collateral
            </h6>
            <h3 style={{ fontSize: "20px", color: "grey", marginTop: "1em" }}>
              List of mututal funds-
            </h3>

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
              <button
                className="unmarked_card_btn Button CenterAlign"
                onClick={() => {setDisplayModal(!displayModal)
                console.log("yash");}}
              >
                Unmark funds
              </button>
            </div>
          </div>
          
        </Modal>
      </div>
    </>
  );
};

export default CardModal;
