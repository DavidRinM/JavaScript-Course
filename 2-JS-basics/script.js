/*
Variables & Data Types
*/
/*
var firstName = 'John';
var lastName = 'Smith';
var age = 28;

var fullAge = true;

var job;
console.log(firstName);
console.log(fullAge);
console.log(job);

job = 'Teacher';
console.log(job);  //Single Line Comment
*/
/*
Variable Mutation & Type Coercion
*/

//Typer Coercion
var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' Year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation

age = 'Twenty Eight';
job = 'Driver';

alert(firstName + ' is a ' + age + ' Year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What´s his last name?');
console.log(firstName + ' ' + lastName);

//Basic Operator

var year, yearJohn, yearMark;
year = 2018;
yearJohn = year - 28;
yearMark = year - 33;

ageJohn = 28;
ageMark = 33;

console.log(yearJohn);
console.log(yearMark);

//Math 
console.log(year + 2);
console.log(year * 2);
console.log(year/10);

//Logical
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

//Type of Operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "Mark´s older than John");
console.log(typeof x);

/*
    Operator Precedence
*/

var now = 2018;
var yearJohn = 1989;
var legalAge = 18;

//Multiple Operators
var isFullAge = now - yearJohn >= legalAge;
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple Assignments
var x,y;
x = y = (3+5) * 4 - 6; //8*4 - 6 ==26

console.log(x,y); 

//More Operators

x = x*2; // Same as x *= 2;
console.log(x);
x++;
console.log(x);

/*

Coding Challenge 1.
Mark & John are trying to compare their BMI (Body Mass Index), which is calculated
using the formula:

    BMI = mass / height^2
mass in kg & height in m

1.- Store Marks & John´s mass & Height in Variables.
2.-Calculate both BMI´s
3.-Create Boolean Variable containing information about wether Mark has a higher BMI than John
4.-Print a string to the console containing the variable of step 3 (Something like "Is Mark´s BMI 
Higher than John´s? True")
*/

// 1.-
var markMass = prompt("Mark´s Mass: ");
var markHeight = prompt("Mark´s Height: ");

var johnMass = prompt("John´s Mass: ");
var johnHeight = prompt("John´s Height: ");

// 2.-
var markBMI = markMass / (markHeight**2);
var johnBMI = johnMass / (johnHeight**2);
console.log(markBMI,johnBMI);

// 3.-
var bmiBool = markBMI > johnBMI;

// 4.-
console.log("Is Mark´s BMI Higher than John´s? " + bmiBool);

/*
If - Else statements
*/

var firstName = "John";
var civilStatus = "Single";
if (civilStatus == "Married") {
    console.log(firstName + " is Married");
}
else {
    console.log(firstName + " will hopefully be Married soon");
}

//Using Bolleand
var isMarried = true;
if (isMarried) {
    console.log(firstName + " is Married");
}
else {
    console.log(firstName + " will hopefully be Married soon");
}


/*

Boolean Logic

*/

var firstName = "John";
var age = 16;

if (age < 13) { 
    console.log(firstName + " is a boy");
}
else if (age < 20) { //Age between 13 - 20
    console.log(firstName + " is a teenager");
}
else if (age >= 20 && age < 30) {
    console.log(firstName + " is a young man");
}
else { // Age > 20
    console.log(firstName + " is a man");
}

/*
    Ternary Operator & Switch Statements
*/

var firstName = "John";
var age = 16;

//Ternary Operator
age >=18 ? console.log(firstName + " drinks beer") //like if statement
:   console.log(firstName + " drinks juice") //like else statemente

var drink = age>=18 ? "beer" : "juice"; //drink = beer if age>=18, else drink= juice
console.log(drink);

//Comparing to an elif

if (age >= 18){
    var drink = "beer";
}
else { 
    var drink = "juice";
}

//Switch
var job = "Teacher";
switch (job){
    case "Teacher":
    case "Instructor":
        console.log(firstName + " teaches kids how to code"); break;
    case "Driver":
        console.log(firstName + " drives an uber"); break;
    default:
        console.log(firstName + " does something else"); break;
}

