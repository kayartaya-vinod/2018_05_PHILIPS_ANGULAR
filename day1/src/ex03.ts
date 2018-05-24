// template strings

var username = 'Vinod';
var city = 'Bengaluru';
var state:string;

// state = 100; // error
state = 'Karnataka';

var message = `Name = ${username}
From = ${city}, ${state}`;

console.log(message);