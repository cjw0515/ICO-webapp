import React from 'react';
import Clock from './Clock'

const style2 = {
  border: '1px solid gray',
  borderRadius: '16px',
  padding: '0 24px',
  marginBottom: '30px'
}

const Card = (props) => (
  <div>
  <div className="row">
    <div className="8u 12u$(small)">
      <ul className="actions vertical">
        <div className="row">

          <div className="6u 12u$(small)">
              <h3>Investment</h3>
              <div style={style2}>
                0 XCO
              </div>
          </div>

          <div className="6u 12u$(small)">
            <div>{props.coin}</div>
            <div class="row">
              <div class="3u 12u$(small)">
                <input type="text" name="eth" value='1'/>
              </div>
              <div class="9u$ 12u$">
               <p>3,174 + <u>47%</u> = 4983 XCO</p>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>

    <div className="4u 12u$(small)">
      <Clock/>
    </div>
  </div>
    <div class="row 50% uniform">
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
      <div class="8u$"><button class="button fit">BUYNOW</button></div>
    </div>
  </div>
);

export default Card;
