// const nums = [
//   [1, 2, 3],
//   [4, 5],
//   [6]
// ];


// // 21

// const result = nums.flat().reduce((a, number) => a + number, 0);


// const nums = [
//   [1, 4, 5],
//   [10, 11, 12],
//   [7]
// ];
// // ➜ [4, 10, 12]

// const result = nums.flat().filter(num => num % 2 === 0);

// const data = [
//   ["name", "Kristers"],
//   ["age", 27],
//   ["country", "Latvia"]
// ];
// // ➜ { name: "Kristers", age: 27, country: "Latvia" }

// const result = Object.fromEntries(data)


// const users = [
//   { name: "A", country: "LV" },
//   { name: "B", country: "EE" },
//   { name: "C", country: "LV" }
// ];
// // ➜ { LV: ["A", "C"], EE: ["B"] }

// const result = users.reduce((acc, obj) => {
//     acc[obj.country] = acc[obj.country] ?? []
//     acc[obj.country].push(obj.name)
//     return acc
// }, {})

// const products = [
//   { name: "Phone", price: 900 },
//   { name: "Cable", price: 20 },
//   { name: "Case", price: 25 }
// ];
// // ➜ 945

// const result = products.reduce((acc, prod) => {
//     return acc + prod.price
// }, 0)

// let result = 0

// for (let i = 0; i < products.length; i++ )
// {
//     result += products[i].price
// }

// const arr = [
//   { id: 101, name: "X" },
//   { id: 102, name: "Y" }
// ];
// // ➜ { 101: {…}, 102: {…} }

// const result = arr.reduce((acc, obj) => {
//     acc[obj.id] = obj;
//     return acc
// },{})

// const data = {
//   A: [1, 3, 5],
//   B: [2],
//   C: [10, 20]
// };
// // ➜ 41

// console.log(Object.values(data).flat())

// const result = Object.values(data)
//   .flat()
//   .reduce((sum, num) => sum + num, 0);

// const obj = {
//   nums1: [1, 2, 3, 3],
//   nums2: [2, 5, 5],
//   nums3: [10]
// };
// // ➜ [1,2,3,5,10]

// const flatten = Object.values(obj).flat() 
// let s = new Set(flatten);

// const result = [...s]


// const arr = [1, [2, [3, [4]]], 5];
// // ➜ [1,2,3,4,5]
// const result = arr.flat(Infinity)

// const nested = {
//   a: 1,
//   b: [2, { c: 3, d: [4, 5] }],
//   e: { f: 6 }
// };
// // ➜ [1,2,3,4,5,6]
// console.log(result)


// function countDown(count) {
//   if (count > 0) {
//     console.log(count);
//     countDown(count - 1);
//   }
// }
// countDown(3)

// console.log(countDown(3))

// Output:
// 3
// 2
// 1

// function sumTo(n) {
//   if (n === 1) return 1;
//   return n + sumTo(n - 1);
// }

// console.log(sumTo(5)) // ➜ 15   (1+2+3+4+5)

// function sayHi(n){
//    if(n === 0) return;
//    console.log("hi");
//    sayHi(n - 1)
// }

// sayHi(3) 


// function fact(n){
//    if(n === 0) return 1
//   return n * fact(n - 1)
// }

// console.log(fact(5)); // ➜ 120

// const nums = [
//   [1, 2],
//   [3, 4, 5],
//   [6]
// ];
// ➜ 21

// const result = nums.flat().reduce((sum, number) => sum + number ,0)

// console.log(result)

// ➜ [1, 3, 5]

// const result = nums.flat().filter((number) => number % 2 !== 0)

// console.log(result)

// const orders = [
//   { id: 1, items: [{ price: 10 }, { price: 5 }] },
//   { id: 2, items: [{ price: 7 }] }
// ];
// // ➜ [10, 5, 7]

// const result = orders
//   .flatMap(order => order.items).map((item) => item.price)

// console.log(result)

// const orders = [
//   { id: 1, items: [{ price: 10 }, { price: 5 }] },
//   { id: 2, items: [{ price: 7 }] }
// ];

// // ➜ 22

// const result = orders.flatMap((order) => order.items).reduce((sum, price) => sum + price.price, 0)

// console.log(result)

// const schedule = {
//   Mon: ["a", "b"],
//   Tue: ["c", "d", "e"],
//   Wed: ["f"]
// };
// // ➜ 6

