//Template Literals and Default Parameters Value

let favmovie = (movie = 'goosebumps 2016', name = 'World') =>
    console.log(`My name is ${name} and my favorite movie is ${movie}.`);

favmovie('Fury', 'Joel');

// Arrow Functions

let fullname = 'Joel Ford';
let getFirstname = fullname.split(' ');
console.log(getFirstname[0]);




function obj(x, y) {
    fullname;
    let age = 24;
    let exponet = x ^ y;
    let product = x * y;
    console.log(`My name is ${fullname}, I am ${age}. Here is some math. 9^7= ${exponet} and 9*7= ${product}!`)
};

obj(9, 7);

// spread

let dis = ['Joel','Birmingham','Chicken Salad']

function three(name,place,favfood) {
console.log(name,place,favfood);
};

three(...dis);

let name ='Joel Wade Ford';

function idk(cherry){
    let words = cherry.split(' ', 3);
console.log(words);
for ( let i=0; i < words.length; i++){
console.log(words[i]);
};
};

idk(name);




