console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes');

//console.log(_.isString(true));
//console.log(_.isString('Verint'));

//console.log('Result: ', notes.add(9, -3));

var filteredArray = _.uniq([1,2,3,3,3,1,1,2,2,'Apple',1, 2, 3, 'Apple']);
console.log(filteredArray);






























//var user = os.userInfo();

//var res = notes.addNote();
//console.log(res);
//console.log(user);

//fs.appendFile('greetings.txt', `Hello  ${user.username}! You are ${notes.age} years old!`,  (err) => {
    //console.log('The "data to append" was appended to file!');
  //});
//console.log(notes);
