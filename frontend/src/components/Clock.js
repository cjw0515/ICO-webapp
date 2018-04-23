import React, {Component} from 'react';

class Clock extends Component{

  componentDidMount(){
    let intervalId = setInterval(this.timer, 1000);
    this.setState({intervalId: intervalId})
  }

  state = {
    givenDate: this.props.givenDate,
    currentCount: 0,
    intervalId:''
  }

  timer = () => {
    this.setState({
      currentCount: this.state.currentCount + 1
    })
  }

  createClock = () => {
    const formattedGivenDate = new Date(this.state.givenDate);
    let today = new Date();
    let msDiff = formattedGivenDate - today;
    let days = parseInt(msDiff / (24 * 3600 * 1000));
    let hours = parseInt(msDiff / (3600 * 1000) - (days * 24));
    let mins = parseInt(msDiff / (60 * 1000) - (days * 24 * 60) - (hours * 60));
    let secs = parseInt(msDiff / (1000) - (mins * 60) - (days * 24 * 60 * 60) - (hours * 60 * 60));

    let element = React.createElement(
      'div', {
        className: 'clockWrapper',
      },
      React.createElement(
        'div', {
          className: 'numbers',
        },
        React.createElement(
          'span', {
            className: 'days',
          },
          days
        ),
        React.createElement(
          'span', {
            className: 'hours',
          },
          hours
        ),
        React.createElement(
          'span', {
            className: 'mins',
          },
          mins
        ),
        React.createElement(
          'span', {
            className: 'secs',
          },
          secs
        )
      ),
      React.createElement(
        'div', {
          className: 'labels',
        },
        React.createElement(
          'span', {
            className: 'daysLabel',
          },
          'Days'
        ),
        React.createElement(
          'span', {
            className: 'hoursLabel',
          },
          'Hours'
        ),
        React.createElement(
          'span', {
            className: 'minsLabel',
          },
          'Mins'
        ),
        React.createElement(
          'span', {
            className: 'secsLabel',
          },
          'Secs'
        )
      )
    );
    return element;
  }

  render(){

    let ele = this.createClock();

    return(
      <div>
        {ele}
      </div>
    )
  }
}

export default Clock;
