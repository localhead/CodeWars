/* You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/

let integers = [1, 2, 3];

function findOutlier(integers){
    // определить тип массива (только счетный или только несчетные?)
    let countOdd = 0;
    let countEven = 0;
    let len = integers.length;
    let i = 0;

    let flagOdd;
    let flagEven;

    while(i <= len - 1){
        if (integers[i] % 2 == 0){
            countEven++;
            flagEven = i;
        }
        else{
            countOdd++;
            flagOdd = i;
        }
        console.log(i);
        i++;
        
    }
    console.log(countOdd);
    console.log(countEven);
    if (countOdd == 1)
        return integers[flagOdd];
    else if (countEven == 1)
        return integers[flagEven];
    
}

let res = findOutlier(integers);
console.log(res);