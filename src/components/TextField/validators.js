import React from 'react';


export default class Validators extends React.Component {

     emailReg = '/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/';

    validateNotEmpty = (value) => {
        if(value === '') {

        }
    }

    validateEmail = (value) => {
        if(this.emailReg.test(value) === false) {

        }
    }
}