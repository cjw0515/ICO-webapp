import React, { Component } from 'react';
import Footer from './Footer'
import DashBoard from './DashBoard';

class Main extends Component{

  render(){
    return(
      <div id="main">
        <DashBoard/>
          <article class="post featured">
            <header class="major">
              <span class="date">April 25, 2017</span>
              <h3><a href="#">And this is a<br />
              massive headline</a></h3>
            </header>
            <a href="#" class="image main"><img src="images/pic01.jpg" alt="" /></a>
            <ul class="actions">
              <li><button class="button big">더보기</button></li>
            </ul>
          </article>          
        <Footer/>
      </div>
    )
  }
}

export default Main;
