/* 
You probably know the "like" system from Facebook and other pages. 
People can "like" blog posts, pictures or other items. 
We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. 
It must return the display text as shown in the examples:

[]                                -->  no one likes this
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this" 
*/

let names = ["Alex", "Jacob", "Mark", "Max", "Max", "Max", "Max", "Max", "Max"];

function likes(names) {
    // Посчитаем сколько всего имен.
    let i = 0;
    let res = '';

    while (names[i])
        i++;
    if (i == 0){
        res = "no one likes this";
        return res;
    }
    if (i == 1){
        res = names[i - 1] + " likes this";
        return res;
    }
    if (i == 2){
        res = names[i - 2] + " and " + names[i - 1] + " like this";
        return res;
    }
    if (i == 3){
        res = names[i - 3] + ", " + names[i - 2] + " and " + names[i - 1] + " like this";
        return res;
    }
    else {
        res = names[0] + ", " + names[1] + " and " + (i - 2) + " others like this";
        return res;
    }
}

let output = likes(names);
console.log(output);