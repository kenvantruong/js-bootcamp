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

if(isFreezing)
  console.log('True');
  else 
  console.log('false');



// -----Challenge 3----------
function price (i) {
  let child = i <= 7
  let standard = i < 65 && i > 7
  let senior = i >= 65

  let discount = i <= 7 || i >= 65

  console.log(child + ' discount');
  console.log(senior + ' discount');

  console.log(discount);
}

console.log(price(26));
  

//-----True or False

let isAccountLocked = true

if (isAccountLocked) {
  console.log('Welcome');
} else {
  console.log('Denied');
}


//-----Challenge Area

let temperature = 95;

if(temperature >= 90){
  console.log('It is hot outside!');
} else if (temperature <= 45) {
  console.log('It is freezing outside!');
} else {
  console.log('Go for it. It is pretty nice!');
}

// Logical And Operator Challenge
let isGuestOneVegan = false;
let isGuestTwoVegan = false;

if(isGuestOneVegan === true && isGuestTwoVegan === true){
  console.log('Vegan Dishes Only Menu');
} else if (isGuestOneVegan === false && isGuestTwoVegan === true || isGuestOneVegan === true && isGuestTwoVegan === false) {
  console.log('Serve Both Vegan and Meat menu ');
} else {
  console.log('Serve Anything!');
}