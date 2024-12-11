// Variable declarations

var a = 1;
let b = 2;
const c = 3;

// c = 4; // Error: no re-assignment possible with const

const d = [1, 2, 3];
d.push(5);

// Rule of thumb: always use const

// Use cases for let:
let sum = 0;
for (let i = 0; i < 10; i++) sum += i;

e = 4; // no prefix

// Parameter vs argument

function greet(name /* parameter */) {
    name = 'abc';
    console.log(`Hello, ${name}!`);
}

const my_name = 'Alex';
greet(my_name /* argument */);

console.log(my_name);

function removeLast(list)
{
    // list = [4, 5, 6]; If uncommented, outerscope list doesn't get edited.
    list.pop();
}

const list = [1, 2, 3, 4];
removeLast(list);
console.log(list); // Note: list gets edited because of object referencing.

// Variable scope

const g = 'tada';

function demoScope() {
    console.log(g);
    var x = 10; // function scope
    if (true) {
        let y = 20; // block scope
        const z = 30; // block scope
        console.log(x, y, z);
    }
    console.log(x);
    // console.log(y, z); // Doesn't work, y and z not defined
    
    y = 100; // Note: y is a new (global) variable!
}
demoScope();

console.log(y); // y is declared as global variable in r57.