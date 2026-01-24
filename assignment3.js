// ================= MODULE 1: USER ENGINE =================

const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];

// Active users
const activeUsers = users.filter(u => u.active);

// Active user names
const activeNames = activeUsers.map(u => u.name);

// Any admin exists
const hasAdmin = users.some(u => u.role === "admin");

// Find user by id
const userById = users.find(u => u.id === 2);

// Deactivate user immutably
const updatedUsers = users.map(u => 
  u.id === 2 ? { ...u, active: false } : u
);

console.log(activeUsers, activeNames, hasAdmin, userById, updatedUsers);


// ================= MODULE 2: COURSE ENGINE =================

const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

// Published courses
const publishedCourses = courses.filter(c => c.published);

// Sort by price (high → low)
const sortedCourses = [...courses].sort((a, b) => b.price - a.price);

// Extract title & price
const courseInfo = courses.map(c => ({ title: c.title, price: c.price }));

// Total value of published courses
const totalValue = publishedCourses.reduce((sum, c) => sum + c.price, 0);

// Add new course immutably
const newCourses = [...courses, { id: 104, title: "Angular", price: 1399, published: true }];

console.log(publishedCourses, sortedCourses, courseInfo, totalValue, newCourses);


// ================= MODULE 3: CART ENGINE =================

const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

// Merge cart with courses
const cartDetails = cart.map(item => {
  const course = courses.find(c => c.id === item.courseId);
  return { ...item, ...course };
});

// Total cart amount
const cartTotal = cartDetails.reduce((sum, i) => sum + i.price * i.qty, 0);

// Increase quantity immutably
const updatedCart = cart.map(item =>
  item.courseId === 101 ? { ...item, qty: item.qty + 1 } : item
);

// Remove course from cart
const filteredCart = cart.filter(item => item.courseId !== 103);

// Check all paid courses
const allPaid = cartDetails.every(item => item.price > 0);

console.log(cartDetails, cartTotal, updatedCart, filteredCart, allPaid);


// ================= MODULE 4: ROLE ENGINE =================

const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};

// Role names
const roleNames = Object.keys(roles);

// Student can delete?
const studentCanDelete = roles.student.includes("delete");

// Unique permissions
const permissions = [...new Set(Object.values(roles).flat())];

// Add moderator role immutably
const newRoles = { ...roles, moderator: ["update", "view"] };

console.log(roleNames, studentCanDelete, permissions, newRoles);
