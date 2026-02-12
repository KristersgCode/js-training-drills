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

// const inventory = [
//   { item: "Laptop", stock: 3 },
//   { item: "Mouse", stock: 0 },
//   { item: "Keyboard", stock: 5 }
// ]
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

// const flags = {
//   darkMode: true,
//   betaUser: false,
//   newCheckout: true
// }
// // Task Return array of enabled feature names.
// // Output

// // ["darkMode", "newCheckout"]
// const result = Object.entries(flags).filter(([_, value]) =>
// 		value
// ).map(([key, _]) => key)

// console.log(result)

// const items = ["apple", "banana", "orange", "banana"]
// const remove = "banana"

// const index = items.indexOf(remove)

// if(index !== -1){
// 	items.splice(index,1)
// }
// const items = ["home", "about", "contact"]
// const insertAfter = "about"
// const value = "blog"

// const index = items.indexOf(insertAfter)

// if(index !== -1){
// 	items.splice(index +1,0, value)
// }

// console.log(items)

// const items = ["low", "medium", "high"]
// const index = 1
// const newValue = "normal"

// // ["low", "normal", "high"]

// const result = items.splice(index,1, newValue)

// console.log(items)

// Remove Last N Items
// Input

// const items = [1, 2, 3, 4, 5]
// const n = 2

// // [1, 2, 3]

// const mutate = items.splice(items.length -n)

// console.log(items)

// items = ["a", "b", "c", "d"]
// fromIndex = 1
// toIndex = 3
// Output

// ["a", "c", "d", "b"]

//  Move Item From One Index to Another

// const items = ["a", "b", "c", "d"]
// const fromIndex = 1
// const toIndex = 3

// const [removed] = items.splice(fromIndex, 1)

// const targetIndex = fromIndex < toIndex ? toIndex - 1 : toIndex

// items.splice(targetIndex, 0, removed)

// console.log(items)

// ["a", "c", "d", "b"]

// const nums = [1, 2, 2, 3, 4, 4, 5]

// // [1, 2, 3, 4, 5]

// const result = new Set(nums)

// console.log(Array.from(result))

// const users = [
//   { id: 1, name: "Anna" },
//   { id: 2, name: "Bob" },
//   { id: 1, name: "Anna" }
// ]

// // expected result:
// // [
// //   { id: 1, name: "Anna" },
// //   { id: 2, name: "Bob" }
// // ]

// let result = new Map()

// for (const user of users){
// 	if(!result.has(user.id)){
// 		result.set(user.id,user)
// 	}

// }

// console.log([...result.values()])

// Return only the names of products with price ≥ 100.

// const products = [
//   { name: "Book", price: 10 },
//   { name: "Laptop", price: 900 },
//   { name: "Pen", price: 2 }
// ]

// const prods = products.filter((prod) => prod.price >= 100)

// const result = prods.map((prod) => prod.name)

// console.log(result)

// expected result:
// ["Laptop"]

// Return true if any duplicate value exists, otherwise false.

// const emails = ["a@mail.com", "b@mail.com", "a@mail.com"]

// const dict = new Map()

// let found = false

// for(const element of emails){
// 	if(!dict.has(element)){
// 		dict.set(element,true)
// 	}
// 	else {
// 		found = true
// 		break
// 	}
// }

// console.log(found)

// expected result:
// true

// Flatten a nested array and multiply each number by 2.

// const matrix = [[1, 2], [3, 4], [5]]

// const list = matrix.flat()

// let result = []

// for(let value of list){
// 		result.push(value * 2)
// }

// console.log(result)

// expected result:
// [2, 4, 6, 8, 10]

// Convert an object into an array of { name, score } objects.

// const scores = {
//   Anna: 90,
//   Bob: 70,
//   Cara: 85
// }

// const result = Object.entries(scores).map(([key,value]) => ({
// 	name: key, score: value
// }))

// console.log(result)
// expected result:
// [
//   { name: "Anna", score: 90 },
//   { name: "Bob", score: 70 },
//   { name: "Cara", score: 85 }
// ]

// Group true and false values into separate arrays.

// const flags = [true, false, true, false, true]

// let trues = []
// let falses = []

// for(const flag of flags){

// 	if(flag){
// 		trues.push(flag)
// 	}
// 	else {
// 		falses.push(flag)
// 	}
// }

// const result = {true: trues, false: falses}

// console.log(result)

// expected result:
// {
//   true: [true, true, true],
//   false: [false, false]
// }

// const tasks = [
//   { done: true },
//   { done: true },
//   { done: false }
// ]

