const sayHello = () => alert('Hello world!');
sayHello();

let greeting = 'Hello User!';
function greetWorld(isGreeting) {
    if (isGreeting) {
        let greeting = 'Hello World!'; // (A) zasięg: cała funkcja
        return greeting;
    }
    return greeting;
}
greetWorld(false); // 'Hello User!'
