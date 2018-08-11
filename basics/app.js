//Hello World
console.log('hello world');

//Strings
let city = 'San Jose '
let county = 'Silicon Valley '
let state = 'California '
let country = 'United States '

console.log(city + county + state + country);

//Numbers
let age = 26;
let dogYears = (age + 1) / 7;

console.log(dogYears);

//Challenge Area

let studentScore = 18
let maxScore = 20
let percent = (studentScore / maxScore) * 100 + '%';

console.log(percent);



//Assigning Variables
let dogName = 'Mylo'
dogName += ' Truong'

console.log(dogName);

/* --------------------------
=== - equality operator
!== - no equal operator
< - less than operator
> - greater than operator
<= - less than or equal to operator
>= - greater than or equal to operator
--------------------------*/ 

let temp = 32
let isFreezing = temp <= 32;

console.log(isFreezing);


// -----Challenge 3----------
function price (i) {
  if(i <= 7){
    console.log('You are eligible for Child Discount');
  } else if (i >= 65) {
    console.log('You are eligible for Senior Discount');
  } else {
    console.log('You are in Standard Rate Category');
  }
}

console.log(price(7));
  