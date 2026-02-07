let isLoggedIn = true;
let isProfileComplete = false;

let message = "";

if(!isLoggedIn){
    message = "Please login";
}
else if(!isProfileComplete){
    message = "Complete your profile";
}
else{
    message = "Welcome back!";
}

console.log(message);

let price = 1299;
let courseTag = "";

if(price > 1000){
    courseTag = "Premium Course";
}
else if(price >= 500){
    courseTag = "Standard Course";
}
else{
    courseTag = "Budget Course";
}

console.log(courseTag);

let hasPaid = true;
let hasCompletedBasics = false;

let enrollMessage = (hasPaid && hasCompletedBasics)
    ? "Enroll Now"
    : "Complete Requirements";

console.log(enrollMessage);