/*
var firstName = "John";
var age = 16;

if (age < 13) { 
    console.log(firstName + " is a boy");
}
else if (age < 20) { //Age between 13 - 20
    console.log(firstName + " is a teenager");
}
else if (age >= 20 && age < 30) {
    console.log(firstName + " is a young man");
}
else { // Age > 20
    console.log(firstName + " is a man");
}
*/

switch(true){
    case age < 13:
        console.log(firstName + " is a boy"); break;
    case age <20:
        console.log(firstName + " is a teenager"); break;
    case age>=20 && age<30:
        console.log(firstName + " is a young man"); break;
    default:
        console.log(firstName + " is a man"); break;
}

/*
Truthy and Falsy Values & Equiality Operators

Falsy Values:   Undefined, null, 0, "", NaN
Truthy Values:  Not Falsy Values
*/

var height;
height = 23;

if (height || height ==0){
    console.log("Variable defined"); //Evaluates if varible exists
}
else{
    console.log("Variable hasn´t been defined");
}

// == Data types do no need to be de same
// === Data typs must be the same

/*

    Coding Challenge 2
John & Mike both play basketball in different teams. In the last 3 games,
John´s team scored 89, 120 and 103 points, whiles Mike´s scored 116, 94 and 123.

1.- Calculate Average score for each team.
2.- Decide which team wins in average(highest ave) and print in console. Include average score.
3.- Change scored to show different winner. Don´t forget there might be a draw.

4.- EXTRA: Mary also plays basketball and her team scored 97, 134 and 105. Like before,
log the average winner.
5.- Like before, change scores to generate different winners
*/


// 1.-
var jonhGame1 = 89;
var jonhGame2 = 120;
var jonhGame3 = 103;
var averageJohn = (jonhGame1 + jonhGame2 + jonhGame3)/3;

var mikeGame1 = 116;
var mikeGame2 = 94;
var mikeGame3 = 123;
var averageMike = (mikeGame1 + mikeGame2 + mikeGame3)/3;

// 2.-
if (averageJohn>averageMike){
    console.log("John wins with an average of: " + averageJohn);
}
else if (averageJohn<averageMike){
    console.log("Mike wins with an average of: " + averageMike);
}
else{
    console.log("There´s a draw");
}
 // 3.-
 averageJohn = 100;
 averageMike = 50;
 if (averageJohn>averageMike){
    console.log("John wins with an average of: " + averageJohn);
}
else if (averageJohn<averageMike){
    console.log("Mike wins with an average of: " + averageMike);
}
else{
    console.log("There´s a draw");
}

// 4.-
var maryGame1 = 97;
var maryGame2 = 134;
var maryGame3 = 105;
var averageMary = (maryGame1 + maryGame2 + maryGame3)/3;

if (averageJohn>averageMike){ //John Greater than mike
    if (averageJohn>averageMary){ // John greates
        console.log("John wins with: "+ averageJohn);
    }
    else{
        if(averageMary > averageMike){ //Mary greatest
            console.log("Mary wins with: " + averageMary);
        }
    }
}
else{ //Mike greater than John
    if(averageMike>averageMary){ //Mike greatest
        console.log("Mike wins with: " + averageMike);
    }
    else{ // Mike worse than Mary
        if(averageMary>averageJohn){ // Mary the greatest
            console.log("Mary wins with: " + averageMary);
        }
    }
}

averageJohn = 5;
averageMary = 60;
averageMike = 80;
if (averageJohn>averageMike && averageJohn>averageMary){
    console.log("John wins with: " + averageJohn);
}
else if (averageMike>averageJohn && averageMike>averageMary){
    console.log("Mike wins with: " + averageMike);
}
else if (averageMary>averageJohn && averageMary>averageMike){
    console.log("Mary wins with: " + averageMary);
}
else{
    console.log("Theres a draw");
}


/*
    Functions
 */

 function calculateAge(birthYear){
    return 2018 - birthYear;
 }

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn);
console.log(ageMike);
console.log(ageJane);

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;

    if(retirement>0){
        console.log(firstName + " retires in " + retirement + " years");
    }
    else{
        console.log("Already retired");
    }
}

yearsUntilRetirement(1990, "John");

/*
Function Statements & Expressions
*/

