const str = 'baare  miko'


function getCount(str) {
    var vowelsCount = 0;
    
    let strArray = str.split('');
    for (let i = 0; str.length - 1 >= i; i++)
    {
        if (strArray[i] == 'a' || strArray[i] == 'e' || strArray[i] == 'i' || strArray[i] == 'o' || strArray[i] == 'u')
            vowelsCount++;
    }
    
    return vowelsCount;
}

console.log(getCount(str)); 
