/* 
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. 
You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case 
*/

let n = 1234;

var countBits = function(n) {
    let i;
    let j;

    let reminder;
    tostring = '';

    i = n;  
    j = n;

    while (i != 0){   
        i = Math.floor(i / 2);
        j = j / 2; 
        reminder = Math.floor((j * 2) - (i * 2));

        tostring = tostring + (reminder + '');
        console.log(tostring);
    }
    // строку в массив
    let strArray = tostring.split('');
    let count = 0;
    var bits = 0;
    while(count < strArray.length){
        if(strArray[count] == 1)
            bits++;
        count++;
    }
    return bits;
};

var res = countBits(n);
console.log(res);