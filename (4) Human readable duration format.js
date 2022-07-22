'use strict';
/* 

Your task in order to complete this Kata is to write a 
function which formats a duration, given as a number of seconds, 
in a human-friendly way.

The function must accept a non-negative integer.
 If it is zero, it just returns "now". Otherwise, 
 the duration is expressed as a combination of years, 
 days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"

For the purpose of this Kata, a year is 365 days and a day is 24 hours.
    
Note that spaces are important.

*/

function formatDuration(seconds) {
  let finalStr = '';
  let strArr = [0, 0, 0, 0, 0];
  let strYear = '';
  let strDay = '';
  let strHour = '';
  let strMin = '';
  let strSec = '';
  console.log(seconds);

  while (seconds >= 0) {
    if (seconds >= 31536000) {
      seconds = seconds - 31536000;
      strArr[0] = strArr[0] + 1;
    }
    if (seconds >= 86400 && seconds < 31536000) {
      seconds = seconds - 86400;
      strArr[1] = strArr[1] + 1;
    }
    if (seconds >= 3600 && seconds < 86400) {
      seconds = seconds - 3600;
      strArr[2] = strArr[2] + 1;
    }
    if (seconds >= 60 && seconds < 3600) {
      seconds = seconds - 60;
      strArr[3] = strArr[3] + 1;
    }
    if (seconds >= 1 && seconds < 60) {
      seconds = seconds - 1;
      strArr[4] = strArr[4] + 1;
    }
    if (seconds === 0) break;
  }
  console.log(seconds);
  console.log(strArr);
  if (
    strArr[0] == 0 &&
    strArr[1] == 0 &&
    strArr[2] == 0 &&
    strArr[3] == 0 &&
    strArr[4] == 0
  )
    return 'now';

  if (strArr[0] != 0) {
    strYear = `${strArr[0]} year${strArr[0] == 1 ? '' : 's'}${
      strArr[1] == 0 ? '' : strArr[2] == 0 ? ' and ' : ', '
    }`;
  }
  if (strArr[1] != 0) {
    strDay = `${strArr[1]} day${strArr[1] == 1 ? '' : 's'}${
      strArr[2] == 0 ? '' : strArr[3] == 0 && strArr[4] == 0 ? ' and ' : ', '
    }${strArr[2] == 0 ? ', ' : ''}`;
  }
  if (strArr[2] != 0) {
    strHour = `${strArr[2]} hour${strArr[2] == 1 ? '' : 's'}${
      strArr[3] == 0 ? '' : strArr[4] == 0 ? ' and ' : ', '
    }${strArr[3] == 0 && strArr[4] != 0 ? ' and ' : ''}`;
  }
  if (strArr[3] != 0) {
    strMin = `${strArr[3]} minute${strArr[3] == 1 ? '' : 's'}${
      strArr[4] == 0 ? '' : ' and '
    }`;
  }
  if (strArr[4] != 0) {
    strSec = `${strArr[4]} second${strArr[4] == 1 ? '' : 's'}`;
  }
  finalStr = strYear + strDay + strHour + strMin + strSec;
  return finalStr;
}

//console.log(formatDuration(0)); // 182 days, 1 hour, 44 minutes and 40 seconds
//console.log(formatDuration(132030240)); // 4 years, 68 days, 3 hours and 4 minutes
console.log(formatDuration(692904)); // 8 days, 28 minutes and 24 seconds
console.log(formatDuration(4813210)); // 55 days, 17 hours and 10 seconds

console.log(formatDuration(6854417)); // 79 days, 8 hours and 17 seconds
