const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const firstName = urlParams.get('firstName')
console.log(firstName);
const lastName = urlParams.get('lastName')
console.log(lastName);