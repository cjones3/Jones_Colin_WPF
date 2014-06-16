//Dog Food Expressions
//Expression tells you how many bags of of dog food you will need
//for a certain time (in months) and the cost of that.



var a = 60; //cost per bag of dog food in USD.
var b = 2; //how many bags bought per month.
var c = 12; //months
var d;
d = b * c; //bags per month multiplied by months requested.
var e;
e = a * d; //cost multiplied by months. Result gives you cost for requested amount of time.
console.log("It will require " + d + " bags of dog food to feed your dog for " + c + " months. A total of $" + e + " USD.");

