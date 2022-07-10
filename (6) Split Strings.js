/*  
Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it 
should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

let str = 'abcdert';

function solution(str){
    //перевести все в массив
    // посчитать кол-во элементов
    // если счетное - 1 вариант
    // если несчетное - 2 вариант
    let strArr = str.split('');
    let len = strArr.length;

    let strRes = [];

    let i = 0;
    let count = 0;

    if (len % 2 == 0){
        while(strArr[i]){
            strRes[count] = (strArr[i] + strArr[i + 1]);
            count++;
            i = i + 2;
        }
    }
    else{
        while(strArr[i]){
            strRes[count] = (strArr[i] + strArr[i + 1]);
            count++;
            i = i + 2;
            if (i > len){
                i = i - 1;
                strRes[count - 1] = strArr[i - 1] + "_";
                break;
            }
            
        }   
    }
    return strRes;
}

let res = solution(str);
console.log(res);