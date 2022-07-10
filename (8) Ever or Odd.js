let number = 2;


function even_or_odd(number) {
  if (number % 2 == 0)
    return('Even')
  else
    return('Odd')
}

const res = even_or_odd(number);

console.log(res)