// const result = Object.values(schedule).flat().length

// console.log(result)

// const arr = [1, [2, [3, [4, 5]]], 6];
// // ➜ [1,2,3,4,5,6]

// function flatten(arrs) {
//   let result = [];
//   for (const item of arrs) {
//     if (Array.isArray(item)) {
//       result = result.concat(flatten(item));
//     } else {
//       result.push(item);
//     }
//   }
//   return result;
// }

// // access function
// console.log(flatten(arr)); // [1, 2, 3, 4, 5, 6]


// const tree = {
//   title: "root",
//   children: [
//     { title: "A", children: [] },
//     {
//       title: "B",
//       children: [
//         { title: "B1", children: [] },
//         { title: "B2", children: [] }
//       ]
//     }
//   ]
// };

// function collectTitles(node) {
//   let result = [node.title];
//   for (const child of node.children) {
//     result = result.concat(collectTitles(child));
//   }
//   return result;
// }

// function countDown(n) {
//   if (n === 0) return;
//   console.log(n);
//   countDown(n - 1);
// }

// countDown(3)

// function countUp(n){
// if(n === 0) return
// countUp(n -1)
// console.log(n)
// }

// countUp(3)

// hi
// hi
// hi

// function sayHello(n){
// if(n === 0) return
// console.log("hi")
// sayHello(n -1)

// }

// sayHello(3)

// const a = [1, 2];
// const b = [3, 4];

// const result = a.concat(b)

// console.log(result)

// const arr = [
//   [1, 2],
//   [3],
//   [4, 5]
// ];
// // ➜ [1,2,3,4,5]

// const result = arr.reduce((acc, array) => acc.concat(array) ,[])

// console.log(result)

// const data = [
//   ["A", "B"],
//   ["C"],
//   ["D", "E"]
// ];
// // ➜ ["a","b","c","d","e"]

// const result = data.reduce((acc, arr) => acc.concat(arr)).map((e) => e.toLowerCase())

// console.log(result)

// const api = [
//   { users: ["A", "B"] },
//   { users: ["C"] },
//   { users: ["D", "E"] }
// ];
// // ➜ ["A","B","C","D","E"]

// const result = api.reduce((acc, { users }) => acc.concat(users), []);

// console.log(result)

// const logs = [
//   { actions: ["login", "upload"] },
//   { actions: ["logout"] },
//   { actions: ["login"] }
// ];
// // ➜ ["login","upload","logout","login"]

// // const result = logs.reduce((acc, {actions}) => acc.concat(actions), [])

// const result = logs.flatMap(log => log.actions)

// console.log(result)

// const input = ["  Alice ", "BOB", "  Cara"];
// // ➜ ["alice", "bob", "cara"]
// const result = input.map((inp) => inp.trim().toLowerCase())

// console.log(result)

// const nums = [1, 2, 3, 4, 5];
// // ➜ [4, 8]

// let result = []
// for (const num of nums){
//   if(num % 2 === 0)
//     result.push(num * 2)
// }

// console.log(result)

// const arr = [[1, 2], [3], [4, 5]];
// // ➜ [1,2,3,4,5]

// const flatt = arr.flat()

// console.log(flatt)

// const nums = [10, 20, 30];
// ➜ 60

// const sum = nums.reduce((sum, number) => sum + number)

// console.log(sum)

// let result = 0

// for (const number of nums){
//       result += number
// }

// console.log(result)

// let result = 0

// for(let i = 0; i < nums.length; i++){
//     result += nums[i]
// }

// console.log(result)
// let res = 0
// const result = nums.map((number) => {
//   res += number})

//   console.log(res)


// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" }
// ];
// // ➜ { 1: {...}, 2: {...} }

// // const result = users.reduce((acc, user) => {
// //   acc[user.id] = user
// //   return acc
// // },{})

// // console.log(result)

// const result = users.map(user => ({
//   [user.id]: user
// }))

// console.log(result)

// const tags = ["js", "ts", "js", "rn", "js"];
// ➜ { js: 3, ts: 1, rn: 1 }

// const result = tags.reduce((acc, tag) => {
//   acc[tag] = (acc[tag] ?? 0) + 1
//   return acc
// }, {})

// console.log(result)

// const tagsMap = new Map()

// for(const tag of tags){
//       tagsMap.set(tag, (tagsMap.get(tag) ?? 0) +1)
// }

// console.log(tagsMap)

