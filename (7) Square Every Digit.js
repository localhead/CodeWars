/* 
Welcome. In this kata, you are asked to square
every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer 
*/

let num = 9119;

function squareDigits(num){
    // расчленить в массив по одному.
    const arrayNum = Array.from(String(num), Number);
    let sq = 0;
    const concat = [];

    console.log(arrayNum);
    // Возвести каждое чисто в квадрат
    for (let i = 0; i < arrayNum.length; i++){
        sq = (arrayNum[i] * arrayNum[i]);
        console.log(sq);
        concat.push(sq);
        console.log(concat);
    }
    let strJoin = concat.join('');
    let resNumb = Number(strJoin);
    return resNumb;
}

let res = squareDigits(num);
console.log(res);
