var username='Vinod';
var email='vinod@vinod.co';
var city='Bengaluru';

// object construction using variables

// pre es6
var p1 = {username: username, email: email, city: city, state: 'Karnataka'};

// es6+
var p2 = {username, email, city, state: 'Karnataka'};

console.log(p1);
console.log(p2);

var p3 = {x: 100, y: 200, z: 120};
var {x, y, z} = p3; // object destructuring
console.log(x, y, z);

// non-default exported members are imported with exact same name
import { MY_NAME, sayHello } from './ex05';
console.log('MY_NAME is', MY_NAME);
console.log('output of sayHello() is', sayHello());

import * as ex05 from './ex05';
console.log('ex05.default()', ex05.default())
console.log('ex05.MY_NAME', ex05.MY_NAME)
console.log('ex05.sayHello()', ex05.sayHello())

// default exported member is imported with a name of choice
import xyz from './ex05';
console.log('type of xyz is', typeof xyz);
console.log('output of xyz() is', xyz());