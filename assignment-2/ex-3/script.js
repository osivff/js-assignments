let firstLetter;

function capitalize(str){
    firstLetter = str.replace(str[0], str[0].toUpperCase());
    return firstLetter;
}

let result = capitalize("hello my name is oscar");

console.log(result);