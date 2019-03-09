/*
============================================
; Title:  hennessy-exercise-3.3.js
; Author: Professor Krasso
; Date:   9 March 2019
; Modified By: Jordan Hennessy
; Description: The Singleton Pattern
;===========================================
*/


// header
const header = require('../hennessy-header.js');

console.log(header.display("Jordan", "Hennessy", "Exercise 3.3"));
// end header

console.log("\n")

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

// start program

var DatabaseSingleton = (function() {

  var instance;

  function createInstance() { // creates the instance

    var postgresDatabase = new Object("Database instance initialized!");

    return postgresDatabase;
  }

  return {

    getInstance: function() { // checks to see if instance is active

      if (!instance) {

        instance = createInstance();
      }

      return instance;
    }
  }
})();

function databaseSingletonTest() {

  var oracle = DatabaseSingleton.getInstance(); // defining an instance to be created
  var postgres = DatabaseSingleton.getInstance();
  console.log("Same database instance? %s", oracle === postgres); // output of results
}

// calls the test function
databaseSingletonTest();
// end program
