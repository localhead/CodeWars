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
const number3 = 1234567980;

function nextBigger(n) {
  const arr = String(n).split('');
  let howMany = 0;
  let rememberPlace = 0;
  let flag = false;
  arr.forEach(function (numb, j, arr) {
    if (arr[j] < arr[j + 1]) {
      rememberPlace = j;
      howMany++;
      flag = true;
    }
  });

  if (flag == false) return -1;
  const tmp1 = arr[rememberPlace];
  const tmp2 = arr[rememberPlace + 1];
  arr[rememberPlace + 1] = tmp1;
  arr[rememberPlace] = tmp2;
  const res = Number(arr.join(''));
  console.log('how many = ' + howMany);
  console.log(rememberPlace);
  return res;
}

console.log(nextBigger(number3));
