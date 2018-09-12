import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from "reactstrap";

export default class ButtonComponent extends Component{

  /**
   * Button Component takes 2 props from parent component
   * 1. onClick: it will have the function
   * 2. config: it will have object of configuration to alter button look and feel
   *
   * ** children is the props which is passed inside the open/close tag of component will be treated as children
   */

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
