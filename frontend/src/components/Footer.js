import React, { Component } from 'react';

class Footer extends Component{
//<a href="#" class="previous">Prev</a>
  render(){
    return(
      <div>
        <footer>
          <div class="pagination">

            <a href="#" class="page active">1</a>
            <a href="#" class="page">2</a>
            <a href="#" class="page">3</a>
            <span class="extra">&hellip;</span>
            <a href="#" class="page">8</a>
            <a href="#" class="page">9</a>
            <a href="#" class="page">10</a>
            <a href="#" class="next">Next</a>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer;
