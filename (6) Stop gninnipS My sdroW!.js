/* 
Write a function that takes in a string of one or more words, and returns the same string, 
but with all five or more letter words reversed (Just like the name of this Kata). 
Strings passed in will consist of only letters and spaces. 
Spaces will be included only when more than one word is present.

Examples: 
spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test" 
*/

let res;

function spinWords(string){
    let newStr = '';
    let i;
    let a;
    let b = '';
    i = 0;
    newStr = string.split(' ');
    console.log(newStr); 

    while (newStr[i]){   
        if (newStr[i].length >= 5){
            a = newStr[i];
            for (let i = a.length - 1; i >= 0; i--) {
                b += a[i];
            }
            newStr[i] = b;
        }
        b = '';
        i++;
        console.log(i); 
    }

    let text = newStr.join(' ');
    return(text);
}


res = spinWords('Hey fellow warriors');

console.log(res); 


/* 
let a = 'fuck'

let result = '';

for (let i = a.length - 1; i >= 0; i--) {
  result += a[i];
}

console.log(result); 
*/