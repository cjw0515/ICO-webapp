import React, { Component } from 'react';
import Intro from './components/Intro'
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

  handleBonus = (givenDate) => {
    const formattedGivenDate = new Date(givenDate);
    let today = new Date();
    let msDiff = formattedGivenDate - today;
    let days = parseInt(msDiff / (24 * 3600 * 1000));
    console.log(typeof days);
    let bonus = 0;

    switch(true){
      case(days < 5):
        bonus=0;
        break;
      case(days < 10):
        bonus=0.05;
        break;
      case(days < 15):
        bonus=0.1;
        break;
      case(days < 20):
        bonus=0.2;
        break;
      default:
        bonus=0;
        break;
    }

    return bonus;
  }

  render() {

    const givenDate = "May, 3, 2018";
    const bonus = this.handleBonus(givenDate);

    return (
      <div>
        <MuiThemeProvider>
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
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
