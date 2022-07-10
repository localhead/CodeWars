/* Implement a function that adds two numbers together and returns their sum in binary. 
The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary) 
*/

let sum = a + b;
let i;
let j;

let reminder;
let tostring;

i = sum;
j = sum;
tostring = '';

while (i != 0){   
    i = Math.floor(i / 2);
    j = j / 2; 
    reminder = Math.floor((j * 2) - (i * 2));

    tostring = tostring + (reminder + '');   
}

tostring = tostring.split("").reverse().join("");
console.log(tostring);