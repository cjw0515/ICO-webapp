import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

class Contributors extends Component{
  state = {
    fixedHeader: false,
    fixedFooter: true,
    stripedRows: false,
    showRowHover: false,
    selectable: false,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: false,
    height: '300px',
  };

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };

  render() {

    const { contributions }= this.props;

    return (
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan="5" tooltip="Details" style={{textAlign: 'center'}}>
                Details
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="The DATE">DATE</TableHeaderColumn>
              <TableHeaderColumn tooltip="The E-MAIL">E-MAIL</TableHeaderColumn>
              <TableHeaderColumn tooltip="The COIN">COIN</TableHeaderColumn>
              <TableHeaderColumn tooltip="The AMOUNT">AMOUNT</TableHeaderColumn>
              <TableHeaderColumn tooltip="The XCO">XCO</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {contributions.map( (row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{row.date}</TableRowColumn>
                <TableRowColumn>{row.email}</TableRowColumn>
                <TableRowColumn>{row.coin}</TableRowColumn>
                <TableRowColumn>{row.amount}</TableRowColumn>
                <TableRowColumn>{row.xco}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
          <TableFooter
            adjustForCheckbox={this.state.showCheckboxes}
          >
            <TableRow>
              <TableRowColumn>DATE</TableRowColumn>
              <TableRowColumn>E-MAIL</TableRowColumn>
              <TableRowColumn>COIN</TableRowColumn>
              <TableRowColumn>AMOUNT</TableRowColumn>
              <TableRowColumn>XCO</TableRowColumn>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    );
  }
}

export default Contributors;
