function loopingAPyramid(num){
    for(let i =1;i<=num;i++){
        let output = "#".repeat(i)+" ".repeat(num-i)
        console.log(output)
    }
}
// loopingAPyramid(7)

function fizzbuzz(num=100){
    for(let i=1;i<=num;i++){
        const output = (i %3 === 0 && i%5===0) ? console.log('fizzbuzz') : (i % 5==0 ) ? console.log('buzz')  : (i%3===0) ? console.log('fizz') : console.log(i)
    }
}

// fizzbuzz(20)

function chessboard(num=8){
    for(let i=0;i<num;i++){
        let string;
        (i%2==0) ? string = "  #" : string = "#  "
        console.log(string.repeat(num/2))
    }
}
chessboard()