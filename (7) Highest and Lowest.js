/* 
In this little assignment you are given a string of space separated numbers, 
and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5" 
*/

let numbers = "1 2 -3 4 5";

function highAndLow(numbers){
    // в массив
    let str = numbers.split(" ");
    // в массиве найти меньшее
    const min = Math.min(...str);
    const max = Math.max(...str);

    console.log(str)
    console.log(min)
    console.log(max)
    const res = max + " " + min
    return (res);
    // потом найти большее
    // сохранить их в переменные
    // склеить их в строку ( наверное ) и вернуть
}

let res = highAndLow(numbers);
console.log(res)
