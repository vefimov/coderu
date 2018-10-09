import React, { Component } from 'react';
import { Button, FormControl } from 'react-bootstrap';

import Board from './Board';
import './App.css';

class Button2 extends Component {

  render() {
    return <button>Button</button>
  }
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      rows: 8,
      cells: 8
    };

    this.handleRowsChange = this.handleRowsChange.bind(this);
    this.handleCellsChange = this.handleCellsChange.bind(this);
  }

  handleRowsChange(event) {
    this.setState({ rows: +event.currentTarget.value });
  }

  handleCellsChange(event) {
    this.setState({ cells: +event.currentTarget.value });
  }

  render() {
    return <form>
      <Board rows={this.state.rows} cells={this.state.cells} />

      <FormControl type="text" defaultValue={this.state.rows} placeholder="Rows" onChange={this.handleRowsChange} />
      <FormControl type="text" defaultValue={this.state.cells} placeholder="Cells" onChange={this.handleCellsChange} />
    </form>
  }
}

export default App;
