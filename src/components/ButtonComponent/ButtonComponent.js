import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from "reactstrap";

export default class ButtonComponent extends Component{
  render(){
    return(
      <Button onClick={this.props.onClick} {...this.props.config}>{this.props.children}</Button>
    )
  }
}

ButtonComponent.propTypes = {
  onClick: PropTypes.func,
  config: PropTypes.object,
  children: PropTypes.string
};
