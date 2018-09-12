import React, {Component} from 'react';

export default class TableBody extends Component{

  /**
   * Accepts Object of data and prepares an array to display
   */

  render(){
    const {data} = this.props; // pull out data props to a variable
    let dataToDisplay = []; // array to save data display values
    // Loops through Object and creates html tag for it
    for (let key in data) {
      dataToDisplay.push(<td key={key}>{data[key]}</td>);
    }
    return(
      <tr>
        {dataToDisplay}
      </tr>
    );
  }
}
