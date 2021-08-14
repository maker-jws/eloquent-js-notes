/* Functions General Notes 
===========================
A function is a name for (binding) to a value that is a function ( a collection of coded instructions)

A function can return a value or not, relying only on side effects (some execution of code or state change in the system - such as log outputs)

"A return statement determines the value the function returns"
"a return with out a value will return 'undefined', similar to not including a return statement"
Parameters are like variables, but their values are provided by the 'caller' as function arguments- not the code in the function itself. 
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
