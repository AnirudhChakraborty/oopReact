import React, {Component} from 'react';

export default class TableHeader extends Component{
  constructor(){
    super();
    this.state = {
      tableHeaders: []
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.header){
      const header = nextProps.header;
      let arrayOfHeaderName = [];
      for(let key in header){
        arrayOfHeaderName.push({key: header[key]});
      }
      this.setState({tableHeaders: arrayOfHeaderName});
    }
  }

  render(){
    return(
      <thead>

      </thead>
    );
  }
}