// const scores = { Alice: 10, Bob: 15 };
// // ➜ [{ name: "Alice", score: 10 }, ...]

// // const result = scores.reduce((acc, score) => {

// // },{})


// const result = Object.entries(scores).map(person => ({
//   name: person[0],
//   score: person[1]
// }))

// console.log(result)

// const users = [
//   { name: "Alice", role: "admin" },
//   { name: "Bob", role: "user" },
//   { name: "Cara", role: "admin" }
// ];
// // ➜ { admin: [...], user: [...] }

// const result = users.reduce((acc, user) => {
//     acc[user.role] = acc[user.role] ?? []
//     acc[user.role].push(user.name)
//     return acc
// },{})

// console.log(result)

// const orders = [
//   { items: [{ price: 10 }, { price: 5 }] },
//   { items: [{ price: 20 }] }
// ];
// ➜ 35

// const result = orders.flatMap((item) => Object.values(item).flat())
// let sum = 0
// for(const price of result){
//     sum += price.price
// }
// console.log(sum)

// const result = orders.reduce((sum, order) => {
//   return sum + order.items.reduce((itemSum, item) => itemSum + item.price, 0);
// }, 0);

// console.log(result)


// const nums = [1, 2, 2, 3, 1];
// // ➜ [1,2,3]

// let maps = new Map()

// for(const num of nums){
//     if(!maps.has(num)){
//         maps.set(num, true)
//     }
// }

// console.log(Array.from(maps.keys()))

// const words = ["a", "b", "a", "c", "b"];
// // ➜ Map { "a" → 2, "b" → 2, "c" → 1 }

// // const occurances = new Map()

// // for(const word of words){
// //     occurances.set(word, (occurances.get(word) ?? 0) +1)
// // }

// // console.log(occurances)

// const result = words.reduce((acc, word) => {
//     acc[word] = (acc[word] ?? 0) +1
//     return acc
// }, {})

// console.log(result)

// const a = [1, 2, 3];
// const b = [2, 3, 4];
// // ➜ [2,3]

// // const result = a.filter((item) => b.includes(item))

// // console.log(result)

// let unique = new Set(a)
// // let result = []

// // for (const item of unique) {
// //   if (b.includes(item)) {
// //     result.push(item);
// //   }
// // }

// const result = b.filter(num => unique.has(num))

// console.log(result)

// const events = [
//   { id: 1 }, { id: 2 }, { id: 1 }
// ];
// // ➜ [1,2]

// const uniq = new Map()

// let result = []
// for(const event of events){
//     if(!uniq.has(event.id)){
//         uniq.set(event.id, true)
//         result.push(event.id)
//     }   
// }

// console.log(result)

// const matrix = [
//   [1, 2],
//   [3, 4, 5],
//   [],
//   [6]
// ];

// // ➜ [1, 2, 3, 4, 5, 6]


// const result = matrix.reduce((acc, number) => {
//    return acc.concat(number)
// },[]
// )

// console.log(result)

// const matrix = [
//   [1, 2],
//   [3, 4, 5],
//   [3, 4, 7],
//   [],
//   [6]
// ];

// // ➜ { "0": [[]], "2": [[1,2]], "3": [[3,4,5]] }

// const rowLenght = matrix.reduce((acc, arr) => {
//     if(!acc[arr.length]){
//         acc[arr.length] = []
//     }
//     acc[arr.length].push(arr)
//     return acc
// }, {})

// console.log(rowLenght)

// const users = [
//   { id: 1, name: "Alice", roles: ["admin"] },
//   { id: 2, name: "Bob", roles: ["user", "editor"] }
// ];

// // ➜ Map<number, {name, roles}>

// const usermap = new Map()

// for(const user of users){
//     usermap.set(user.id, {name: user.name, role: user.roles})
// }

// console.log(usermap)

// const users = [
//   { id: 1, name: "Alice", roles: ["admin"] },
//   { id: 2, name: "Bob", roles: ["user", "editor"] }
// ];

// // ➜ [
// //   { userId: 1, role: "admin" },
// //   { userId: 2, role: "user" },
// //   { userId: 2, role: "editor" }
// // ]


// const result = users.flatMap((user) =>
//   user.roles.map((role) => {
//     console.log(role);

//     return {
//       userId: user.id,
//       role: role
//     };
//   })
// );

// console.log(result)

