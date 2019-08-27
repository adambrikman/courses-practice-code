/*
# `this`
In this exercise, you will refactor some code that manages student enrollment records for a workshop, from the module pattern to the namespace pattern using the `this` keyword.

## Instructions
1. Remove the `defineWorkshop()` module factory, and replace it with an object literal (named `deepJS`) that holds all the module's functions, as well as the `currentEnrollment` and `studentRecords` data arrays.

2. Change all internal function references and references to the data arrays to use the `this` keyword prefix.

3. Make sure any place where a `this`-aware callback is passed is hard-bound with `bind(..)`. Don't `bind(..)` a function reference if it's not `this`-aware.
*/

var deepJS = {
	  currentEnrollment: [],
	  studentRecords: [],

	// ********************************
  
  /*
      Any place that we:
          1. Reference a property (that we previously referenced lexically as a variable) or
          2. When we reference a function that is now a method
          
      It needs a 'this.' in front of it.
      
      
  */

	addStudent(id,name,paid) {
    // #1 Previously a variable
		this.studentRecords.push({ id, name, paid, });
	},
	enrollStudent(id) {
    // #1 Previously a variable
		if (!this.currentEnrollment.includes(id)) {
      
      // #1 Previously a variable
			this.currentEnrollment.push(id);
		}
	},

	printCurrentEnrollment() {
    // #2 Previously a function, now a method | #1 Previously a variable
		this.printRecords(this.currentEnrollment);
	},

	enrollPaidStudents() {
    // #1 Previously a variable | #2 Previously a function, now a method
    this.currentEnrollment = this.paidStudentsToEnroll();
    
    // #2 Previously a function, now a method
    this.printCurrentEnrollment();
	},

	remindUnpaidStudents() {
    // #2 Previously a function, now a method | #1 Previously a variable
		this.remindUnpaid(this.currentEnrollment);
	},

	// ********************************

  

	getStudentFromId(studentId) {
    // #1 Previously a variable
		return this.studentRecords.find(matchId);

		// *************************

		function matchId(record) {
			return (record.id == studentId);
		}
	},


	// ********************************


	printRecords(recordIds) {
    // #3 Hard binding
		var records = recordIds.map(this.getStudentFromId.bind(this));

    // #2 Previously a function, now a method
		records.sort(this.sortByNameAsc);

    // #2 Previously a function, now a method
		records.forEach(this.printRecord);
	},

	sortByNameAsc(record1,record2){
		if (record1.name < record2.name) return -1;
		else if (record1.name > record2.name) return 1;
		else return 0;
	},

	printRecord(record) {
		console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`);
	},


	// ********************************


	paidStudentsToEnroll() {
    
    // #1 Previously a variable | #3 hard binding
		var recordsToEnroll = this.studentRecords.filter(this.needToEnroll.bind(this));

    // #2 Previously a function, now a method
		var idsToEnroll = recordsToEnroll.map(this.getStudentId);

		return [ ...this.currentEnrollment, ...idsToEnroll ];
	},

	needToEnroll(record) {
    // #1 Previously a variable
		return (record.paid && !this.currentEnrollment.includes(record.id));
	},

	getStudentId(record) {
		return record.id;
	},


	// ********************************


	remindUnpaid(recordIds) {
    // #3 Hard binding
		var unpaidIds = recordIds.filter(this.notYetPaid.bind(this));

		this.printRecords(unpaidIds);
	},

	notYetPaid(studentId) {
    // #2 Previously a function, now a method
		var record = this.getStudentFromId(studentId);
		return !record.paid;
	}
}




// ********************************

deepJS.addStudent(311,"Frank",/*paid=*/true);
deepJS.addStudent(410,"Suzy",/*paid=*/true);
deepJS.addStudent(709,"Brian",/*paid=*/false);
deepJS.addStudent(105,"Henry",/*paid=*/false);
deepJS.addStudent(502,"Mary",/*paid=*/true);
deepJS.addStudent(664,"Bob",/*paid=*/false);
deepJS.addStudent(250,"Peter",/*paid=*/true);
deepJS.addStudent(375,"Sarah",/*paid=*/true);
deepJS.addStudent(867,"Greg",/*paid=*/false);

deepJS.enrollStudent(410);
deepJS.enrollStudent(105);
deepJS.enrollStudent(664);
deepJS.enrollStudent(375);

deepJS.printCurrentEnrollment();
console.log("----");
deepJS.enrollPaidStudents();
console.log("----");
deepJS.remindUnpaidStudents();

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
