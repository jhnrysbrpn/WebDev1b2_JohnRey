var lenght = 0;
var width = 0;
var height = 0;

width = 10;
lenght = 23;
height = 15;

var prouduct = lenght * width * height;
console.log(prouduct);

if(prouduct % 2 != 0){
    console.log("product is odd number");
} else {
    console.log("product is even numbrer");
}

//Check if Divisible by 3
if(prouduct % 3 == 0){
    console.log("divisible by 3");
} else {
    console.log("not a divisible by 3");
}