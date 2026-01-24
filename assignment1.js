// Assignment 1: Date Creation & Extraction (Beginner)
// ---------------------------------------------------
// Tasks:
//        1. Create a Date object for current date & time.
//        2. Extract and display:
//                     * Year
//                     * Month (human readable)
//                     * Date
//                     * Day of week
//                     * Hours, minutes, seconds


let date1=new Date()
console.log("date1 is",date1);
console.log(Date.now())
console.log(date1.toString())

console.log(date1.getFullYear())
console.log(date1.getMonth()+1)
console.log(date1.getDate())
console.log(date1.getDay())
console.log(date1.getHours())
console.log(date1.getMinutes())
console.log(date1.getSeconds())

//       3. Display the date in this format:
//                     DD-MM-YYYY HH:mm:ss
console.log(date1.getDate() + "-" + (date1.getMonth() + 1) + "-" + date1.getFullYear() + " " + date1.getHours() + ":" + date1.getMinutes() + ":" + date1.getSeconds()+":"+date1.getMilliseconds())

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
}   
// Assignment 3: Age Calculator (Intermediate)
// -------------------------------------------
// Input:
     let dob = "2000-05-15";


// Tasks:
//         1. Calculate exact age in years
console.log("Age in years:", today.getFullYear() - new Date(dob).getFullYear());
