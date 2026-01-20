const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

console.log("Task1");
let inStockItems = cart.filter(item => item.inStock);
console.log(inStockItems);

console.log("Task2");
let cartSummary = cart.map(item => ({
  name: item.name,
  totalPrice: item.price * item.quantity
}));
console.log(cartSummary);

console.log("Task3");
let cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
console.log(cartTotal);

console.log("Task4");
let mouseDetails = cart.find(item => item.name === "Mouse");
console.log(mouseDetails);

console.log("Task5");
let keyboardIndex = cart.findIndex(item => item.name === "Keyboard");
console.log(keyboardIndex);


const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

console.log("Task1");
let passedStudents = students.filter(s => s.marks >= 40);
console.log(passedStudents);

console.log("Task2");
let gradedStudents = students.map(s => ({
  ...s,
  grade: s.marks >= 90 ? "A" : s.marks >= 75 ? "B" : s.marks >= 60 ? "C" : "D"
}));
console.log(gradedStudents);

console.log("Task3");
let averageMarks = students.reduce((sum, s) => sum + s.marks, 0) / students.length;
console.log(averageMarks);

console.log("Task4");
let student92 = students.find(s => s.marks === 92);
console.log(student92);

console.log("Task5");
let kiranIndex = students.findIndex(s => s.name === "Kiran");
console.log(kiranIndex);


const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

console.log("Task1");
let itEmployees = employees.filter(e => e.department === "IT");
console.log(itEmployees);

console.log("Task2");
let payroll = employees.map(e => ({
  ...e,
  netSalary: e.salary + e.salary * 0.1
}));
console.log(payroll);

console.log("Task3");
let totalPayout = employees.reduce((sum, e) => sum + e.salary, 0);
console.log(totalPayout);

console.log("Task4");
let salary30000 = employees.find(e => e.salary === 30000);
console.log(salary30000);

console.log("Task5");
let nehaIndex = employees.findIndex(e => e.name === "Neha");
console.log(nehaIndex);


const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

console.log("Task1");
let sciFiMovies = movies.filter(m => m.genre === "Sci-Fi");
console.log(sciFiMovies);

console.log("Task2");
let movieLabels = movies.map(m => `${m.title} (${m.rating})`);
console.log(movieLabels);

console.log("Task3");
let avgRating = movies.reduce((sum, m) => sum + m.rating, 0) / movies.length;
console.log(avgRating);

console.log("Task4");
let jokerMovie = movies.find(m => m.title === "Joker");
console.log(jokerMovie);

console.log("Task5");
let avengersIndex = movies.findIndex(m => m.title === "Avengers");
console.log(avengersIndex);


const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

console.log("Task1");
let creditTx = transactions.filter(t => t.type === "credit");
console.log(creditTx);

console.log("Task2");
let amounts = transactions.map(t => t.amount);
console.log(amounts);

console.log("Task3");
let balance = transactions.reduce(
  (bal, t) => t.type === "credit" ? bal + t.amount : bal - t.amount,
  0
);
console.log(balance);

console.log("Task4");
let firstDebit = transactions.find(t => t.type === "debit");
console.log(firstDebit);

console.log("Task5")
