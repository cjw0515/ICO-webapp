import React, { Component } from 'react';
import Intro from './components/Intro'
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import * as utils from './utils/utils'

class App extends Component {



  render() {

    const givenDate = "May, 15, 2018";
    const bonus = utils.getBonus(givenDate);

    return (
      <div>
        <Intro
          givenDate={givenDate}
          bonus={bonus}
          />
        <Header/>
        <Nav/>
        <Main
          givenDate={givenDate}
          bonus={bonus}
          />
      </div>
    );
  }
}

export default App;
