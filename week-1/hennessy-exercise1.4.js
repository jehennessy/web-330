/*
============================================
; Title:  hennessy-exercise1.4.js
; Author: Professor Krasso
; Date:   23 February 2019
; Modified By: Jordan Hennessy
; Description: Duck Typing, A.K.A "Interfaces"
;===========================================
*/


// header
const header = require('../hennessy-header.js');

console.log(header.display("Jordan", "Hennessy", "Exercise 1.4"));
// end header

console.log("\n")
/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/

// start program

// creating a function constructor class for Car with one parameter
function Car(model) {
  this.model = model;
}

// creating a prototype start method that outputs "added to the racetrack" for Car
Car.prototype.start = function() {
  console.log("Car added to the racetrack!");
};

// creating a function constructor class for Truck with two parameters
function Truck(model, year) {
  this.model = model;
  this.year = year;
}

// creating a prototype start method that outputs "added to the racetrack" for Truck
Truck.prototype.start = function() {
  console.log("Truck added to the racetrack!");
};

// creating a function constructor class for Jeep with three parameters
function Jeep (model, year, color) {
  this.model = model;
  this.year = year;
  this.color = color;
}

// creating a prototype start method that outputs "added to the racetrack" for Jeep
Jeep.prototype.start = function() {
  console.log("Jeep added to the racetrack!");
};

// vehicle classes
var myCar = new Car("Mustang");
var myTruck = new Truck("F-150", "2019");
var myJeep = new Jeep("Wrangler", "2019", "White");

// define array
var racetrack = [];

// push vehicles to array
function driveIt(vehicle) {
  vehicle.start();
  racetrack.push(vehicle);
}

// push new class to driveIt function
driveIt(myCar);
driveIt(myTruck);
driveIt(myJeep);

// output
console.log("\n" + " -- The following vehicles have been added to the racetrack --");
for (var x = 1; x < 2; x++) {
  console.log(racetrack[x].constructor.name + ": " + racetrack[x].model );
};
for (var x = 0; x < 1; x++) {
  console.log(racetrack[x].constructor.name + ": " + racetrack[x].model );
};
for (var x = 2; x < 3; x++) {
  console.log(racetrack[x].constructor.name + ": " + racetrack[x].model );
};

// end program
