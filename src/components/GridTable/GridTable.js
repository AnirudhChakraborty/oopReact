import React, {Component} from 'react';
import {Table} from 'reactstrap';
import TableHeader from "./TableHeader";

export default class GridTable extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Table>
        <TableHeader header={this.props.header}/>
      </Table>
    );
  }
}
