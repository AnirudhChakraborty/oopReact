import React, {Component} from 'react';

export default class TableHeader extends Component {

  /**
   * Accepts Object of headers and prepares an array to display
   */

  render() {
    const {header, widthOfColumn} = this.props; // pull out header props to a variable
    let headerToDisplay = []; // array to save header display values
    // Loops through Object and creates html tag for it
    for (let key in header) {
      headerToDisplay.push(<th width={widthOfColumn[key] + '%'} key={key}>{header[key]}</th>);
    }
    return (
      <thead>
      <tr className={'test'}>
        {headerToDisplay}
      </tr>
      </thead>
    );
  }
}
