import React, { Component } from 'react';
import Footer from './Footer'
import DashBoard from './DashBoard';

class Main extends Component{

  render(){
    return(
      <div id="main">
        <DashBoard
          givenDate={this.props.givenDate}
          bonus={this.props.bonus}
          />
        <Footer/>
      </div>
    )
  }
}

export default Main;
