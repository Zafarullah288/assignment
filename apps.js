//? Chapter No.12 & 13

// answer Q1

// const inputChar = prompt("Enter a character:");

// if (inputChar.length === 1) {
//   const charCode = inputChar.charCodeAt(0);

//   if (charCode >= 50 && charCode <= 57) {
//     console.log("The input is a number.");
//   } else if (charCode >= 70 && charCode <= 90) {
//     console.log("The input is an uppercase letter.");
//   } else if (charCode >= 98 && charCode <= 122) {
//     console.log("The input is a lowercase letter.");
//   } else {
//     console.log("The input is not a number or a letter.");
//   }
// } 

// else {
//  console.log("Please enter a single character.");
// }


// answer Q2

// var num1 = +prompt("Enter Any Number Here!");
// var num2 = +prompt("Enter Another Number Here!");

// if (num1 > num2){
//     alert(num1 + " is greater than " + num2);
// }

// else {
//     alert(num2 + " is greater than " + num1);
// }

// answer Q3

// var num = +prompt("Enter Any Number Here!");

// if (num == 0){
//     alert("Number is Zero.");
// }

// else if (num > 0) {
//     alert("Number is Positive.");
// }

// else {
//     alert("Number is Negative.");
// }

//TODO Question Node.04

// var vowel = prompt("Enter any Alphabet.");

// if (vowel == 'a' || vowel == 'e' || vowel == 'i' || vowel == 'o' || vowel == 'u') {
//     alert("It's a Vowel.");
// }

// else {
//     alert("It's not a Vowel.");
// }

// answer Q5

// var Password = "zafar123";

// var passWord = prompt("Please Enter your Password");

// if (passWord == 0) {
//     do {
//     var passWord = prompt("Please Enter your Password");
//     }

//     while (passWord == 0);
// }

// if (passWord == Password) {
//     alert("Correct! The Password you entered matches the original password.");
// }

// else {
//     alert("Incorrect passwrod.");
// }

// answer Q6

// var greeting ;
// var hour = 13 ;

// if (hour < 18) {
//     greeting = "Good Day.";
// }

// else {
//     greeting = "Good Evening.";
// }

// answer Q7

// var time = +prompt("Enter Time.");

// if (time >= 0000 && time < 1200) {
//     alert("Good Morning.");
// }

// else if (time >= 1200 && time < 1700) {
//     alert("Good Afternoon.");
// }

// else if (time >= 1700 && time < 2100) {
//     alert("Good Evening.");
// }

// else {
//     alert("Good Night.");
// }

//? Chapter No.14 & 16

// answer Q1

// let students = [];

// answer Q2

// let students = [];

//! Write in console

// students.push("Muhammad Ameen");

// answer Q3

// var stringArray = ["Ameen","Biryani","Karachi","Saylani"];

// answer Q4

// var numberArray = [1,2,3,4,5,6,7,8,9,10];

// answer Q5

// var boolArray = [true , false];

// answer Q6

// var mixedArray = ["Canada" , 69 , "Kela" , 19 , false];

// answer Q7

// var qualifications = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M.Phil" , "PhD"];

// document.write("Qualifications : <br>");

// for (var i=0 ; i < 8 ; i++) {
//     document.write(qualifications[i] + "<br>" );
// }

// answer Q8

// var studentsName = ["Ameen" , "Anas" , "Daniyal"];
// var studentsScore = [342 , 429 , 121];

// for (var i=0 ; i < 3 ; i++) {

//     var Percentage = 0 ;
//     Percentage = (studentsScore[i]*100)/500;

//     document.write("Score of " + studentsName[i] + " is " + studentsScore[i] + ". Percentage : " + Percentage + "%." + "<br>")
// }

// answer Q9

//* (a)

// var color = ["Yellow" , "Black" , "Pink" , "Purple" , "Brown"];

// var new = prompt("Enter any New Color in the begining!");

// color.unshift(new);

// document.write("Updated Color Array : <br>" + color);

//* (b)

// var color = ["Yellow" , "Black" , "Pink" , "Purple" , "Brown"];

// var new = prompt("Enter any New Color in the End!");

// color.push(new);

// document.write("Updated Color Array : <br>" + color);

//* (c)

// var color = ["Yellow" , "Black" , "Pink" , "Purple" , "Brown"];

// var new = prompt("Enter any Two Color in the begining!");

// color.unshift(new);

// document.write("Updated Color Array : <br>" + color);

//* (d)

// var color = ["Yellow" , "Black" , "Pink" , "Purple" , "Brown"];

// color.shift();

// document.write("Updated Color Array : <br>" + color);

//* (e)

// var color = ["Yellow" , "Black" , "Pink" , "Purple" , "Brown"];

// color.pop();

// document.write("Updated Color Array : <br>" + color);

//* (f)

// var color = ["Yellow" , "Black" , "Pink" , "Purple" , "Brown"];

// var join = prompt("Add From?");

// var howMany = prompt("Color Name!");

// var slicecolor = color.slice(join, howMany);

// document.write("Updated Color Array : <br>" + slicecolor);

//* (g)

// var color = ["Yellow" , "Black" , "Pink" , "Purple" , "Brown"];

// alert("Yellow , Black , Pink , Purple , Brown");

// var remove = prompt("Remove From?");

// var howMany = prompt("How Many?");

// color.splice(remove, howMany);

// document.write("Updated Color Array : <br>" + color);

//TODO Question Node.10

// var Score = [320 , 230 , 480 , 120];

// document.write("Scores of Students : " + Score + "<br>");

// for (var i=0 ; i < 4 ; i++) {

//     for (var j=0 ; j < 3; j++) {

//         if (studentsScore[j] > studentsScore[j+1]) {

//             var temp = studentsScore[j] ;
//             studentsScore[j] = studentsScore[j+1] ;
//             studentsScore[j+1] = temp ;
            
//         }
    
//     }

// }

// document.write("Ordered Scores of Students : " + Score);

// answer Q11

// var cities = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Lahore"];

// var selectedcities = [];

// document.write("Cities List: <br>" + cities);

// selectedcities.push(cities[2]);
// selectedcities.push(cities[3]);

// document.write("<br>Selected Cities List: <br>" + selectedcities);

// answer Q12

// var arr = ["This" , "is" , "my" , "Cat"];

// document.write("Array : <br>");
// document.write(arr);

// document.write("Sting : <br>");

// for (var i=0 ; i < 4 ; i++) {
//     document.write(arr[i] + " ");
// }

// answer Q13

// var arr = ["Keybord" , "Mouse" , "Printer" , "Monitor"];

// document.write("<h3>Devices : </h3>");
// document.write(arr + "<br>");

// for (var i=0 ; i < 4 ; i++) {

//     document.write("<br>Out :<br>");
//     document.write(arr[i] + " ");

// }

// answer Q14

// var arr = ["Keybord" , "Mouse" , "Printer" , "Monitor"];

// document.write("<h3>Devices : </h3>");
// document.write(arr + "<br>");

// for (var i=3 ; i >= 0 ; i--) {

//     document.write("<br>Out :<br>");
//     document.write(arr[i] + " ");

// }

//answer Q15

// var phoneManufacturers = ["Apple" , "Samsung" , "Motorola" , "Nokia" , "SONY" , "Haier"];

// let selectMenuHTML = '<select id="manufacturerSelect">';

// phoneManufacturers.forEach(manufacturer => {
//   selectMenuHTML += `<option value="${manufacturer}">${manufacturer}</option>`;
// });

// selectMenuHTML += '</select>';

// document.write(selectMenuHTML);