import React, { Component } from 'react';
import Footer from './Footer'
import DashBoard from './DashBoard';

class Main extends Component{

  render(){
    return(
      <div id="main">
        <DashBoard/>    
        <Footer/>
      </div>
    )
  }
}

export default Main;
