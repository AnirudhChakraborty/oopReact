import React, {Component} from 'react';

export default class TableBody extends Component {

  /**
   * Accepts Object of tableData and prepares an array to display
   */

  render() {
    const {data, widthOfColumn, styleClass} = this.props; // pull out tableData props to a variable
    let dataToDisplay = []; // array to save tableData display values
    // Loops through Object and creates html tag for it
    for (let key in data) {
      if (key === 'actions') {
        const value = data[key];
        let iconsToDisplay = [];
        for (let actionKey in value) {
          if (value[actionKey].iconType === 'class') {
            iconsToDisplay.push(
              <span className={value[actionKey].styleClass} key={actionKey} onClick={value[actionKey].onClick}>
                <i className={value[actionKey].icon}></i>
              </span>
            );
          }
        }
        dataToDisplay.push(
          <td width={widthOfColumn[key] + '%'} key={key}>{iconsToDisplay}</td>
        );
      } else {
        dataToDisplay.push(<td width={widthOfColumn[key] + '%'} key={key}>{data[key]}</td>);
      }
    }
    return (
      <tr className={styleClass}>
        {dataToDisplay}
      </tr>
    );
  }
}
