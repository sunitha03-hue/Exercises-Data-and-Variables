// 1. Declare and assign the variables here:
let shuttleName = 'Determination';
let shuttleSpeed = 17500;
let distancetoMars = 225000000;
let distancetoMoon = 384400;
let milesperKilo = 0.621;


// 2. Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName);
console.log(typeof shuttleSpeed);
console.log(typeof distancetoMars);
console.log(typeof distancetoMoon);
console.log(typeof milesperKilo);

// Code your solution to exercises 3 and 4 here:

let milestoMars=distancetoMars*milesperKilo;
let hoursMars=milestoMars/shuttleSpeed;
let daystoMars=hoursMars/24;
console.log(shuttleName + " will take " + daystoMars + " days to reach Mars");

// Code your solution to exercise 5 here:
let milestoMoon=distancetoMoon*milesperKilo;
let hoursMoon=milestoMoon/shuttleSpeed;
let daystoMoon=hoursMoon/24;
console.log(shuttleName + " will take " + daystoMoon + " days to reach Moon");