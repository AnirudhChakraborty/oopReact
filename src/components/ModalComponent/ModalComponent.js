import React, { Component } from 'react';
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalComponet extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isVisible : false
        }
    }

    getDerivedStateFromProps(nextProps, prevState) {
        //Check if modal is kept visible
        let {isVisible} = nextProps
        if(isVisible !== prevState.isVisible){
            return { isVisible : isVisible};
        }
        else return null;
    }

    componentDidUpdate(prevProps, prevState) {
        let {isVisible} = prevProps
        if(isVisible !== this.props.isVisible){
          this.setState({isVisible: isVisible});
        }
    }      

    toggle = () => {
        let {isVisible} = this.state
        this.setState({isVisible : !isVisible})
    }

    render() {
         /*** 
         *  @param : isVisible -> Boolean
         *  @param : modalHeader -> Const;
         *  @param : modalBody -> Const
         *  @param : modalFooter -> Const 
         *  @param : showBackdrop -> Boolean 
         *  @param : screenSize -> lg/sm (large screen/small screen)
         *  @param : onClosed -> function()
         *  @param : canBeCancelled -> Boolean
         * **/
        
        let {isVisible} = this.state
        let {modalHeader, modalBody, modalFooter, 
            showBackdrop, screenSize, canBeCancelled, onClosed} = this.props
    
        return (
            <Modal isOpen={isVisible} backdrop={showBackdrop}
                     size={screenSize} onClosed={onClosed} toggle={canBeCancelled ? this.toggle : null}>
            <ModalHeader toggle={canBeCancelled ? this.toggle : null}> {modalHeader} </ModalHeader>
            <ModalBody>   {modalBody} </ModalBody>
            <ModalFooter> {modalFooter} </ModalFooter>
            </Modal>
        );
    }   
}

ModalComponet.defaultProps = {
    isVisible : false,
    modalHeader : '',
    modalBody : '',
    modalFooter : '',
    showBackdrop : true,
    screenSize : 'sm',
    onClosed : null,
    canBeCancelled : true
}

export default ModalComponet;