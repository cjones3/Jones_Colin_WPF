//Cookie Expressions
//Expression tells you what ingredients you need
//to make a certain number of cookies (in dozens).


var count = 3; //how many cookies you want (in dozens)
var butter; //tablespoons of butter per dozen
butter = 4 * count;
var shortening; //tablespoons of shortening per dozen
shortening = 2 * count;
var sugar; //tablespoons of sugar per dozen
sugar = 3 * count;
var eggyolk; //egg yolks per dozen
eggyolk = 1 * count;
var cc; //tablespoons of chocolate chips per dozen
cc = 5 * count;
var flour; //tablespoons of flour
flour = 10 * count;


console.log("To make " +count+ " dozen cookies you will need the following ingredients:");
console.log(+butter+ " tbsp butter");
console.log(+shortening+ " tbsp shortening");
console.log(+sugar+ " tbsp sugar");
console.log(+eggyolk+ " egg yolk(s)");
console.log(+cc+ " tbsp chocolate chips");
console.log(+flour+ " tbsp flour");