// const data = {
//   a: [1, 2],
//   b: [3],
//   c: [4, 5, 6]
// };

// // ➜ 21

// // const result = Object.values(data).flat().reduce((acc, num) => acc + num)
// const result = Object.values(data).reduce((acc, nums) => {
//         return acc + nums.reduce((numberSum, number) => numberSum + number, 0)
// }, 0)

// console.log(result)

// const arr = [
//   { id: 1, title: "Post A", body: "text...", author: "John" },
//   { id: 2, title: "Post B", body: "text...", author: "Jane" }
// ]

// // [
// //   { id: 1, title: "Post A", author: "John" },
// //   { id: 2, title: "Post B", author: "Jane" }
// // ]

// const result = arr.map((e) => ({
//     id: e.id,
//     title: e.title,
//     author: e.author
// }))

// console.log(result)

// const arr = [
//   { name: "John", active: true },
//   { name: "Jane", active: false },
//   { name: "Mark", active: true }
// ]

// // [
// //   { name: "John", active: true },
// //   { name: "Mark", active: true }
// // ]

// const result = arr.filter((user) => user.active)

// console.log(result)

// const arr = ["  React ", " NODE", "js  "]

// const newarr = []
//     for(const e of arr) {
//         newarr.push(e.trim().toLowerCase())
//     }

//     console.log(newarr)

// const arr = [
//   { id: 1, private: false },
//   { id: 2, private: true },
//   { id: 3, private: false }
// ]

// // [
// //   { id: 1, private: false },
// //   { id: 3, private: false }
// // ]

// const result = arr.filter((user) => !user.private)

// console.log(result)

// const arr = [
//   { id: 1, name: "John", password: "123" },
//   { id: 2, name: "Jane", password: "456" }
// ]

// const result = arr.map((user) => ({id: user.id, name: user.name}))

// console.log(result)

// Task
// Transform users so:
// admins keep all fields
// non-admins lose email
// add label = "ADMIN" or "USER"
// Input
// const task = [
//   { id: 1, name: "John", email: "a@a.com", role: "user" },
//   { id: 2, name: "Jane", email: "b@b.com", role: "admin" }
// ]
// // Expected Output
// // [
// //   { id: 1, name: "John", role: "user", label: "USER" },
// //   { id: 2, name: "Jane", email: "b@b.com", role: "admin", label: "ADMIN" }
// // ]


// const users = []

// for (const user of task) {
//   if (user.role === "admin") {
//     users.push({
//       id: user.id,
//       name: user.name,
//       email: user.email,
//       role: user.role,
//       label: "ADMIN"
//     })
//   } else {
//     users.push({
//       id: user.id,
//       name: user.name,
//       role: user.role,
//       label: "USER"
//     })
//   }
// }
// console.log(result)

// •	remove out-of-stock items
// •	show { id, displayName }
// •	displayName = "Name ($price)"

// const itemsShop = [
//   { id: 1, name: "Book", price: 10, inStock: true },
//   { id: 2, name: "Pen", price: 2, inStock: false },
//   { id: 3, name: "Notebook", price: 5, inStock: true }
// ]

// [
//   { id: 1, displayName: "Book ($10)" },
//   { id: 3, displayName: "Notebook ($5)" }
// ]

// const itemsInStock = itemsShop.filter((user) => user.inStock)
// const displayItems = itemsInStock.map((item) =>  {return {
//   id: item.id,
//   displayName: `${item.name} ($${item.price})`
// }}
// )
// console.log(displayItems)

// const person = [
//   { name: "Tom", age: 16 },
//   { name: "Anna", age: 22 }
// ]
// // [
//   // { name: "Anna", isAdult: true }
// // ]

// const filtered = person.filter((p) => p.age >= 18).map((pers) => ({name: pers.name, isAdult:true}))

// console.log(filtered)

// Return false if:
	// •	any item is missing id
	// •	OR id is not a number

// const ids = [
//   { id: 1 },
//   { id: "2" },
//   { id: 3 }
// ]

// let isValid = false

// for(const {id} of ids){
//  if(id === undefined || !Number.isInteger(id)){
//    isValid =false
//    break
//  }
// }


// console.log(isValid)

	// •	keep original fields
	// •	add disabled: true if locked === true

// const checkboxes = [
//   { id: 1, checked: false, locked: false },
//   { id: 2, checked: true, locked: true }
// ]

