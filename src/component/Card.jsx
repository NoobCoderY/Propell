import React from "react";
import Footer from "./Footer";
import { FaBell } from "react-icons/fa";
import "./Card.css";



const Card = (props) => {
    
  return (
    <>
      <div className="Container">
        <div className="header">
          <div className="name">
            <span> WELCOME</span>
            <span style={{ fontWeight: "bold", marginLeft: "1rem" }}>Yash</span>
          </div>
          <div className="logo"><span><FaBell size={"1.5em"}  style={{borderColor:"1.5px solid rgba(85, 22, 170, 1)"}}/></span></div>
        </div>
        <div className="portfolio">
          <div>
            <h2>Total Portfolio Value</h2>
            <h2> $ 150000</h2>
          </div>
        </div>
        <div className="Second_section">
          <div className="Second_section-1">
            <h5>Login to Value</h5>
            <h1>Healthy!!</h1>
          </div>
          <div>
            <button className="Second_section_button">Learn More</button>
          </div>
        </div>
        <div className="third_section">
          <button className="third_section_button">
            Increase Credit Limit
          </button>
        </div>
        <div className="fourth_section">
          <div className="fourth_section-1">
            <h1>Marked Mutual Funds</h1>
            
          </div>
          <div>
            <button className="fourth_section_button" onClick={props.onOpenModal}>Unmark funds</button>
          </div>
        </div>
        <div className="main_card">
            <h3>ICICI Small Cap- Direct Plan</h3>
            <div className="main_card-child">
                <span style={{color:" rgba(129, 129, 165, 1)"}}> <h5>Current value</h5></span>
                <span>$480</span>
                <span  style={{color:" rgba(129, 129, 165, 1)"}}><h5>Units</h5></span>
                <span><h3>54</h3></span>
            </div>
            <div className="main_card-child">
                <span style={{color:" rgba(129, 129, 165, 1)"}}> <h5>Folio Number</h5></span>
                <span>$480</span>
                <span  style={{color:" rgba(129, 129, 165, 1)"}}><h5>Nav</h5></span>
                <span><h3>54</h3></span>
            </div>
        </div>
        <div className="main_card">
            <h3>ICICI Small Cap- Direct Plan</h3>
            <div className="main_card-child">
                <span style={{color:" rgba(129, 129, 165, 1)"}}> <h5>Current value</h5></span>
                <span>$480</span>
                <span  style={{color:" rgba(129, 129, 165, 1)"}}><h5>Units</h5></span>
                <span><h3>54</h3></span>
            </div>
            <div className="main_card-child">
                <span style={{color:" rgba(129, 129, 165, 1)"}}> <h5>Folio Number</h5></span>
                <span>$480</span>
                <span  style={{color:" rgba(129, 129, 165, 1)"}}><h5>Nav</h5></span>
                <span><h3>54</h3></span>
            </div>
        </div>
        <div className="main_card">
            <h3>ICICI Small Cap- Direct Plan</h3>
            <div className="main_card-child">
                <span style={{color:" rgba(129, 129, 165, 1)"}}> <h5>Current value</h5></span>
                <span>$480</span>
                <span  style={{color:" rgba(129, 129, 165, 1)"}}><h5>Units</h5></span>
                <span><h3>54</h3></span>
            </div>
            <div className="main_card-child">
                <span style={{color:" rgba(129, 129, 165, 1)"}}> <h5>Folio Number</h5></span>
                <span>$480</span>
                <span  style={{color:" rgba(129, 129, 165, 1)"}}><h5>Nav</h5></span>
                <span><h3>54</h3></span>
            </div>
        </div>
        <div className="main_card">
            <h3>ICICI Small Cap- Direct Plan</h3>
            <div className="main_card-child">
                <span style={{color:" rgba(129, 129, 165, 1)"}}> <h5>Current value</h5></span>
                <span>$480</span>
                <span  style={{color:" rgba(129, 129, 165, 1)"}}><h5>Units</h5></span>
                <span><h3>54</h3></span>
            </div>
            <div className="main_card-child">
                <span style={{color:" rgba(129, 129, 165, 1)"}}> <h5>Folio Number</h5></span>
                <span>$480</span>
                <span  style={{color:" rgba(129, 129, 165, 1)"}}><h5>Nav</h5></span>
                <span><h3>54</h3></span>
            </div>
        </div>
       
      </div>
      <Footer></Footer>

    </>
  );
};

export default Card;
