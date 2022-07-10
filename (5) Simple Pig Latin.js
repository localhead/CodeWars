/* 
Move the first letter of each word to the end of it, 
then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway ! 

*/

'use strict';

const strOne = 'Pig latin is cool';
const strTwo = 'Hello world !';

function pigIt(str) {
  const strSpl = str.split(' ');

  const strOne = [];
  strSpl.forEach(function (key) {
    if (key >= 'a' && key <= 'z') strOne.push(key.slice(1) + key[0] + 'ay');
    else if (key >= 'A' && key <= 'Z')
      strOne.push(key.slice(1) + key[0] + 'ay');
    else {
      strOne.push(key.slice(1) + key[0]);
    }
  });
  console.log(strOne.join(' '));
  return strOne.join(' ');
}

pigIt(strOne);
pigIt(strTwo);
