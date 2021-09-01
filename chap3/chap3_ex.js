/* Exercises */
const minimum = (a,b)=>(a>b?b:a)
const test = console.log(minimum(1,2))

function isEven(num){
    (num<0)? num*=-1 : null;
    if(num===0){
        return true
    }else if(num == 1){
        return false
    } else {
        return isEven(num-2)
    }
}

const test2 = console.log(isEven(-23))

function countsBs (str){
    return str.split("").filter(l=>l=="B").length
}
function charCount(str,target){
    return str.split("").filter(l=>l==target).length
}
const test3 = console.log(countsBs('JohnBBB'))
const test4 = console.log(charCount('JohnBBB', 'J'))