/*
# Function Expressions
In this exercise, you will be writing some functions and function expressions, to manage the student enrollment records for a workshop.

**Note:** The spirit of this exercise is to use functions wherever possible and appropriate, so consider usage of array utilities `map(..)`, `filter(..)`, `find(..)`, `sort(..)`, and `forEach(..)`.

## Instructions (Part 1)
**Note:** In Part 1, use only function declarations or named function expressions.

You are provided three functions stubs -- `printRecords(..)`, `paidStudentsToEnroll()`, and `remindUnpaid(..)` -- which you must define.

At the bottom of the file you will see these functions called, and a code comment indicating what the console output should be.

1. `printRecords(..)` should:
	- take a list of student Ids
	- retrieve each student record by its student Id (hint: array `find(..)`)
	- sort by student name, ascending (hint: array `sort(..)`)
	- print each record to the console, including `name`, `id`, and `"Paid"` or `"Not Paid"` based on their paid status

2. `paidStudentsToEnroll()` should:
	- look through all the student records, checking to see which ones are paid but **not yet enrolled**
	- collect these student Ids
	- return a new array including the previously enrolled student Ids as well as the to-be-enrolled student Ids (hint: spread `...`)

3. `remindUnpaid(..)` should:
	- take a list of student Ids
	- filter this list of student Ids to only those whose records are in unpaid status
	- pass the filtered list to `printRecords(..)` to print the unpaid reminders

## Instructions (Part 2)

Now that you've completed Part 1, refactor to use **only** `=>` arrow functions.

For `printRecords(..)`, `paidStudentsToEnroll()`, and `remindUnpaid(..)`, assign these arrow functions to variables of such names, so that the execution still works.

As the appeal of `=>` arrow functions is their conciseness, wherever possible try to use only expression bodies (`x => x.id`) instead of full function bodies (`x => { return x.id; }`).
*/

// Function that takes a studentId and returns a student object (record)
var getStudentRecord = studentId => 
  
  // Return record if .id property matches id passed in
  studentRecords.find(
    record => record.id == studentId
  );



// Function to print records
var printRecords = recordIds =>
  
  // Create a new array of objects (student id's)
	recordIds.map(getStudentRecord)
  
  // Sort the objects by name
  .sort(
    (record1, record2) => (record1.name < record2.name) ? -1 : (record1.name > record2.name) ? 1: 0
  )
  
  // Loop through sorted array & print values to console
  .forEach(
    record => console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`)
  );



// Function to generate list of students to be enrolled
var paidStudentsToEnroll = () => [
  ...currentEnrollment,
  ...(
        // Filter array of student record objects for students who paid & not included in the currentEnrollment array
        studentRecords.filter(
          record => (record.paid && !currentEnrollment.includes(record.id))
        )
        // Create a new array of the student id's from the filtered list above
        .map(record => record.id)
  )  
];



// Function to find students to be enrolled but haven't paid
var remindUnpaid = recordIds => {

  printRecords(

    // Filter list of studentId's (to be enrolled) for unpaid students
    recordIds.filter(
      record =>
      // Return students who haven't paid
      !getStudentRecord(record).paid
    )
  );
  
}

// ********************************

var currentEnrollment = [ 410, 105, 664, 375 ];

var studentRecords = [
	{ id: 313, name: "Frank", paid: true, },
	{ id: 410, name: "Suzy", paid: true, },
	{ id: 709, name: "Brian", paid: false, },
	{ id: 105, name: "Henry", paid: false, },
	{ id: 502, name: "Mary", paid: true, },
	{ id: 664, name: "Bob", paid: false, },
	{ id: 250, name: "Peter", paid: true, },
	{ id: 375, name: "Sarah", paid: true, },
	{ id: 867, name: "Greg", paid: false, },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
