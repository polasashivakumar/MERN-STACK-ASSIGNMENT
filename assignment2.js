// Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
// -------------------------------------------------------
// 🧪 Given Data:
  
// Hands-On 2: Deep Copy (Isolation & Safety Use Case)
// ---------------------------------------------------

// 🧪 Given Data:
//                 const order = {
//                   orderId: "ORD1001",
//                   customer: {
//                     name: "Anita",
//                     address: {
//                       city: "Hyderabad",
//                       pincode: 500085
//                     }
//                   },
//                   items: [
//                     { product: "Laptop", price: 70000 }
//                   ]
//                 };

// 🎯 Task:
//       1. Create a deep copy of order
//       2. Modify in copied object:
//             i. customer.address.city
//             ii. items[0].price
//             iii. Verify original object remains unchanged    
         const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };//  Task
//     1. Create a shallow copy of user
let copyuser={...user};
user.id=202;
user.preferences.theme="light";
console.log("original user",user);

console.log("shallow copy user",copyuser);
//     2. Change:
//           i. name in the copied object
//           ii. preferences.theme in the copied object
//           iii .Log both original and copied objects
//           iv. Observe what changes and what doesn’t
let order = {
                    orderId: "ORD1001", 
                    items: [
                     { product: "Laptop", price: 70000 }
                    ],
                    price: 70000,

                    customer: {
                     name: "Anita",
                     address: {     
                     }
                    }
                }
let deepcopyorder=structuredClone(order);
deepcopyorder.customer.address.city="Mumbai";
deepcopyorder.items[0].price=65000;
console.log("original order",order);        
console.log("deep copy order",deepcopyorder);               

    
