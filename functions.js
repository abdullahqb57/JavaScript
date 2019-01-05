var multiple = function(a,b){
    if(a>20 || b >= 20){
        return console.log( 'thats too hard buddy...');
    }else{
        return console.log(a * b);
    }
}
multiple(3,88)

// currying

const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
console.log(curriedMultiply(5)(2));

// compose
const compos = (f,g) => (a) => f(g(a));//f(6)-7
// input => function => return - value
const sum = (num) => num + 1;

compos(sum, sum)(5);


//Solve these problems:

//#1 Create a one line function that adds adds two parameters
const sum = (a, b) => a + b

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3) // returns 13

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1) // 31


//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12) // 17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10) // 16

//What are the two elements of a pure function?
// 1. Deterministic --> always produces the same results given the same inputs
// 2. No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements.