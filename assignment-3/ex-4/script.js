let last;
let newStr;
let result;

function lastLetter(str){
    last = str.length;
    newStr = str[last - 1];
    return newStr;
}

result = lastLetter("This is my last letter");

console.log(result);
