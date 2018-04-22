import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Content from './Content';
import Card from './Card';

const style2 = {
  height: 300,
  width: 400,
  margin: 10,
  textAlign: 'center',
  display: 'inline-block',
};

class DashBoard extends Component{

  state={
    coin:'BTC'
  }

  handleCoinValue = (value) => {
    this.setState({
      coin: value
    });
  }

  render(){

    const { coin } = this.state;
    const { handleCoinValue } = this;

    return(
      <div>
        <Card
          coin={coin}
          onClick={handleCoinValue}
          />
      </div>
    )
  }
}

export default DashBoard;
