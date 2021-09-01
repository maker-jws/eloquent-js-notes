/* Notes and Snippets */

const square = function (x) {
  // console.log(this)
  // note: unrelated to lesson - function expressions (()=>{})do not permit access to global this (where the function is bound/invoked)
  // however anonymous functions bound to variables do provide access to 'this'
  return x * x;
};

// console.log(square(3));

const power = function (base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
};

const power2 = function (base, exponent) {
  return base ** exponent;
};

const test1Power = power(2, 10),
  test2Power = power2(2, 10);
// console.log(test1Power,test2Power)
// console.log(power(2,10)===power2(2,10))

// Another stab at VAR and scope

let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  // because block scoped var binding are hoisted to the global context the
  console.log(x + y + z);
}
// console.log(x+z)

let a = 10;
let c;
function testScope() {
  let b = 20;
  let c = 30;
  // if var c >> c is block scoped even if let c already has been declared () in global
  // note: no major diff between var / let in block scope behavior
  console.log(a + b + c);
}
// testScope()
// console.log(c)
// console.log(a+c)

const halve = function (num) {
  return num / 2;
};
let n = 10;
// console.log(halve(n))
// console.log(n)

// Nested function example
let menu;
const hummus = function (factor = 1) {
  const ingredient = function (amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  menu = { _0: "test1" };
  console.log(menu, "inside");
};
// console.log(menu, "global menu call")
// hummus(1.25);
// console.log(menu, "global after")

function multiplier(factor) {
  return (number, current) => number * factor * (current || 1);
}
let twice = multiplier(2);
//multiple takes one argument, the factor, however it can return a multiplier for previous values if the returned value is passed additional arguments
let test = twice(3);
// console.log(test)
test = twice(6);
// console.log(test)
let count = 0;
const recursivePower = (base, exponent) => {
  if (exponent === 0) {
    console.log("base", exponent, count);
    // base case - some condition that will break the recursion calls
    return 1;
  } else {
    count++;
    console.log("recurse", exponent, count);
    return base * recursivePower(base, exponent - 1);
  }
};

// console.log(recursivePower(2, 10));
// 10 () > 9 () > 8 () > 7 () > 6() > 5()>4()>3()>2()>1()>0
//                                                      2* 1
//                                                  2* 2
//                                             2 *4
//                                         2*8
//                                    2*16
//                               2*32
//                        2*64
//                  2*128
//          2*256
// 2*512

// continue Recursion notes

// recursive > Branching
let branchCount = 0
function findSolution(target) {
  function find(current, history) {
    // console.log(current, history)
    if (current === target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
        branchCount +=1
      return (
          
        find(current + 5,
        `(${history}+5)`) || find(current * 3,
        `(${history}*3)`)
      );
      // because both paths are called for each branch where the value is less than target and current does not equal target
      // the else will run until the current meets either of those break conditions
      // it runs 
    }
  }
  return find(1,"1")
//   start condition calls find with starting value 
//  possible replace with default values on find
}

console.log(findSolution(5000))
console.log(branchCount)

// note this is not an efficient solution as it does not account for diverting branches
// this findSolution executes EVERY possibility for calculating a given number by adding 5 or multiplying by 3
// how might one make this more efficient ? 
    // tracking nodes? for alternative paths... 
        // come back to this...

// pg 54 - a general rule is not to add cleverness unless you are certain you will need it.
// pg 54 -  you may be inclined to write frameworks for every piece of functionality, avoid this, you will get no real work done and not use the code

// pg 54 - functions that create values (use returns) are easier to combine in new ways than side-effect oriented functions
// pg 55 - Pure function - self contained function that does not rely on global values

// REVIEW
// Every block creates a new scope
// Separating your task into small functions is helpful


