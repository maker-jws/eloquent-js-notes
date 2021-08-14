/* Notes and Snippets */

const square = function(x){
    // console.log(this)
    // note: unrelated to lesson - function expressions (()=>{})do not permit access to global this (where the function is bound/invoked)
    // however anonymous functions bound to variables do provide access to 'this'
    return x*x
}

console.log(square(3))

const power = function (base,exponent){
    let result = 1
    for(let i =0;i<exponent;i++){
        result *= base
    }
    return result
}

const power2 = function (base, exponent){
    return base ** exponent
}

const test1 =power(2,10), test2=power2(2,10)
console.log(test1,test2)
console.log(power(2,10)===power2(2,10))

// Another stab at VAR and scope

let x = 10
if(true){
    let y = 20;
    var z = 30;
    // because block scoped var binding are hoisted to the global context the 
    console.log(x+y+z)
}
// console.log(x+z)

let a = 10
let c;
function testScope(){
    let b = 20
    let c = 30 
    // if var c >> c is block scoped even if let c already has been declared () in global 
    // note: no major diff between var / let in block scope behavior
    console.log(a+b+c)
}
testScope()
// console.log(c)
// console.log(a+c)

const halve = function (num){
    return num/2
}
let n = 10 
// console.log(halve(n))
// console.log(n)

// Nested function example
let menu; 
const hummus = function(factor = 1){
    const ingredient = function(amount, unit, name){
        let ingredientAmount = amount * factor
        if(ingredientAmount>1){
            unit+= "s"
        }
        console.log(`${ingredientAmount} ${unit} ${name}`)
    }
    ingredient(1,'can',"chickpeas")
    ingredient(.25,'cup',"tahini")
    ingredient(.25,'cup',"lemon juice")
    ingredient(1,'clove',"garlic")
    menu = {_0: "test1"}
    console.log(menu, "inside")
}
console.log(menu, "global menu call")
hummus(1.25)
console.log(menu, "global after")