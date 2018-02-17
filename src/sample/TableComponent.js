import React, { Component } from 'react';

export default class TableComponent extends Component {
  cellStyles() {
    return this.props.cellStyle || {
      border:this.props.style.border,
      padding:this.props.style.padding
    }
  }

  renderRows(data) {
    return data.map(( r, i ) => (
      <tr key={i}>
        { r.map(( c, j ) => ( <td key={`${i}-${j}`} style={this.cellStyles()}>{c}</td>)) }
      </tr>
    ));
  }

  render() {
    return (
      <table style={this.props.style}>
        {
          this.props.data.head ?
          <thead style={this.props.theadStyle || {}}>
            {this.renderRows(this.props.data.head)}
          </thead>
          : null
        }
        {
          this.props.data.body ?
          <tbody>
            {this.renderRows(this.props.data.body)}
          </tbody>
          : null
        }
      </table>
    )
  }
}