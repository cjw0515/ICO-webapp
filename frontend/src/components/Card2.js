import React from 'react';
const style = {
  border: "2px solid gray",
};
const Card2 = () => (
  <div className="row">
    <div className="8u 12u$(small)">
      <ul className="actions vertical" style={style}>
      <header className="major">
        <h3><a href="#">calculator<br />
        </a></h3>
      </header>
      </ul>
      <ul className="actions vertical" style={style}>
      <header className="major">
        <span className="date">April 25, 2017</span>
        <h3><a href="#">And this is a<br />
        massive headline</a></h3>
      </header>
      </ul>
    </div>
    <div className="4u$ 12u$(small)">
      <ul className="actions vertical" style={style}>
      <h2>Blockquote</h2>
      <blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis.</blockquote>
      </ul>
    </div>
  </div>
);

export default Card2;
