/*
expression - a piece of code that produces a value (22 or "psychosis"), even just a value itself (1, false)
statement - a piece of code that acts on other code and produces some change in the code  (for, for...in, new, function, etc)
side effect - a statement that affects the internal state of the machine
bindings (assigngments) - a variable, the tool JS uses to retain values for later use (let, var, const)

bindings + expressions: once a binding (variable) has been declared it may be used as a value itself (expression)
  - bindings are more like tentacles than boxes, they can connect to one value and be reconnected to another
  - when binding without a value assignment you are implicitely binding to 'undefined'
  - let statement can be used to bind multiple values ( let one = 1, two = 2)
  - const is a binding that points to a value as long as the binding remains (immutable)
  - let , var, and const are special keywords and may not be used as names for bindings
  
environment - the collection of bindings and their values at a given time

functions - common in the default environment of the language, a piece of program wrapped in a value
  - a function can be applied / invoked / called (ie executed)
*/


/* NOTES ON VAR 

how bindings were made pre 2015 
  > similar to let 
  > however scoping is very peculiar - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
  > see 8-34 chap2 notes
*/

/* CONTROL FLOW 
======================
// continue -  will stop the current iteration and continue with the next
// break - will exit the loop process completely given some condition 
// either can be condition locked

*/