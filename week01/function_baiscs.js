let billAmount = 0;

function addValue(val){
    billAmount += val;
    console.log(billAmount);
}
// 1. Add ₹500 to the total
addValue(500);
// 2. Add ₹1200 to the total
addValue(1200);

function reduceAmount(val){
    billAmount -= val;
    console.log(billAmount);
}
// 3. Apply a ₹200 discount
reduceAmount(200);

function applyGst(rate){
    billAmount += (billAmount * rate) / 100;
    console.log(billAmount);
}
// 4. Add 18% GST
applyGst(18);

// 5. Print the final bill amount
console.log("totalAmount", billAmount);
