/* 
Your goal in this kata is to implement a difference function, 
which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3] 
*/

let arr = [[1, 2, 2, 2, 3], [2]];
let arr1 = [
  [1, 2, 3],
  [1, 2],
];
let arr2 = [[1, 2], [1]];

function arrayDiff(a) {
  strRes = a[0];
  strSub = a[1];
  console.log(strRes);
  console.log(strSub);

  let i = 0;
  let j = 0;
  const strFin = [];
  while (strSub[i]) {
    while (strRes[j]) {
      if (strSub[i] != strRes[j]) {
        strFin.push(strRes[j]);
      }
      j++;
    }
    i++;
  }
  console.log(strFin);
  return strFin;
}

arrayDiff(arr2);
