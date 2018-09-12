import React from 'react';
import {Input} from 'reactstrap';
import PropTypes from 'prop-types'
import './input.css'

export default class TextField extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        return (
            <div className="input-container">
                <p className={this.props.labelstyle}>{this.props.labeltext}</p>
                <Input placeholder={this.props.inputplaceholder}
                       name={this.props.name}
                       className={this.props.inputstyle}
                       onChange={this.props.onChange}
                       value={this.props.value}
                       {...this.props}
                />
            </div>

        )
    }

}

TextField.defaultProps = {
    labeltext: '',
    inputstyle: 'input',
    labelstyle: 'label',
    inputplaceholder: '',
    name: '',
}

TextField.propTypes = {
    name: PropTypes.string.isRequired,
    labeltext: PropTypes.string,
    inputstyle:  PropTypes.string,
    labelstyle:  PropTypes.string,
    inputplaceholder:  PropTypes.string,
    change:  PropTypes.func,
}