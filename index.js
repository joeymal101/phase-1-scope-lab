// Write your solution in this file!
 var customerName = 'bob'
 const leastFavoriteCustomer = 'sam'

console.log(customerName);

function upperCaseCustomerName() {
  if(typeof customerName === 'string')
  customerName = customerName.toUpperCase();
}
function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'bob';
}