// // expected result:
// // false

// const result = tasks.every(task => task.done)

// console.log(result)

// Transform an array of { key, value } into an object.

// const items = [
//   { key: "a", value: 1 },
//   { key: "b", value: 2 }
// ]

// const result = Object.fromEntries(
//   items.map(item => [item.key, item.value])
// )

// // expected result:
// // { a: 1, b: 2 }
// console.log(result)

// Return a new object containing only entries with value ≥ 80.

// const scores = {
//   Anna: 90,
//   Bob: 70,
//   Cara: 85
// }

// // expected result:
// // {
// //   Anna: 90,
// //   Cara: 85
// // }

// const result = Object.fromEntries(Object.entries(scores).filter(([_,value]) => value >= 80))

// console.log(result)

// Create a new object where keys and values are swapped.

// const roles = {
//   admin: "A",
//   user: "U",
//   guest: "G"
// }

// // const result = Object.fromEntries(
// // 		Object.entries(roles).map(([key, value]) => ({
// // 			value
// // 		})))

// const result = Object.fromEntries(
// 		Object.entries(roles).map(([key, value]) => [value, key]))

// console.log(result)

// expected result:
// {
//   A: "admin",
//   U: "user",
//   G: "guest"
// }

// Return a new object where all values are doubled.

// const prices = {
//   apple: 2,
//   banana: 1,
//   orange: 3
// }

// const result = Object.fromEntries(Object.entries(prices).map(([key,value]) => [key, value * 2]))

// console.log(result)

// expected result:
// {
//   apple: 4,
//   banana: 2,
//   orange: 6
// }

// Convert object into an array of { name, score }, sorted descending by score.

// const scores = {
//   Anna: 90,
//   Bob: 70,
//   Cara: 85
// }

// const result = Object.entries(scores).map(([key,value]) => ({name: key, score: value})).sort((a, b) => b.score-a.score)

// console.log(result)

// // expected result:
// // [
// //   { name: "Anna", score: 90 },
// //   { name: "Cara", score: 85 },
// //   { name: "Bob", score: 70 }
// // ]

// Return how many true and false values exist in the object.

// const flags = {
//   a: true,
//   b: false,
//   c: true,
//   d: true
// }

// const values = Object.values(flags)

// const output = {
//   true: values.filter(Boolean).length,
//   false: values.filter(v => !v).length
// }

// console.log(output)

// Return a new object without keys listed in blocked.

// const data = {
//   id: 1,
//   password: "secret",
//   email: "a@mail.com"
// }

// const blocked = ["password"]

// const arr = Object.entries(data)

// const filtered = Object.fromEntries(arr.filter(([key]) => !blocked.includes(key)))

// console.log(filtered)

// expected result:
// {
//   id: 1,
//   email: "a@mail.com"
// }

// Convert object into a lookup where values become keys and value is true.

// const permissions = {
//   read: true,
//   write: true,
//   execute: false
// }

// const entries = Object.entries(permissions)

// let trues = []
// let falses = []

// for(const [key, value] of entries){
// 		if(value){
// 			trues.push(key)
// 		}
// 		else {
// 			falses.push(key)
// 		}
// }
// console.log({true: trues, false:falses})
// expected result:
// {
//   true: ["read", "write"],
//   false: ["execute"]
// }

// Return true if any value in the object is greater than 100.

// const inventory = {
//   apples: 30,
//   bananas: 120,
//   oranges: 50
// }

// const entries = Object.values(inventory)

// const checkIfTrue = entries.some((e => e > 100))

// console.log(checkIfTrue)

// Prefix all keys with "user_".

// const user = {
//   id: 1,
//   name: "Anna"
// }

// const entries = Object.fromEntries(Object.entries(user).map(([key,value]) => ["user_" + key,value]))

// Return entries that exist in objA but not in objB.

// const objA = {
//   a: 1,
//   b: 2,
//   c: 3
// }

// const objB = {
//   b: 2
// }

// const keyB = Object.keys(objB)

// const entries = Object.fromEntries(Object.entries(objA).filter(([key, value]) => !keyB.includes(key)))
// console.log(entries)

// expected result:
// {
//   a: 1,
//   c: 3
// }

// const tasks = [
//   { id: 1, status: "open" },
//   { id: 2, status: "done" },
//   { id: 3, status: "open" },
// ]

// {
//   open: [1, 3],
//   done: [2]
// }

// function groupTaskIdsByStatus(tasks) {
//   const result = {}

