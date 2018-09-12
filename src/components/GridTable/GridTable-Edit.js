import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table} from 'reactstrap';
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

export default class GridTableEdit extends Component {

  /**
   * Accepts 3 Props:
   * 1. tableData (required): it will be an array of tableData to be displayed on table body
   * 2. header (required): it will be an object of key value pair for headers to be printed on table header
   * 3. tableProperties: it will be an object of table properties to alter default configuration of table
   *
   * Currently all the props are passed from a static table-data.jsta.js file in utils folder from App Component.
   * Please refer to App Component for Implementation and table-data.jsta.js for configuration and for format of the tableData to be passed
   *
   * Please note that table hide/display can be handled on containers as per the value length or any property which should
   * be used to control display of table
   */

  render() {
    const {data, header, tableProperties, columnWidth} = this.props;
    return (
      <Table {...tableProperties}>
        <TableHeader widthOfColumn={columnWidth} header={header}/>
        <tbody>
        {data.map((item, key) => (
          <TableBody styleClass={item.styleClass} widthOfColumn={columnWidth} key={key} data={item.data}/>
        ))}
        </tbody>
      </Table>
    );
  }
}

GridTableEdit.propTypes = {
  data: PropTypes.array.isRequired,
  header: PropTypes.object.isRequired,
  tableProperties: PropTypes.object,
  columnWidth: PropTypes.object
};
