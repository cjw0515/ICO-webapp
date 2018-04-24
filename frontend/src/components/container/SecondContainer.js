import React, { Component } from 'react';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Contributors from '../Contributors'
import axios from 'axios';
import { addComma } from '../../utils/utils'

const style = {
  border: '1px solid gray',
  borderRadius: '16px',
  padding: '0 28px',
  marginBottom: '20px',
//  height: 255,
//  width: 400,
}
class SecondContainer extends Component{

  render(){

    const raisedPercentage = this.props.raisedUSD === undefined ? 0 : (this.props.raisedUSD / 2000000 * 100).toFixed(1);
    const soldXCO = addComma(this.props.soldXCO);
    const raisedUSD = addComma(this.props.raisedUSD);

    return(
      <div class="row">
        <div class="5u 12u$(small)">
          <div style={style}>
            <h3>TOTALSALE PROGRESS</h3>
            <h4>FUNDRAISING STATUS:</h4>
            <strong>{soldXCO}</strong> XCO tokens SOLD
            <br/><strong>{raisedUSD}</strong> USD raised so far
            <Progress percent={raisedPercentage > 100 ? 100 : raisedPercentage}/>
            <div style={{textAlign:'right'}}>
              20,000,00 $
            </div>
          </div>
        </div>
        <div class="7u 12u$(small)">
          <div style={style}>
            <h3>CONTRIBUTORS</h3>
            <MuiThemeProvider>
              <Contributors
                contributions={ this.props.contributions }
                />
            </MuiThemeProvider>
          </div>
        </div>
      </div>
    );
  }
}

export default SecondContainer;
