import React, { Component } from 'react';
import Clock from './Clock'

class Intro extends Component{

  render(){

    const { givenDate, bonus } = this.props;

    return(
      <div id="intro">
        <h1>XCO<br />
        ICO</h1>
      <p>XCO ICO Started! your ICO bonus <strong>({bonus*100}%)</strong> end in</p>
        <Clock
          givenDate={givenDate}
          />
        <p><strong><u>Buy XCO Coin Now</u></strong></p>
        <ul class="actions">
          <li><a href="#header" class="button icon solo fa-arrow-down scrolly">Continue</a></li>
        </ul>
      </div>
    )
  }
}

export default Intro;
