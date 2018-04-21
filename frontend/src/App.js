import React, { Component } from 'react';
import Intro from './components/Intro'
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <div>
  <MuiThemeProvider>
          <Intro/>
          <Header/>
          <Nav/>
          <Main/>
  </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
