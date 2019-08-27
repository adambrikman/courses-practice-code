// Type JavaScript here and click "Run Code" or press Ctrl + s
// console.log('Hello, world!');


/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 of 1 ***/

function makePerson(name, age) {
	// add code here
	let personObj = Object.create(null);
  personObj.name = name;
  personObj.age = age;
  
  return personObj;

}

var vicky = makePerson('Vicky', 24);


// /********* Uncomment these lines to test your work! *********/
// console.log(vicky.name); // -> Logs 'Vicky'
// console.log(vicky.age); // -> Logs 24





/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

// Store in a variable the functionality to log 'hello'
var personStore = {
	// Create greet method where the value is a function that logs "hello"
  greet: function() { console.log("hello"); },
  
  // Create a introduce method where the below is logged to the console
  introduce: function() { console.log(`Hi, my name is ${this.name}`); }
};

// /********* Uncomment this line to test your work! *********/
// personStore.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/

// Create a function that creates a person object
function personFromPersonStore(name, age) {
  
  // Store in a variable a new person object, passing in the above greet functionality
	let createPerson = Object.create(personStore);
  
  // Add name & age properties on the person object
  createPerson.name = name;
  createPerson.age = age;

  // Return object
	return createPerson;
}

var sandra = personFromPersonStore('Sandra', 26);


// /********* Uncomment these lines to test your work! *********/
// console.log(sandra.name); // -> Logs 'Sandra'
// console.log(sandra.age); //-> Logs 26
// sandra.greet(); //-> Logs 'hello'



/*** CHALLENGE 3 of 3 ***/

// add code here

// sandra.introduce(); // -> Logs 'Hi, my name is Sandra'





/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

function PersonConstructor() {
  // Create a greet method using the this keyword
	this.greet = function() { console.log('hello'); };
  // Create a introduce method where the below is logged to the console
	this.introduce = function() { console.log(`Hello World, my name is ${this.name}`)};
}


// /********* Uncomment this line to test your work! *********/
var simon = new PersonConstructor;
// simon.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/

function personFromConstructor(name, age) {
  
  // Create a new person using the new keyword, calling the PersonConstructor function above
	let person = new PersonConstructor;
  
  // Assign name & age properties to object
  person.name = name;
  person.age = age;
  
  // Return new person
  return person;

}

var mike = personFromConstructor('Mike', 30);


// /********* Uncomment these lines to test your work! *********/
// console.log(mike.name); // -> Logs 'Mike'
// console.log(mike.age); //-> Logs 30
// mike.greet(); //-> Logs 'hello'



/*** CHALLENGE 3 of 3 ***/

// mike.introduce(); // -> Logs 'Hi, my name is Mike'


/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

class PersonClass {
	constructor(name) {
	 this.name = name;
	}

	// Create greet method where the value is a function that logs "hello"
  greet() { console.log("hello"); };

}

// /********* Uncomment this line to test your work! *********/
var george = new PersonClass;
// george.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/
// Create a developer class that extends PersonClass & has an introduce method
class DeveloperClass extends PersonClass {

  constructor(name, age) {
    super(name); // call the super class constructor and pass in the name parameter
  }
  
  introduce() { console.log( `Hello World, my name is ${this.name}.`) };
}

// /********* Uncomment these lines to test your work! *********/
// var thai = new DeveloperClass('Thai', 32);
// console.log(thai.name); // -> Logs 'Thai'
// thai.introduce(); //-> Logs 'Hello World, my name is Thai'


/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

var userFunctionStore = {
  sayType: function() {
    console.log("I am a " + this.type);
  }
}

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = "User";
  user.name = name;
  user.score = score;
  return user;
}

// only admins and use functions added to the adminFunctionStore
var adminFunctionStore = Object.create(userFunctionStore);

function adminFactory(name, score) {
  
  // Object.assign extends / overwrites properties on an object
  return Object.assign (
    // Start with a new user object
  	userFactory(name, score),
    // extend the object with the adminFunctionStore
    adminFunctionStore,
    // overwrite the "type" property
    { type: "Admin" }
  );
}

// add a function to the adminFunctionStore
adminFunctionStore.sharePublicMessage = function() {
  console.log('Welcome Users');
}

var adminFromFactory = adminFactory("Eva", 5);

// /********* Uncomment these lines to test your work! *********/
// adminFromFactory.sayType() // -> Logs "I am a Admin"
// adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"