// // [
//   // { id: 1, checked: false, locked: false, disabled: false },
//   // { id: 2, checked: true, locked: true, disabled: true }
// // ]

// const result = checkboxes.map(item => ({
//   ...item,
//   disabled: item.locked
// }));

// console.log(result)

	// •	if empty → remove item entirely
	// •	capitalize valid names

// const arr = ["  john  ", " ", "anna"]

// // ["John", "Anna"]

// const result = arr.map((item) => item.trim()).filter((i) => i !== "").map((name) => {
//   return  name ? name[0].toUpperCase() + name.slice(1) : name
// })
// console.log(result)

// const users = [
//   { id: 1, name: "Anna", active: true },
//   { id: 2, name: "John", active: false },
//   { id: 3, name: "Maria", active: true }
// ]

// const activeUsers = users.filter((u) => u.active).map((user) => {
// 		return user.name
// })

// console.log(activeUsers)

// const products = [
//   { name: "Book", price: 10 },
//   { name: "Pen", price: 2 },
//   { name: "Notebook", price: 5 }
// ]

// // [
// //   { name: "Book", price: 12 },
// //   { name: "Pen", price: 2.4 },
// //   { name: "Notebook", price: 6 }
// // ]

// 	let result = []
// 	for (const product of products){
// 	result.push({name: product.name, price: (product.price * 0.2) + product.price})
// 	}

// 	console.log(result)

// const emails = [
//   "test@gmail.com",
//   "invalid-email",
//   "hello@company.io",
//   "no-at-symbol.com"
// ]
// // TaskReturn only strings that contain @.
// // Output

// // ["test@gmail.com", "hello@company.io"]


// const res = emails.filter((email) => email.includes("@"))

// console.log(res)

// const orders = [
//   { id: 1, total: 15 },
//   { id: 2, total: 120 },
//   { id: 3, total: 60 }
// ]
// // Task
// // Return order IDs where total is greater than 50.
// // Output

// // [2, 3]

// let result = []

// for(const {total, id} of orders){
// 	if(total > 50){
// 		result.push(id)
// 	}
// }

// console.log(result.sort((a,b) => a-b))

// const names = ["  john", "ANNA ", " mAria "]
// // Task
// // Trim spaces and convert names to capitalized format(John, Anna, Maria).
// // Output

// // ["John", "Anna", "Maria"]

// const result = names.map((name) => {
// 	return name.trim().toLowerCase()
// })

// let r = []

// for(const res of result){
// 	r.push(res[0].toUpperCase() + res.slice(1))
// }

// console.log(r)

const inventory = [
  { item: "Laptop", stock: 3 },
  { item: "Mouse", stock: 0 },
  { item: "Keyboard", stock: 5 }
]
// TaskReturn items that are in stock (stock > 0).
// Output

// [
//   { item: "Laptop", stock: 3 },
//   { item: "Keyboard", stock: 5 }
// ]

// const result = inventory.filter((i) => i.stock)

// const apiUsers = [
//   { id: 1, email: "a@test.com", password: "123" },
//   { id: 2, email: "b@test.com", password: "456" }
// ]
// // TaskRemove the password field from each object.
// // Output

// // [
// //   { id: 1, email: "a@test.com" },
// //   { id: 2, email: "b@test.com" }
// // ]

// const result = apiUsers.map((user) => ({
// 	id: user.id, email: user.email
// }))

// console.log(result)

// const numbers = ["37129123456", "37120111222"]
// // TaskFormat numbers as +371 29 123 456.
// // Output

// // ["+371 29 123 456", "+371 20 111 222"]

// let res = []
// for (const number of numbers) {
//   const formatted =
//     "+" +
//     number.slice(0, 3) + " " +
//     number.slice(3, 5) + " " +
//     number.slice(5, 8) + " " +
//     number.slice(8)

//   res.push(formatted)
// }

// console.log(res)

// const todos = [
//   { title: "Code", done: true },
//   { title: "Gym", done: false },
//   { title: "Read", done: true }
// ]
// // Task
// // Return number of completed tasks.
// // Output

// // 2

// const result = todos.filter((todo) => todo.done).length

// console.log(result)

const flags = {
  darkMode: true,
  betaUser: false,
  newCheckout: true
}
// Task Return array of enabled feature names.
// Output

// ["darkMode", "newCheckout"]
const result = Object.entries(flags).filter(([_, value]) => 
		value
).map(([key, _]) => key)

console.log(result)