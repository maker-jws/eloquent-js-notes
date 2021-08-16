/* Functions General Notes 
===========================
- A function is a name for (binding) to a value that is a function ( a collection of coded instructions)

- A function can return a value or not, relying only on side effects (some execution of code or state change in the system - such as log outputs)

- "A return statement determines the value the function returns"
- "a return with out a value will return 'undefined', similar to not including a return statement"
- Parameters are like variables, but their values are provided by the 'caller' as function arguments- not the code in the function itself. 
- in a function expression, functions as values can be overwritten, just like any other values if var or let is used. 
- noted on 45 > if you use const someNameForFunction = function(){}; should be followed by semi-colon
*/

/* SCOPING 
===========================
- When binding are defined outside of a function/block scope they are said to be 'globally' defined in whole program
- local bindings are block scoped bindings
- each time the function is called a new locally scoped variable is bound
- let and const can locally bind a value and the value is inaccessible outside the local env
- an exception exists with var - see chap 3 notes

-- Nested Scope 
- There may be a plurality of local scopes when functions are nested, one inside another
- see hummus example in chap 3 notes 
- lexical scoping - a process of determining where a binding is scoped 
*/

/* Fat Arrow Functions 
===========================
- There is not functional difference between a fat arrow function and function expressions
- The syntax was added in 2015 as part of the ES6 Syntax. 
- Arrow functions defined in the global scope do not have access to globalThis (node) instead returning {} 
- This in (browser) env returns window object
- An arrow function called within another arrow function does not return the context of the calling function, only returning window
*/

/* CALL STACK 
===========================
- The place where the computer stores where it is in the code's execution order is called the 'call stack'
- Storing the location of the function calls in memory requires memory, too many function calls can create a 'stack overflow' where the required memory exceeds the alloted value. 
- Example chicken calling egg, calling chicken, etc. 
*/


/* Optional Arguments
===========================
- if more arguments are passed to function that does not have defined parameters, the values are ignored
- if fewer arguments are passed (without some error handling) the value will be 'undefined' - 
- default arguments can be added to any parameter with the function(...,parameterName = someValue){}
- all arguments passed to function can be accessed through 'rest' (covered in chap 4)
*/

/* CLOSURE 
===========================
- When variables store values that are block scoped, the value can be returned, but the bindings themselves are independent
- 'local' bindings are created each time a function is called. Different calls cannot mutate the same binding.
- "A function that references bindings from local scopes around it is called a 'closure'"
- having a function return a function, we can update the bound value of a given function 
- "When called, the function body sees the environment in which it was created, not the environment in which it was called. 

*/

/* RECURSION 
===========================
- there is no issue with a function calling itself - as long as its call does not overflow the stack
- 
*/
