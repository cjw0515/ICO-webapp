import React, { Component } from 'react';
import Investment from './investment';
import SecondContainer from './container/SecondContainer'
import * as utils from '../utils/utils'
import axios from 'axios';

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
    raisedUSD:165416,
    soldXCO:1648154,
    contributions: [],
  }

  componentDidMount() {
    this.loadContributions();
    this.loadTotal();
  }

  loadContributions = () => {
    return axios.get('/api/contribution').then(
      response => {
        const data = response.data;
        this.setState({
          contributions: data
        });
      }
    );
  }

  loadTotal = () => {
    return axios.get('/api/contribution/sum').then(
      response => {
        const data = response.data;
        const result = utils.calculateUSD(data);
        this.setState({
          raisedUSD: result.totalUSD,
          soldXCO: result.totalXCO
        });
      }
    );
  }

  buyCoin = (email, coin, amount, xco) => {
    if( amount === 0 ){
      alert( '갯수를 넣어주세요.');
      return;
    }
    return axios.post('/api/contribution/',{
      email: email,
      coin: coin,
      amount: amount,
      xco: xco
    }).then(
      response => {
        this.loadContributions();
        this.loadTotal();
        this.setState({
          amount: 0
        });
      }
    );
  }

  handleCoinValue = (value) => {
    const { amount } = this.state;
    const result = utils.calculateXCO(value, amount, this.props.bonus );
    this.setState({
      coin: value,
      totalXCO: result.totalXCO,
      XCO: result.XCO
    });
  }

  handleChange = (e) =>{
    const curValue = e.target.value;
    const newValue = curValue.replace(/[^0-9]/g, '');
    const amount = newValue;
    const coin = this.state.coin;
    const result = utils.calculateXCO(coin, amount, this.props.bonus );

    this.setState({
      amount: amount,
      totalXCO: result.totalXCO,
      XCO: result.XCO
    })
  }

  render(){

    const { coin, amount, totalXCO, XCO, raisedUSD, soldXCO, contributions } = this.state;
    const { handleCoinValue, handleChange, buyCoin } = this;


    return(
      <div>
        <Investment
          coin={coin}
          amount={amount}
          onClick={handleCoinValue}
          onChange={handleChange}
          givenDate={this.props.givenDate}
          bonus={this.props.bonus}
          totalXCO={totalXCO}
          XCO={XCO}
          buyCoin={buyCoin}
          />
        <SecondContainer
          raisedUSD={raisedUSD}
          soldXCO={soldXCO}
          contributions={contributions}
          />
      </div>
    )
  }
}

export default DashBoard;
