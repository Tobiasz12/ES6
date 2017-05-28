const sayHello = () => alert('Hello world!');
sayHello();


//TASK 1
function say(y,x) {
  y = 'Hellow'
  x = 'World'
    console.log(`${y} ${x}`);
};
say()

//TASK 2
const multiply = (a = 1,b = 1) => a * b
multiply(2)


//Task 3
const arr = [1,3,6,6]
const [a,b,c,...rest] = arr

const average = (a ,b = 0,c = 0 ,d = 0) => (a + b + c + d) / (arr.length - rest.length)
average(1,3,6)

//Task4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]
const logAllArguments = (...grades) => grades.forEach(item => console.log(item));

//Task 5
const array = [1, 4, 'Iwona', false, 'Nowak'];
const [, ,firstName, ,lastName] = array;
console.log(firstName, lastName)













function doStuff (x, y, z) { }
var args = [0, 1, 2];

// Call the function, passing args
doStuff.apply(null, args);
