import React from 'react';

export const tableConstants = (openEditModal, openRemoveModal) => [
  {
    type: 'raw',
    title: 'Loyalty No',
    className: '',
    render: (modal) => {
      return(
        <div>{modal.loyaltyNo}</div>
      );
    }
  },
  {
    type: 'raw',
    title: 'First Name',
    className: '',
    render: (modal) => {
      return(
        <div>{modal.firstName}</div>
      );
    }
  },
  {
    type: 'raw',
    title: 'Last Name',
    className: '',
    render: (modal) => {
      return(
        <div>{modal.lastName}</div>
      );
    }
  },
  {
    type: 'raw',
    title: 'Mobile',
    className: '',
    render: (modal) => {
      return(
        <div>{modal.mobile}</div>
      );
    }
  },
  {
    type: 'raw',
    title: 'Email',
    className: '',
    render: (modal) => {
      return(
        <div>{modal.email}</div>
      );
    }
  },
  {
    type: 'raw',
    title: 'Address',
    className: '',
    render: (modal) => {
      return(
        <div>{modal.address}</div>
      );
    }
  },
  {
    type: 'raw',
    title: 'Actions',
    className: '',
    render: (modal) => {
      return(
        <div>
          <span onClick={() => openEditModal(modal.loyaltyNo)}>
            <i className="fa fa-edit"></i>
          </span>
          <span onClick={() => openRemoveModal(modal.loyaltyNo)}>
            <i className="fa fa-trash"></i>
          </span>
        </div>
      );
    }
  },
];