// for(const task of tasks){
// 	if (!result[task.status]) {
//       	result[task.status] = []
//     }
// 	result[task.status].push(task.id)
// }

// return result
// }

// console.log(groupTaskIdsByStatus(tasks))

// const base = [
//   { id: 1, name: "Anna" },
//   { id: 2, name: "Mark" }
// ]

// const extra = [
//   { id: 1, age: 28 },
//   { id: 2, age: 34 }
// ]

// function mergeExtra(base, extra){
// 	const lookup = new Map()
// 	let result = []

// 	for(const item of extra){
// 		if(!lookup.has(item.id)){
// 			lookup.set(item.id, item.age)
// 		}
// 	}

// 	for(const item of base){
// 			let data = lookup.get(item.id)
// 			result.push({...item, age: data})
// 	}
// 	return result
// }

// console.log(mergeExtra(base,extra))

// [
//   { id: 1, name: "Anna", age: 28 },
//   { id: 2, name: "Mark", age: 34 }
// ]

// const bookings = [
//   { date: "2024-01-01", room: "A" },
//   { date: "2024-01-01", room: "A" },
//   { date: "2024-01-01", room: "B" }
// ]

// [
//   { date: "2024-01-01", room: "A" },
//   { date: "2024-01-01", room: "B" }
// ]

//create a map
// if room dosnt exist add to the set

// function deduplicate(items){

// 	let lookup = new Map()

// 	for(const item of items){
// 		const key = (item.date + "|" + item.room)
// 		if(!lookup.has(key)){
// 			lookup.set(key, item)
// 		}
// 	}
// 	return [...lookup.values()]
// }

// console.log(deduplicate(bookings))

// const users = [
//   { id: "u1", name: "Anna" },
//   { id: "u2", name: "Mark" }
// ]

// const comments = [
//   { userId: "u1", text: "Hi" },
//   { userId: "u3", text: "Hello" }
// ]
// Expected

// [
//   { user: "Anna", text: "Hi" },
//   { user: "Unknown", text: "Hello" }
// ]

// function userBase(users, comments){
// 	let lookup = new Map()
// 	let result = []

// 	for(const user of users){
// 		if(!lookup.has(user.id)){
// 			lookup.set(user.id, user)
// 		}
// 	}

// 	for(const comment of comments){
// 		let data = lookup.get(comment.userId)
// 		if(data){
// 			result.push({user: data.name, text: comment.text})
// 		}
// 		else {
// 			result.push({user: "Unknown", text: comment.text})
// 		}
// 	}

// 	return  result
// }

// console.log(userBase(users,comments))

// const ranges = [
//   { from: 1, to: 3 },
//   { from: 9, to: 13 }
// ]

// // [1, 2, 3, 5, 6]

// let arr = []

// for(const range of ranges){
// 	for (let i = range.from; i <= range.to; i++) {
// 		arr.push(i)
// }
// }
// console.log(arr)

// const events = [
//   { name: "A", priority: 2, time: 3 },
//   { name: "B", priority: 1, time: 2 },
//   { name: "C", priority: 2, time: 1 }
// ]

// // Rules
// // 	•	sort by priority ascending
// // 	•	if same priority → sort by time ascending
// // Expected

// // [
// //   { name: "B", priority: 1, time: 2 },
// //   { name: "C", priority: 2, time: 1 },
// //   { name: "A", priority: 2, time: 3 }
// // ]

// console.log(events.sort((a, b) =>
//   a.priority - b.priority || a.time - b.time
// ))

// const roles = [
//   { role: "admin", permissions: ["read", "write"] },
//   { role: "user", permissions: ["read"] }
// ]

// {
//   admin: { read: true, write: true },
//   user: { read: true }
// }

// function buildPermissionMap(roles) {
//   const result = {}

//   for (const role of roles) {
//     const perms = {}

//     for (const perm of role.permissions) {
//       perms[perm] = true
//     }

//     result[role.role] = perms
//   }

//   return result
// }

// console.log(buildPermissionMap(roles))

// ======================================================
// GOAL: Unique active users, sorted by last login
// Return array of unique names of active users,
// sorted by lastLogin descending.
// EXPECTED RESULT: ["Ann", "Cara"]

// const users = [
//   { id: 1, name: "Ann", active: true, lastLogin: 5 },
//   { id: 2, name: "Bob", active: false, lastLogin: 2 },
//   { id: 3, name: "Ann", active: true, lastLogin: 10 },
//   { id: 4, name: "Cara", active: true, lastLogin: 1 }
// ]

