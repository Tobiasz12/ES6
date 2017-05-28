'use strict';

var sayHello = function sayHello() {
  return alert('Hello world!');
};
sayHello();

//TASK 1
function say(y, x) {
  y = 'Hellow';
  x = 'World';
  console.log(y + ' ' + x);
};
say();

//TASK 2
var multiply = function multiply() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};
multiply(2);

//Task 3
var arr = [1, 3, 6, 6];
var a = arr[0],
    b = arr[1],
    c = arr[2],
    rest = arr.slice(3);


var average = function average(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  return (a + b + c + d) / (arr.length - rest.length);
};
average(1, 3, 6);

//Task4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
var logAllArguments = function logAllArguments() {
  for (var _len = arguments.length, grades = Array(_len), _key = 0; _key < _len; _key++) {
    grades[_key] = arguments[_key];
  }

  return grades.forEach(function (item) {
    return console.log(item);
  });
};

//Task 5
var array = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = array[2],
    lastName = array[4];

console.log(firstName, lastName);
