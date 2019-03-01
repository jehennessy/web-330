/*
============================================
; Title:  hennessy-exercise-2.2.js
; Author: Professor Krasso
; Date:   28 February 2019
; Modified By: Jordan Hennessy
; Description: Prototypes
;===========================================
*/


// header
const header = require('../hennessy-header.js');

console.log(header.display("Jordan", "Hennessy", "Exercise 2.2"));
// end header

console.log("\n")
/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

// start program

// creating a person object
var person = {
  // creating a function to get the age
  getAge: function()
  {
    return this.age;
  }

};
// creating jordan object
var jordan = Object.create(person, {
  "age":
  {
    "value": "26", // setting the value for age
  },
  "fullName":
  {
    "value": "Jordan Hennessy", // setting the value for full name
  }
});

// calling the get age function with the jordan object
jordan.getAge();

// output
console.log("The person's full name is " + jordan.fullName + ".");
console.log("The person's age is " + jordan.getAge() + ".");





// end program
