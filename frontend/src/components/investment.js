import React from 'react';
import Clock from './Clock'
import { addComma } from '../utils/utils'

const style2 = {
  border: '1px solid gray',
  borderRadius: '16px',
  padding: '0 24px',
  marginBottom: '20px'
}

const Investment = (props) => (
  <div style={style2}>
  <div className="row">
    <div className="8u 12u$(small)">
      <ul className="actions vertical">
        <div className="row">

          <div className="6u 12u$(small)">
              <h3>Investment</h3>
              <div style={style2}>
                {addComma(props.totalXCO)} XCO
              </div>
          </div>

          <div className="6u 12u$(small)">
            <div>{props.coin}</div>
            <div class="row">
              <div class="4u 12u$(small)">
                <input type="text" value={props.amount} onChange={props.onChange}/>
              </div>
              <div class="8u$ 12u$">
               <p>{props.XCO} + <u>{props.bonus*100}%</u> = {addComma(props.totalXCO)} XCO</p>

              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>

    <div className="4u 12u$(small)">
      <Clock
        givenDate={props.givenDate}
        />
    </div>
  </div>
    <div class="row 70% uniform">
      <div class="2u"><button
        class="button special fit"
        onClick={()=>{props.onClick('BTC')}}
        style={props.coin === 'BTC'?{backgroundColor:'#18bfef'}:{backgroundColor:'#212931'}}
        >BTC</button></div>
      <div class="2u"><button
        class="button special fit"
        onClick={()=>{props.onClick('ETH')}}
        style={props.coin === 'ETH'?{backgroundColor:'#18bfef'}:{backgroundColor:'#212931'}}
        >ETH</button></div>
      <div class="8u$"><button class="button fit" onClick={
        ()=>{
          props.buyCoin("cjw0515@naver.com", props.coin, props.amount, props.totalXCO);          
        }
      }>BUYNOW</button></div>
    </div>
    <div style={{padding: '0 24px', marginBottom: '20px'}}>
    </div>
  </div>
);

export default Investment;
