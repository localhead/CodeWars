'use strict';
/* 
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.

" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false

*/

const str = 'Hello there thanks for trying my Kata';
const str0 = '    Hello     World   ';
const str1 = '';
function generateHashtag(str) {
  const toArr = str.split(' ');

  const arrFilterEmpty = toArr.filter(function (el) {
    return el != '';
  });

  const newArr = [];
  arrFilterEmpty.forEach(function (word) {
    newArr.push(word[0].toUpperCase() + word.slice(1));
  });

  const strFin = `${newArr == '' ? '' : '#'}` + newArr.join('');
  console.log(strFin);
  if (strFin.length > 140 || strFin.length <= 0) return false;
  else return strFin;
}

const result = generateHashtag(str1);
console.log(result);
