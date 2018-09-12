import React, {Component} from 'react';
import GridTable from "../../components/GridTable/GridTable";

import * as tableData from '../../utils/sample-data/table-data';
import {tableConstants} from "./tableConstant";

export default class TableDisplay extends Component {


  openEditModal(id) {
    alert(id);
  }

  openRemoveModal(id) {
    alert(id);
  }

  render() {
    return (
      <GridTable rows={tableData.tableData}
                 cols={tableConstants(this.openEditModal, this.openRemoveModal)}
                 tableProperties={tableData.tableProperties}
      />
    );
  }
}
