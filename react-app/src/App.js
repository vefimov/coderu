import React, { Component } from 'react';
import axios from 'axios';

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
      initialized: false,
      rows: 8,
      cells: 8,
      checkerRow: 1,
      checkerCell: 1,
    };

    this.handleRowsChange = this.handleRowsChange.bind(this);
    this.handleCellsChange = this.handleCellsChange.bind(this);
    this.handleCheckerRowChange = this.handleCheckerRowChange.bind(this);
    this.handleCheckerCellChange = this.handleCheckerCellChange.bind(this);
  }

  componentDidMount() {
    axios.get('/data.json')
      .then((response) => {
        this.setState({ ...response, initialized: true });
      });
  }

  handleCheckerRowChange(event) {
    this.setState({ checkerRow: +event.currentTarget.value });
  }

  handleCheckerCellChange(event) {
    this.setState({ checkerCell: +event.currentTarget.value });
  }

  handleRowsChange(event) {
    this.setState({ rows: +event.currentTarget.value });
  }

  handleCellsChange(event) {
    this.setState({ cells: +event.currentTarget.value });
  }

  render() {
    const { rows, cells, checkerRow, checkerCell, initialized } = this.state;

    if (!initialized) {
      return <div>Loading....</div>
    }

    return <form>
      <Board rows={rows} checkerRow={checkerRow} checkerCell={checkerCell} cells={cells} />

      <input type="number" defaultValue={checkerRow} placeholder="Checker Row" onChange={this.handleCheckerRowChange} />
      <input type="number" defaultValue={checkerCell} placeholder="Checker Cell" onChange={this.handleCheckerCellChange} />

      <hr />
      <input type="number" defaultValue={rows} placeholder="Rows" onChange={this.handleRowsChange} />
      <input type="number" defaultValue={cells} placeholder="Cells" onChange={this.handleCellsChange} />
    </form>
  }
}

export default App;
