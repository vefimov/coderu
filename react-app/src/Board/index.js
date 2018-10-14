import React, { Component } from 'react';

import './index.css';
import Checker from '../Checker';

class Board extends Component {
  static getDirevedStateFromProps(props, state) {
    return { rows: props.rows, cells: props.cells };

    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      rows: props.rows,
      cells: props.cells,
      checkerRow: props.checkerRow,
      checkerCell: props.checkerCell,
    };
  }

  renderCells(rowIndex) {
    const { checkerCell, checkerRow } = this.props;
    const cellsArr = [];

    for (let i = 0; i < this.props.rows; i++) {
      cellsArr.push(i);
    }

    return cellsArr.map((cellIndex) => {
      return <td key={cellIndex}>
        {checkerRow === rowIndex && checkerCell === cellIndex ? <Checker /> : null}
        </td>;
    });
  }

  renderRows() {
    const rowsArr = [];

    for (let i = 0; i < this.props.rows; i++) {
      rowsArr.push(i);
    }

    return rowsArr.map((rowIndex) => {
      return <tr key={rowIndex}>{this.renderCells(rowIndex)}</tr>
    });
  }

  render() {
    return <div>
      <table cellPadding="0" cellSpacing="0" border="1">
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    </div>
  }
}

export default Board;
