'use strict';
/* 
Write a function that, given a string of text (possibly 
with punctuation and line-breaks), 
returns an array of the top-3 most occurring words, 
in descending order of the number of occurrences.

Assumptions:
A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
Matches should be case-insensitive, and the words in the result should be lowercased.
Ties may be broken arbitrarily.
If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, 
or an empty array if a text contains no words. 
*/

const sampleStr0 = `In a village of La Mancha, the name of which I have no desire to call to mind, 
there lived not long since one of those gentlemen that keep a lance in the lance-rack, 
an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income. //ds/`; //['a','of','on'])

const sampleStr1 = "  //wont won't won't "; //["won't", "wont"]

const countTopWords = function (str) {
  //console.log(str);
  // split to new str
  const strFirst = str
    .replaceAll('\n', '')
    .replaceAll(',', '')
    .replaceAll('.', '')
    .split(' ');

  const filterStr = [];
  strFirst.forEach(function (word) {
    if (word >= 'a' && word <= 'z') {
      filterStr.push(word);
    } else if (word >= 'A' && word <= 'Z') {
      filterStr.push(word);
    }
  });

  const indexArr = [];
  const theSet = new Set(filterStr);
  for (const order of theSet) {
    let j = 0;
    filterStr.forEach(function (word, i) {
      if (order == word) {
        indexArr[i] = j++;
      }
    });
  }
  const strRes = [];
  console.log(filterStr[indexArr.indexOf(Math.max(...indexArr) - 1)]);
  //console.log(strRes);
  console.log(indexArr);
  console.log(filterStr);

  // array[word index][word apperance] = word itself
  // filter non ASCII and non apostrophes
  // get rid of , and . at the end of the words. Use forEach it ittarate inside of array.
  // Then on each elem use splice
};

countTopWords(sampleStr0);