// const result = [
//   ...new Map(
//     [...users]
//       .filter(u => u.active)
//       .sort((a, b) => b.lastLogin - a.lastLogin)
//       .map(u => [u.name, u])   // key = name, value = user
//   ).keys()
// ]

// console.log(result)

// ======================================================
// GOAL: Flatten only expensive items
// Return flat array of item names where price ≥ 15
// EXPECTED RESULT: ["B", "C"]

// const orders = [
//   { id: 1, items: [{ name: "A", price: 5 }, { name: "B", price: 20 }] },
//   { id: 2, items: [{ name: "C", price: 15 }] },
//   { id: 3, items: [{ name: "D", price: 3 }] }
// ]

// const result = orders.flatMap((order) => order.items).filter((o) => o.price >= 15).map((name) => name.name)

// console.log(result)

// ======================================================
// GOAL: Build lookup table
// EXPECTED RESULT: {
// a1: "fruit",
// b2: "veg",
// c3: "fruit"
// }

// const products = [
//   { sku: "a1", category: "fruit" },
//   { sku: "b2", category: "veg" },
//   { sku: "c3", category: "fruit" }
// ]

// const entries = products.map((entry) => {
//   return [entry.sku, entry.category]
// })

// console.log(Object.fromEntries(entries))

// ======================================================
// GOAL: Return names of users who have 2 or more roles
// EXPECTED RESULT: ["Ann", "Cara"]

// const users = [
//   { name: "Ann", roles: ["admin", "editor"] },
//   { name: "Bob", roles: ["viewer"] },
//   { name: "Cara", roles: ["editor", "viewer"] }
// ]

// const result = users.filter((user) => user.roles.length >= 2).map((u) => u.name)

// console.log(result)
// ======================================================

// GOAL: Sort by priority ascending.If same → by name alphabetically.
// EXPECTED RESULT: [
// { name: "Add feature", priority: 1 },
// { name: "Clean code", priority: 2 },
// { name: "Fix bug", priority: 2 }
// ]

// const tasks = [
//   { name: "Fix bug", priority: 2 },
//   { name: "Add feature", priority: 1 },
//   { name: "Clean code", priority: 2 },
// ];

// const sorted = tasks.sort(
//   (a, b) => a.priority - b.priority || a.name.localeCompare(b.name),
// );

// console.log(sorted);

// ======================================================
// GOAL: Unique tags across posts
// EXPECTED SHAPE: ["js", "react", "node"]

// const posts = [
//   { title: "A", tags: ["js", "react"] },
//   { title: "B", tags: ["js", "node"] },
//   { title: "C", tags: ["react"] },
// ];

// const uniqueMap = new Map();

// for (const post of posts) {
//   for (const tag of post.tags) {
//     if (!uniqueMap.has(tag)) {
//       uniqueMap.set(tag, true);
//     }
//   }
// }

// console.log([...uniqueMap.keys()]);

// ======================================================
// GOAL: Group users by role
// EXPECTED SHAPE:
// {
//   admin: [...],
//   editor: [...],
//   viewer: [...]
// }

//  const users = [
//   { id: 1, name: "A", role: "admin" },
//   { id: 2, name: "B", role: "editor" },
//   { id: 3, name: "C", role: "admin" },
//   { id: 4, name: "D", role: "viewer" },
// ]

// let userMap = new Map()

// for(const user of users){
//     if(!userMap.has(user.role)){
//      userMap.set(user.role, [])
//     }
//     userMap.get(user.role).push(user)
// }

// const grouped = Object.fromEntries(userMap)
// console.log(grouped)

// ======================================================
// GOAL: Unique tags (preserve order)
// EXPECTED SHAPE: ["js", "ts", "react", "node"]

// const posts = [
//   { id: 1, tags: ["js", "ts"] },
//   { id: 2, tags: ["ts", "react"] },
//   { id: 3, tags: ["js", "node"] },
// ]

// const seen = new Set()

// for (const post of posts) {
//   for (const tag of post.tags) {
//     if (!seen.has(tag)) {
//       seen.add(tag)
//     }
//   }
// }

// console.log([...seen])

// ======================================================
// GOAL: Expand orders into flat line items
// EXPECTED SHAPE: [
//   { orderId: 1, product: "A", qty: 2 },
//   { orderId: 2, product: "B", qty: 1 },
//   { orderId: 2, product: "C", qty: 3 },
// ]

// const orders = [
//   { orderId: 1, items: [{ product: "A", qty: 2 }] },
//   {
//     orderId: 2,
//     items: [
//       { product: "B", qty: 1 },
//       { product: "C", qty: 3 },
//     ],
//   },
// ];

