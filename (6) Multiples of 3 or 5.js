/* 
Если мы перечислим все натуральные числа до 10, кратные 3 или 5, мы получим 3, 5, 6 и 9. 
Сумма этих кратных равна 23.

Завершите решение так, чтобы оно возвращало сумму всех чисел, кратных 3 или 5, меньше переданного числа. 
Кроме того, если число отрицательное, верните 0 (для языков, в которых они есть).

Примечание. Если число кратно и 3, и 5, считайте его только один раз.
*/

let number = 18;


function solution(number){
    let res = 0;
    let sum = 0;

    number = number - 1;
    if (number <= 0)
        return(0);
    
    while (number > 0){
        if (number % 3 == 0)
            sum = sum + number;
        else if (number % 5 == 0)
            sum = sum + number;
        number--;
        console.log('sum is ', sum);
        console.log(number);
    }
    return(sum);
}

res = solution(number);
console.log(res);