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
console.log(date1.getDate() + "-" + (date1.getMonth() + 1) + "-" + date1.getFullYear() + " " + date1.getHours() + ":" + date1.getMinutes() + ":" + date1.getSeconds()+":"+date1.getMilliseconds()
