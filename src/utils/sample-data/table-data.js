/**
 * Table data generated to be passed on GridTableEdit Component
 * tableData has all the data to be displayed on table body
 * header has all header values to be displayed on table head
 * tableProperties has all the table properties to alter table
 */

export const tableData = [
  {
    loyaltyNo: '001',
    firstName: 'Test',
    lastName: 'User',
    mobile: '0987654321',
    email: 'test@gmail.com',
    address: 'Wakad - Pune, Maharashtra'
  },
  {
    loyaltyNo: '002',
    firstName: 'Test',
    lastName: 'User 2',
    mobile: '0987654321',
    email: 'test2@gmail.com',
    address: 'Viman Nagar - Pune, Maharashtra'
  }
];

// Pass in a Component to override default element
export const tableProperties = {
  size: 'lg',
  bordered: true,
  borderless: false,
  striped: false,
  dark: false,
  hover: true,
  responsive: true
};
