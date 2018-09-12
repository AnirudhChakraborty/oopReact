import React from 'react';
import {Table} from "reactstrap";

const GridTable = ({rows, cols, tableProperties, ...props}) => {
  return(
    <Table {...tableProperties}>
        <thead>
          <tr>
            {cols.map((col, index) => (
              <th key={index}>{col.title}</th>
            ))}
          </tr>
        </thead>
      <tbody>
      {rows.map((row, index) => (
        <tr key={index}>
          {cols.map((col, key) => (
            <td key={key}>{col.render(row)}</td>
          ))}
        </tr>
      ))}
      </tbody>
    </Table>
  );
};

export default GridTable;
