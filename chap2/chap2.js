//testing bindings (variables + declarations + mutations)

let one = 1, two = 2;
const ONE = 1, TWO = 2;
console.log(one,two)
console.log(ONE,TWO)

var x = "snarly"
// globally declared x 'snarly' at doc level


function testVar(){
    console.log(x, "undefined in block scope")
    // undefined at line 13 (defined at 15)
    var x = "gus"
    function innerTest(){
        console.log(x)
        // ^^ uses value of x defined at 15
        x = 'GUS'
        console.log(x, 'inside nested')
        // ^^ uses value at 19 
    }
    innerTest()
    // invocatino of innerTest
    console.log(x, "inside function")
    // x reassigned at (inside of invoked function) is used in testVar scope
    // if testVar returned x 
    return x
}
// testVar()
// x = testVar()
// manual reassignment of global variable x on line 8
// console.log(x)


function testingIsNaN(){
const inputCF = ".00000003"
const testControlFlow = Number(inputCF) 

if(!isNaN(testControlFlow)){
    console.log('Your Number is the square root of '+(testControlFlow**2))
}
}

// while loops example

function testWhileLoop1(){
    let numberWhile = 0 
    while(numberWhile < 12){
        console.log(numberWhile)
        numberWhile+=2
    }
    console.log(numberWhile, "after while closes ->previous record shows 10 at line 50")
}
testWhileLoop1()

function testWhileCounter(num){
    let result = 1;
    let counter = 0;
    while(counter<num){
        result*=2
        counter+=1
    }
    console.log(result)
    return result
}
testWhileCounter(38)

function testDoWhile(name = "john doe"){

    let yourName = ""
    let letters = [...name]
    let counter = 0 

    // this do code is guaranteed to execute once before the while check is evaluated
    do{
        yourName += letters[counter]
        counter ++ 
    } while(yourName.length != name.length);
    // if while is passed a falsy value it will run once
    // if it is given a truth value, it will continue to run
    
    // console.log(yourName)
    // testing output
    return yourName;
}
testDoWhile()

function testBreakStatement(){
    let counter =0
    for(let i =15;;i++){
        console.log(i, counter)
        if (i%7==0){
            console.log("exit")
            break;
        }
        
        if( i%3==0){
            continue;
        }
        counter++
    }
}
testBreakStatement()