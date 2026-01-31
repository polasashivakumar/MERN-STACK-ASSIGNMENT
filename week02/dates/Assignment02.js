// Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
// --------------------------------------------------------------------

//  Given:


// Tasks:


// 
//   1.Check if:
//       * Today is before deadline → "Enrollment Open"
//       * Today is after deadline → "Enrollment Closed"
let enrollmentDeadline = new Date("2026-01-20");
let today=new Date();
if(today<enrollmentDeadline){
    console.log("enrollment open");
}else{
    console.log("enrollment closed");

}
 // 2. Validate user input date:
//       * Input: "2026-02-30"
//       * Detect whether the date is valid or invalid
let inputDate = new Date("2026-02-30");
if (inputDate.getTime()) {
    console.log("Invalid Date");
} else {
    console.log("Valid Date");
