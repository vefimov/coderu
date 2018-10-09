import React, { Component } from 'react';

class Board extends Component {
  constructor() {
    super();
  }

  renderCells() {
    const cellsArr = new Array(this.props.cells).join(',').split(',');

    return cellsArr.map(() => {
      return <td />
    });
  }

  renderRows() {
    const rowsArr = new Array(this.props.rows).join(',').split(',');

    return rowsArr.map(() => {
      return <tr>{this.renderCells()}</tr>
    });
  }

  render() {
    return <form>
      <table cellPadding="0" cellSpacing="0" border="1">
        {this.renderRows()}
      </table>
    </form>
  }
}

export default Board;
