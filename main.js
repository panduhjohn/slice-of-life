// # Slice of Life
// ### Guidelines

// 1. For all challenges, you may either:
// a. use a `while` loop to iterate over the indices and build a new string as
//  you go, or
// b. use String.slice or String.replace.
// 2. Use `const` for all variables.

console.log('# Replacement Challenges');
console.log('### Challenge #1');

// For the string `Hello, there.`, console out the same string but with the
// first `e` replaced with an `o`.

const hello = 'Hello there.';
const newHello = hello.replace('e', 'o');
console.log(newHello) // Hollo there.

console.log('### Challenge #2');

// For the string `Hello, there.`, console out the same string but with the
// `there` replaced with `you`.

const hello2 = 'Hello there.';
const newHello2 = hello2.replace('there', 'you');
console.log(newHello2) // Hello you.

console.log(`### Challenge #3`);

// For the string `Hello, there.`, console out the same string but with the
// first `e` replaced with an `i` and the `o` replaced with `y`. Hint: one way
// to do this involves repeating the same operation twice, though with
// different arguments.

const hello3 = 'Hello there.'
const newHello3 = hello3.replace('e', 'i').replace('o', 'y')
console.log(newHello3) //Hilly there.


console.log(`### Challenge #4`);

// For the string `Hello, there.`, console out the same string but with _every_
// `e` replaced by an `o`. If you got this far, you are thoro af.

const hello4 = 'Hello there.'
const newHello4 = hello4.replace('e', 'o').replace('e', 'o').replace('e', 'o')
console.log(newHello4) //HHollo thoro.


console.log(`# Slice Challenges`);

console.log(`### Challenge #5`);

// For the string `Watch that speedbump!`, console out the first 5 characters.

const sen = 'Watch that speedbump!';
const newSen = sen.slice(0, 5);
console.log(newSen); // Watch

console.log(`### Challenge #6`);

// For the string `Watch that speedbump!`, console out the first 6 characters.

const sen1 = 'Watch that speedbump!';
const newSen1 = sen1.slice(0, 6);
console.log(newSen1); // Watch 
console.log(newSen.length); //5

console.log(`### Challenge #7`);

// For the string `Watch that speedbump!`, console out everything _except for_ the last 4
// characters.

const sen2 = 'Watch that speedbump!';
const newSen2 = sen2.slice(0, sen2.length - 4);
console.log(newSen2); // Watch that speedb


console.log(`### Challenge #8`);

// For the strings `Hello, there.` and `Watch that speedbump!`, console out the
// last four characters of each one. There should be _two_ strings consoled for this one,
// but they should both be created using `slice` with the _exact_ same argument(s).

const sen3 = 'Hello there.';

const sen5 = 'Hello there.';
const newSen5 = sen5.slice(-4);
console.log(newSen5); // ere.

const sen4 = 'Watch that speedbump!';
const newSen4 = sen4.slice(-4);
console.log(newSen4); // ump!