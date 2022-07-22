'use strict';

/* Create a function that takes a positive integer and returns the next 
bigger number that can be formed by rearranging its digits. 
For example: 

12 ==> 21
513 ==> 531
2017 ==> 2071

9 ==> -1
111 ==> -1
531 ==> -1

*/

const number0 = 2017;
const number1 = 513;
const number2 = 12;
const number3 = 85294; // 85429
const number4 = 654321;

function nextBigger(n) {
  const arr0 = Array.from(String(n), Number);
  let remLeftInd = 0;

  const doTheSwipe = function (i, array) {
    let tmpH = array[i];
    let tmpL = array[i - 1];
    array[i] = tmpL;
    array[i - 1] = tmpH;
    return array;
  };

  console.log(arr0);
  for (let i = arr0.length - 1; i >= 0; i--) {
    console.log('second ' + arr0[i]);
    if (arr0[i] > arr0[i - 1]) {
      remLeftInd = i;
      doTheSwipe(i, arr0);
      console.log(arr0);
      break;
    }
  }
}

console.log(nextBigger(number3));