// const result = [];

// for (const order of orders) {
//   for (const item of order.items) {
//     result.push({
//       orderId: order.orderId,
//       product: item.product,
//       qty: item.qty,
//     });
//   }
// }

// console.log(result);

// ======================================================
// GOAL: Group emails by domain
// EXPECTED SHAPE:
// {
//   gmail.com: ["john", "mike"],
//   yahoo.com: ["kate", "bob"],
//   outlook.com: ["anna"]
// }

// const emails = [
//   "john@gmail.com",
//   "kate@yahoo.com",
//   "mike@gmail.com",
//   "anna@outlook.com",
//   "bob@yahoo.com",
// ];

// const resultMap = new Map();

// for (const email of emails) {
//   const [name, domain] = email.split("@");

//   if (!resultMap.has(domain)) {
//     resultMap.set(domain, []);
//   }

//   resultMap.get(domain).push(name);
// }

// console.log(Object.fromEntries(resultMap));

// ======================================================
// GOAL: Keep last occurrence by id
// EXPECTED SHAPE:

// [
// { id: 1, name: "Johnny" },
// { id: 2, name: "Kate" },
// { id: 3, name: "Mike" },
// ]

// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Kate" },
//   { id: 1, name: "Johnny" },
//   { id: 3, name: "Mike" },
// ];

// const occurances = new Map();

// for (const user of users) {
//   occurances.set(user.id, user);
// }

// console.log(Array.from(occurances.values()));

// ======================================================
// GOAL: Index words by first letter
// EXPECTED SHAPE:
// {
// a: ["apple", "avocado", "apricot"],
// b: ["banana", "blueberry"],
// }

// const words = ["apple", "banana", "avocado", "blueberry", "apricot"];

// const dict = new Map();

// for (const word of words) {
//   if (!dict.has(word[0])) {
//     dict.set(word[0], []);
//   }

//   dict.get(word[0]).push(word);
// }

// console.log(Object.fromEntries(dict));

// ======================================================
// GOAL: Group Active Users By Role
// EXPECTED SHAPE:
// {
//   admin: [
//     { id: 1, name: "Alice" },
//     { id: 3, name: "Kate" }
//   ],
//   editor: [
//     { id: 4, name: "John" }
//   ],
//   viewer: [
//     { id: 5, name: "Mike" }
//   ]
// }

// const users = [
//   { id: 1, name: "Alice", role: "admin", active: true },
//   { id: 2, name: "Bob", role: "editor", active: false },
//   { id: 3, name: "Kate", role: "admin", active: true },
//   { id: 4, name: "John", role: "editor", active: true },
//   { id: 5, name: "Mike", role: "viewer", active: true },
// ];

// const result = new Map();

// for (const user of users) {
//   if (!user.active) {
//     continue;
//   }

//   if (!result.has(user.role)) {
//     result.set(user.role, []);
//   }

//   result.get(user.role).push({ id: user.id, name: user.name });
// }

// console.log(Object.fromEntries(result));

// ======================================================
// GOAL: Unique Expensive Buyers
// EXPECTED SHAPE: Return an array of unique userIds
// who have at least one order with total > 100.
// [2,1] order does not matter

// const orders = [
//   { userId: 1, total: 40 },
//   { userId: 2, total: 200 },
//   { userId: 1, total: 150 },
//   { userId: 3, total: 80 },
//   { userId: 2, total: 300 },
// ];

// const result = new Set();

// for (const order of orders) {
//   if (order.total < 100) continue;
//   result.add(order.userId);
// }

// console.log([...result]);

// ======================================================
// GOAL: Join Two Arrays
// Expected shape:
// [
//   { id: 1, name: "Alice", orders: [40, 150] },
//   { id: 2, name: "Bob", orders: [200] },
//   { id: 3, name: "Kate", orders: [80] }
// ]

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Kate" },
  { id: 4, name: "Bruno" },
];

const orders = [
  { userId: 1, total: 40 },
  { userId: 2, total: 200 },
  { userId: 1, total: 150 },
  { userId: 3, total: 80 },
  { userId: 4, total: 0 },
];

const results = new Map();
const resultArr = [];

for (const order of orders) {
  if (!results.has(order.userId)) {
    results.set(order.userId, []);
  }

  results.get(order.userId).push(order.total);
}

for (const user of users) {
  const totals = results.get(user.id) ?? [];
  resultArr.push({ ...user, orders: totals });
}

console.log(resultArr);
