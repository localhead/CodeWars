const n = 493193;

function digital_root(n) {
    let numArray = Array.from(String(n), Number);
    let res = 0;

    while (numArray.length >= 2)
    {
        res = 0;
        for (var i = 0; i < numArray.length; i++)
        {
            res+=numArray[i];
        }
        numArray = Array.from(String(res), Number);
    }
    
    return res > 10 ? digital_root(res) : res;
}

console.log(digital_root(n));