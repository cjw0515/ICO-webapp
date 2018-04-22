import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Content from './Content';
import Card from './Card';
import Card2 from './Card2';

const style2 = {
  height: 300,
  width: 400,
  margin: 10,
  textAlign: 'center',
  display: 'inline-block',
};

class DashBoard extends Component{

  render(){
    return(
      <div>
        <Card/>        
      </div>
    )
  }
}

export default DashBoard;
