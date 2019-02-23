/*
============================================
; Title:  hennessy-exercise1.3.js
; Author: Professor Krasso
; Date:   23 February 2019
; Modified By: Jordan Hennessy
; Description: Class refresher
;===========================================
*/


// header
const header = require('../hennessy-header.js');

console.log(header.display("Jordan", "Hennessy", "Exercise 1.3"));
// end header

console.log("\n")

// start program

// creating a function class
function cellPhone(manufacturer){

  // defining properties
  this.manufacturer = manufacturer;
  this.model = "Xs Max";
  this.color = "Gold";
  this.price = "Starting at $1,099.00";

  // creating method to return price
  this.getPrice = function () {
    return "Price: " + this.price;
  };

   // creating method to return model
  this.getModel = function () {
    return "Model: " + this.model;
  };

   // creating method to return object details
  this.getDetails = function () {
    return "Manufacturer: " + this.manufacturer + "\n" +
    this.getModel() + "\n" + "Color: " + this.color + "\n" +
    this.getPrice();
  };

};

// creating new cell phone object
var myCell = new cellPhone("Apple");

// output
console.log(" -- DISPLAYING CELL PHONE DETAILS --" + "\n" + myCell.getDetails());

// end program
