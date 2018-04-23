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
    coin:'BTC',
    amount:0,
    XCO:0,
    totalXCO:0,
  }

  handleCoinValue = (value) => {
    const { amount } = this.state;
    const result = this.calculateXCO(value, amount, this.props.bonus );
    this.setState({
      coin: value,
      totalXCO: result.totalXCO,
      XCO: result.XCO
    });
  }

  handleChange = (e) =>{
    const curValue = e.target.value;
    const pattern = /^-?(\d{1,3}([.]\d{0,2})?)?$/;
    const newValue = curValue.replace(/[^0-9]/g, '');
    const amount = newValue;
    const coin = this.state.coin;
    const result = this.calculateXCO(coin, amount, this.props.bonus );

    this.setState({
      amount: amount,
      totalXCO: result.totalXCO,
      XCO: result.XCO
    })
  }

  calculateXCO = ( coin, coinAmount, bonus ) =>{
    const XCO = coin === "BTC" ? coinAmount * 5 : coinAmount * 3;
    const totalXCO = XCO + XCO * bonus;

    return { XCO, totalXCO };
  }

  render(){

    const { coin, amount, totalXCO, XCO } = this.state;
    const { handleCoinValue, handleChange } = this;


    return(
      <div>
        <Card
          coin={coin}
          amount={amount}
          onClick={handleCoinValue}
          onChange={handleChange}
          givenDate={this.props.givenDate}
          bonus={this.props.bonus}
          totalXCO={totalXCO}
          XCO={XCO}
          />
      </div>
    )
  }
}

export default DashBoard;
