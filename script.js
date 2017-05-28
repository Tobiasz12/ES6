
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
const grade = [2,4,4];
let total = 0;
function average(array) {
    array.forEach(item => total += item )
     console.log(total/array.length);
}

average(grade);

//Task4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]
const logAllArguments = (...grades) => grades.forEach(item => console.log(item));

//Task 5
const array = [1, 4, 'Iwona', false, 'Nowak'];
const [, ,firstName, ,lastName] = array;
console.log(firstName, lastName)
