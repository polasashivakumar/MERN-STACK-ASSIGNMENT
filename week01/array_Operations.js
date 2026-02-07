const temperatures = [32, 35, 28, 40, 38, 30, 42];

let aboveLimit = temperatures.filter(t => t > 35);
console.log(aboveLimit);

let fahrenheitTemps = temperatures.map(t => (t * 9/5) + 32);
console.log(fahrenheitTemps);

let averageTemp = temperatures.reduce((sum, t) => sum + t, 0) / temperatures.length;
console.log(averageTemp);

let firstHigh = temperatures.find(t => t > 40);
console.log(firstHigh);

let indexOf28 = temperatures.findIndex(t => t === 28);
console.log(indexOf28);

const courses = ["javascript", "react", "node", "mongodb", "express"];

let longCourses = courses.filter(c => c.length > 5);
console.log(longCourses);

let upperCourses = courses.map(c => c.toUpperCase());
console.log(upperCourses);

let courseLine = courses.reduce((res, c) => res + " | " + c.toUpperCase(), "JAVASCRIPT").replace("JAVASCRIPT | JAVASCRIPT","JAVASCRIPT");
console.log(courseLine);

let foundReact = courses.find(c => c === "react");
console.log(foundReact);

let nodeIndex = courses.findIndex(c => c === "node");
console.log(nodeIndex);

const marks = [78, 92, 35, 88, 40, 67];

let passedMarks = marks.filter(m => m >= 40);
console.log(passedMarks);

let graceMarks = marks.map(m => m + 5);
console.log(graceMarks);

let highestMark = marks.reduce((max, m) => m > max ? m : max, marks[0]);
console.log(highestMark);

let firstFail = marks.find(m => m < 40);
console.log(firstFail);

let indexOf92 = marks.findIndex(m => m === 92);
console.log(indexOf92);