//Function Declaration
/* 
    function whatDoYouDo(job, firstName){}
*/
//Function Expression
var whatDoYouDo = function(job, firstName){
    switch(job){
        case "Teacher":
            return firstName + " teaches kids how to code";
        case "Driver":
            return firstName + " drives a cab in Lisbon";
        case "Designer":
            return firstName + " designs beautiful websites";
        default:
            return firstName + " does something else";
    }
}

console.log(whatDoYouDo("Teacher", "John")); // whatDoYouDo("Teacher", "John") -> Expression
console.log(whatDoYouDo("Designer", "Jane"));
console.log(whatDoYouDo("Retired", "Mark"));

// function Statement /Declarations does not produce immediate results


/*
    Arrays
*/

//Initialize new Array
var names = ["John", "Mark", "Jane"];
var years = new Array(1990, 1969, 1948);

console.log(names);
console.log(names[2]);
console.log(names.length);

// Data mutation
names[1] = "Ben";
names[names.length] = "Mary";
names[5] = "Barry"; //Array appears with empty spaces

//Different Data Types
var john = ["John", "Smith", 1990, "Teacher", false];
john.push("Blue"); //Adds new element at the end
john.unshift("Mr."); //Adds element at the start
console.log(john);

john.pop();//removes element at the end
john.shift(); //removes element at the start
john.indexOf(1990); //returns position where element is in the Array. If it doesn´t exist, returns -1

var isDesigner = john.indexOf("Desginser") === -1 ? "John is not a designer" : "John IS a designer"

console.log(isDesigner); 

/*

    Coding Challenge 3
John & his family went on a holiday nd went to 3 different restaurants.
Bills were: $124, $48 & $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function).
He likes to tip 20% of the bill when the bill is less than $50, 15% when it´s between 50 and 200,
and 10% when its more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill.)
2) Containing all three final paid ammounts (bill + tip)
*/

function tipCalculator(bill){
    var percentage;
    if (bill<50){
        percentage = 0.2; 
    }
    else if(bill>50 && bill<200){
        percentage = 0.15;
    }
    else{
        percentage = 0.1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];
var finalBill = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2],];

/**
    Objects & Properties
 */

 var john = {
     firstName: "John",
     lastName: "Smith",
     birthYear: 1990,
     family: ["Jane", "Mark", "Bob", "Emily"],
     job: "Teacher",
     isMarried: false
 };
 
 console.log(john);
 console.log(john.firstName);
 console.log(john["lastName"]);
 
 var x = "birthYear";
 console.log(john[x]);

 john.job = "Desginer";
 john["isMarried"] = true;
 console.log(john);

 //Other wayt to create Objects
 var jane = new Object();
 jane.Name = "Jane";
 jane.birthYear = 1969;
 jane["lastName"] = "Smith";
 console.log(jane);

 /*
    Objects & Methods
*/
var john = {
    firstName: "John",
    lastName: "Smith",
    birthYear: 1990,
    family: ["Jane", "Mark", "Bob", "Emily"],
    job: "Teacher",
    isMarried: false,
    calcAge: function(){ //New method for object John
        this.age = 2019 - this.birthYear; //Using John´s birth Year
    }
};

console.log(john.calcAge()); //Using Method by passing birthyear
console.log(john);

/*
    Coding Challenge 4
Let´s remember the first coding challenge where Mark & John compared their BMI´s.
Let´s now implement the same functionality with Objects & Methods.

1.-For each of them, create an object with properties for their full name, mass & height.
2.-Add a method to each object to calculate the BMI. Save the BMI to the object and also return it.
3.-In the end, log to the console who has the highest BMI, together with the full name & BMI.
Do not forget the might have the same BMI.

BMI = mass/height^2
 */
 var john = {
     fullName: "John Smith",
     mass: prompt("John´s Mass: "),
     height: prompt("John´s Height: "),
     calcBMI: function(){
        this.bmi = this.mass/(this.height * this.height);
        return this.bmi;
     }
 }

 var mark ={
     fullName: "Mark Smith",
     mass: prompt("Mark´s Mass: "),
     height: prompt("Mark´s Height: "),
     calcBMI: function(){
        this.bmi = this.mass/(this.height * this.height);
        return this.bmi;
     }
 }

 if (john.calcBMI() > mark.calcBMI()){ //we call both of the methods and compare them
     console.log(john.fullName + " has the highest BMI wtih " + john["bmi"]);
 }
 else if (john.bmi < mark.bmi){ //BMI values already exist
    console.log(mark.fullName + " has the highest BMI wtih " + mark["bmi"]);
 }
 else{
     console.log("They both have the same BMI");
 }

 /**
    Loops and Iteration 
*/

