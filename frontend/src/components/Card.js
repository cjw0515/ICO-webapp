import React from 'react';
const style = {
  border: "2px solid gray",
};
const Card = () => (
  <div className="row">
    <div className="8u 12u$(small)">
      <ul className="actions vertical" style={style}>
        <div className="row">
          <div className="6u 12u$(small)">
            <header className="major">
              <h3>calculator<br /></h3>
            </header>
            <div>
              0 XCO
            </div>
            <button className = "button">BTC</button>
            <button className = "button">ITH</button>
          </div>
          <div className="6u 12u$(small)">
            <input type = "text" name="eth"/>eth 
          </div>
        </div>
      </ul>
    </div>
    <div className="4u 12u$(small)">
      <ul className="actions vertical" style={style}>
      <header className="major">
        <h3><a href="#">timer<br />
        </a></h3>
      </header>
      </ul>
    </div>
  </div>
);

export default Card;
