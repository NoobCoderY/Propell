import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./CardModal.css";

const CardModal = (props) => {
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
                        <input type="checkbox" name="my-checkbox"  />
                      </div>
                      <div>
                          <h5>SBI Mutual Fund</h5>
                          <h5 style={{color:"rgba(129, 129, 165, 1)"}}>Marked value ₹ 50000</h5>
                      </div>
                    </div>
                  </div>
                  <div className="unmarked">
              <div className="unmarked_child">
                <div className="input_tag">
                  <input type="checkbox" name="my-checkbox"  />
                </div>
                <div>
                    <h5>SBI Mutual Fund</h5>
                    <h5 style={{color:"rgba(129, 129, 165, 1)"}}>Marked value ₹ 50000</h5>
                </div>
              </div>
            </div>
            
                
            
            <div className="unmarked">
              <div className="unmarked_child">
                <div className="input_tag">
                  <input type="checkbox" name="my-checkbox"  />
                </div>
                <div>
                    <h5>SBI Mutual Fund</h5>
                    <h5 style={{color:"rgba(129, 129, 165, 1)"}}>Marked value ₹ 50000</h5>
                </div>
              </div>
            </div>
            <div className="unmarked">
              <div className="unmarked_child">
                <div className="input_tag">
                  <input type="checkbox" name="my-checkbox"  />
                </div>
                <div>
                    <h5>SBI Mutual Fund</h5>
                    <h5 style={{color:"rgba(129, 129, 165, 1)"}}>Marked value ₹ 50000</h5>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default CardModal;