//for loop
for(var i=0; i<10; i++){ 
    console.log(i+1);
}
for(var i=1; i<=20; i+=2){ // i+=2
    console.log(i);
}

var john = ["John", "Smith", 1990, "Teacher", false];
for(i=0; i < john.length; i++){
    console.log(john[i]);
}

//while loop
var j=0;
while(j<john.length){
    console.log(john[j]);
    j++;
}

// Continue & break statements
for(i=0; i < john.length; i++){
    if(typeof john[i] !== 'string') continue; // If john[i] is strictly different to a string, skip this iteration
    console.log(john[i]);
}

for(i=0; i < john.length; i++){
    if(typeof john[i] !== 'string') break;// If john[i] is strictly different to a string, break loop
    console.log(john[i]);
}

//Loop backwards
for (i=john.length-1; i>=0; i--){
    console.log(john[i]);
}

/**
    Conding Challenge 5

Remember the tip Calculator challenge? Let´s create a more advanced version using everything we´ve learned.

This time, John and his family went to 5 different restaurants.Bills were $124, $48, $268, $180 & $42.
John likes to tip 20% when bill is less than $50, 15% when it´s between $50-$$200 and 10% when it´s more
than $200

Implement a tip calculator using objects and loops:
1.-Create an object with an array for the bill values.
2.-Add a method to calculate the tip
3.-This method should include a loop to iterate over all the paid bills and do the tips calculations.
4.-As an output, create 1) a new array containing all tips, 2) an array containing final paid ammounts.
    HINT: Start with 2 empty arrays as properties and then fill them up in the loop

EXTRA AFTER FINISHING:
Mark´s family also went on a holiday, going to 4 different restaurants.
Bills were: $77, $375, $110 and $45.
Mark likes to tip 20% when bill is less than $100, 10% when bill is betwaeen $100-$300 and 25% when bill is 
more than $300.

5.-Implement the same functionality as before, this time using Mark´s tipping rules.
6.-Create a function (not a method) to calculate the average of a given array of tips .
HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0)
After you have the sum, divide it by the number of elements.
7.-Calculate the average tip for each family.
8.-Log to the console which family paid the highest tips on average
*/

var john ={
    bills: [124,48,268,180,42],
    calcTip: function(){

        this.tips = [];
        this.totalAm = [];

        for(var i=0; i<this.bills.length; i++){
            var percentage;
            var bill = this.bills[i]; // bill = bills ammount in the iteration i
            if(bill<50){
                percentage = 0.2;
            }
            else if(bill>50 && bill<200){
                percentage = 0.15;
            }
            else{
                percentage = 0.1;
            }
            this.tips[i] = bill * percentage; // Calculate tip and add it to tips and total ammount
            this.totalAm[i] = bill + bill*percentage;
        }
    }
}

var mark ={
    bills: [77,375,110,45],
    calcTip: function(){

        this.tips = [];
        this.totalAm = [];

        for(var i=0; i<this.bills.length; i++){
            var percentage;
            var bill = this.bills[i];
            if(bill<100){
                percentage = 0.2;
            }
            else if(bill>=100 && bill<=300){
                percentage = 0.1;
            }
            else{
                percentage = 0.25;
            }
            this.tips[i] = bill * percentage;
            this.totalAm[i] = bill + bill*percentage;
        }
    }
}

function averagetip(tips){
    var sum=0;
    for(var j=0; j<tips.length; j++){
        sum = sum + tips[j];
    }
    return sum / tips.length;
}

john.calcTip();
mark.calcTip();

john.average = averagetip(john.tips);
mark.average = averagetip(mark.tips);

if(john.average > mark.average){
    console.log('John\´s family paid more tips with an average of : ' + john.average);
}
else if (john.average < mark.average){
    console.log('Mark\´s family paid more tips with an average of : ' + mark.average);
}
else{
    console.log("Same tips Average");
}