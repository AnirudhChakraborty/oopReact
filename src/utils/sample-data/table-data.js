/**
 * Table data generated to be passed on GridTable Component
 * tableData has all the data to be displayed on table body
 * header has all header values to be displayed on table head
 * tableProperties has all the table properties to alter table
 */

/**
 * on actions we have 3 fields
 * 1. iconType: 'class' - for using fontAwesome class to use font icons, 'image' - to use an image to display an icon
 * 2. icon: pass icon value whether it be class or image url
 * 3. onClick: function for individual row
 */


export const tableData = [
  {
    data: {
      loyaltyNo: '001',
      firstName: 'Test',
      lastName: 'User',
      mobile: '0987654321',
      email: 'test@gmail.com',
      address: 'Wakad - Pune, Maharashtra',
      actions: {
        edit: {
          iconType: 'class',
          icon: 'fa fa-edit',
          onClick: function () {
            alert('Editing: ' + tableData[0].data.loyaltyNo);
          },
          styleClass: 'table-action-edit'
        },
        delete: {
          iconType: 'class',
          icon: 'fa fa-trash',
          onClick: function () {
            alert('Deleting: ' + tableData[0].data.loyaltyNo);
          },
          styleClass: ''
        }
      }
    },
    styleClass: '',
  },
  {
    data: {
      loyaltyNo: '002',
      firstName: 'Test',
      lastName: 'User 2',
      mobile: '0987654321',
      email: 'test2@gmail.com',
      address: 'Viman Nagar - Pune, Maharashtra',
      actions: {
        edit: {
          iconType: 'class',
          icon: 'fa fa-edit',
          onClick: function () {
            alert('Editing: ' + tableData[1].data.loyaltyNo);
          },
          styleClass: 'table-action-edit'
        },
        delete: {
          iconType: 'class',
          icon: 'fa fa-trash',
          onClick: function () {
            alert('Deleting: ' + tableData[1].data.loyaltyNo);
          },
          styleClass: ''
        }
      }
    },
    styleClass: ''
  }
];

export const header = {
  loyaltyNo: 'Loyalty No',
  firstName: 'First Name',
  lastName: 'Last Name',
  mobile: 'Mobile',
  email: 'Email',
  address: 'Address',
  actions: 'Actions'
};

// Width will be in percentage (Total width of all fields/columns should be 100. Not more than 100%)
export const widthOfColumns = {
  loyaltyNo: '5',
  firstName: '10',
  lastName: '10',
  mobile: '10',
  email: '15',
  address: '20',
  actions: '10'
};

// Pass in a Component to override default element
export const tableProperties = {
  size: 'lg',
  bordered: true,
  borderless: false,
  striped: true,
  dark: false,
  hover: true,
  responsive: true
};
