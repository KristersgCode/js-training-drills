// const data = {
//   1: "good",
//   2: "none",
//   3: "bad",
//   4: "none",
// };

// //{ 1: "good", 3: "bad" }

// console.log(Object.entries(data))

// const filtered = Object.entries(data).filter(([_, value]) => {
//   return value !== "none";
// });

// console.log("filtered", filtered)


// const result = filtered.reduce((acc, [key, value]) => {
//   acc[key] = value;
//   console.log(acc[key])
//   return acc;
// }, {});

// console.log(result)


// const flags = {
//   isAdmin: true,
//   isBanned: false,
//   isVerified: true,
// };

// //["isAdmin", "isVerified"]

// const filtered = Object.entries(flags).filter(([_, value]) => 
//      value
// ).map(([key]) => key)


// console.log("map", filtered)

// const form = {
//   name: "Kristers",
//   email: "",
//   age: "25",
// };

//{ name: "Kristers", age: "25" }

// const removeEmpty =  Object.entries(form).filter(([_, value]) => value )

// const obj = Object.fromEntries(removeEmpty);

// console.log("removed", removeEmpty)


// const users = [
//   { id: 10, name: "A" },
//   { id: 20, name: "B" },
//   { id: 30, name: "C" },
// ];

// // {
// //   10: { id: 10, name: "A" },
// //   20: { id: 20, name: "B" },
// //   30: { id: 30, name: "C" }
// // }

// const solution = users.reduce((acc, user) => {
//   acc[user.id] = user
//     return acc
// }, {});

// console.log(solution)

// const journal = {
//   date: "2025-03-10",
//   items: [
//     { id: 1, state: "good" },
//     { id: 2, state: "none" },
//     { id: 3, state: "bad" },
//     { id: 4, state: "good" }
//   ]
// };

// // { good: 2, bad: 1 }

// // skip "none"
// // if "good" → increment acc.good
// // if "bad" → increment acc.bad

// const solution = journal.items.reduce((acc, item) => {
//   if (item.state !== "none") {
//     acc[item.state]++
//   }
//   return acc
// }, { good: 0, bad: 0 });

// console.log("soluton", solution)

// const selected = {
//   1: "good",
//   2: "none",
//   3: "bad",
//   4: "none",
// };

// // [
// //   { itemID: 1, state: "good" },
// //   { itemID: 3, state: "bad" }
// // ]

// // use Object.entries
// // use filter
// // use map
// // convert key to a number → Number(key)
// // no reduce
// // no loops

// const obj = Object.entries(selected).filter(([_, value]) => value !== "none").map(([key, value])=> ({
// itemID: Number(key),
// state: value
// }))
// console.log(obj)


// const apiResponse = [
//   { itemID: 1, state: "good" },
//   { itemID: 3, state: "bad" },
// ];

// // {
// //   1: "good",
// //   3: "bad"
// // }

// // use .reduce
// // no loops
// // no map
// // dynamic keys (acc[item.itemID])
// // return the accumulator each iteration

// const redo = apiResponse.reduce((acc, item) => {
//   acc[item.itemID] = item.state
//     return acc
// }, {})

// console.log(redo)

// const day = {
//   date: "2025-01-01",
//   items: [
//     { id: 1, state: "good"},
//     { id: 2, state: "none"},
//     { id: 3, state: "bad"},
//   ]
// };

// // {
// //   date: "2025-01-01",
// //   items: [
// //     { id: 1, state: "good"},
// //     { id: 3, state: "bad"}
// //   ]
// // }

// // NO mutation of original day object
// // NO loops
// // Use filter
// // Keep the date untouched
// // Rebuild a brand-new object

// const filtered = {
//   date: day.date,
//   items: day.items.filter(item => item.state !== "none")
// }
// console.log("filt", filtered)

// const products = [
//   { id: 1, cat: "food", name: "Apple" },
//   { id: 2, cat: "tech", name: "Phone" },
//   { id: 3, cat: "food", name: "Bread" },
//   { id: 4, cat: "tech", name: "Laptop" },
// ];

// // {
// //   food: ["Apple", "Bread"],
// //   tech: ["Phone", "Laptop"]
// // }

// const reduced = products.reduce((acc, product) => {
//   acc[product.cat] = acc[product.cat] ?? []
//   acc[product.cat].push(product.name)
//   return acc
// },{})

// console.log(reduced)

// const catalogs = [
//   { section: "food", items: ["Apple", "Bread"] },
//   { section: "tech", items: ["Phone", "Laptop"] },
// ];

// // ["Apple", "Bread", "Phone", "Laptop"]

// const flat = catalogs.flatMap(item => item.items);
  
//   console.log(flat)

// const catalogs = [
//   { items: [ { id: 1, name: "A" }, { id: 2, name: "B" } ] },
//   { items: [ { id: 3, name: "C" } ] },
// ];

// // [
// //   "A",
// //   "B",
// //   "C"
// // ]

// const flat = catalogs.flatMap(item => item.items.map((i) => i.name))

// console.log(flat)

// const logs = [
//   { user: "A", action: "login" },
//   { user: "B", action: "logout" },
//   { user: "A", action: "upload" },
//   { user: "A", action: "login" },
//   { user: "B", action: "login" },
// ];

// {
//   A: { login: 2, upload: 1 },
//   B: { logout: 1, login: 1 }
// }

// Must use reduce
// No loops
// Dynamic keys required
// Create the nested object on the fly if it doesn’t exist

// const reduced = logs.reduce((acc , log) => {
//    acc[log.user] = acc[log.user] ?? {};
//    acc[log.user][log.action] = (acc[log.user][log.action] ?? 0) + 1;   
//   return acc
// } , {})


// const reduced = logs.reduce((acc , log) => {
//    acc["A"] = acc["A"] ?? {};
//    acc["A"]["login"] = (acc["A"]["login"] ?? 0) + 1;   
//   return acc
// } , {})


// console.log(reduced)

// const words = ["apple", "air", "banana", "boat", "cat"];

// // {
// //   a: ["apple", "air"],
// //   b: ["banana", "boat"],
// //   c: ["cat"]
// // }

// const grouped = words.reduce((acc, word) => {
//   const letter = word[0]
//   acc[letter] = acc[letter] ?? []
//   acc[letter].push(word)
//   return acc
// }, {})

// const words = ["apple", "banana", "apricot", "berry", "avocado"];

// // {
// //   a: 3,
// //   b: 2
// // }

// const occurrences = words.reduce((acc, word) => {
//   const letter = word[0];
//   acc[letter] = (acc[letter] ?? 0) + 1;
//   return acc;
// }, {});

// console.log(occurrences)

// const words = ["apple", "banana", "apple", "kiwi", "banana", "apple"];

// // {
// //   apple: 3,
// //   banana: 2,
// //   kiwi: 1
// // }

// const occurrences = words.reduce((acc, word) => {
//     acc[word] = (acc[word] ?? 0) + 1;
//     return acc
// },{})
// console.log(occurrences)

// const words = ["apple", "age", "banana", "boat", "car", "cat"];

// // {
// //   a: 2,
// //   b: 2,
// //   c: 2
// // }

// const reduc = words.reduce((acc, word)=> {
//     const letter = word[0]
//     acc[letter] = (acc[letter] ?? 0) + 1
//     return acc
// }, {})

// console.log(reduc)

// const words = [
//   "apple",
//   "ant",
//   "banana",
//   "band",
//   "boat",
//   "art",
//   "apply",
//   "bake"
// ];

// {
//   ap: 2,
//   an: 1,
//   ba: 3,
//   bo: 1,
//   ar: 1
// }

// const reduc = words.reduce((acc, word) => {
// const letters = word.slice(0,2)
// console.log(letters)
// acc[letters] = (acc[letters] ?? 0) + 1
// return acc
// }, {})

// console.log(reduc)

// const items = [
//   { cat: "food", price: 5 },
//   { cat: "tech", price: 100 },
//   { cat: "food", price: 3 },
//   { cat: "clothes", price: 20 },
//   { cat: "tech", price: 80 },
// ];

// // {
// //   food: 8,
// //   tech: 180,
// //   clothes: 20
// // }

// const counted = items.reduce((acc, item)=> {
// acc[item.cat] = (acc[item.cat] ?? 0) + item.price
// return acc
// }, {})

// console.log(counted)

// const users = [
//   { name: "John", age: 20 },
//   { name: "Anna", age: 25 },
//   { name: "Mark", age: 30 }
// ];

// [
//   "John is 20",
//   "Anna is 25",
//   "Mark is 30"
// ]


// const mapped = users.map(user => `${user.name} is ${user.age}`);

// console.log(mapped)

// const users = [
//   { name: "John", age: 20 },
//   { name: "Mark", age: 30 },
//   { name: "Anna", age: 25 },
// ];


// const sorted = [...users].sort((a, b) => a.age - b.age);

// console.log(sorted)

// function makeGreeter(callback) {
//   return function(name) {
//     return callback(name);
//   };
// }


// function greet(name) {
//   return "Hello " + name;
// }

// const greeter = makeGreeter(greet);
// console.log(greeter("Kristers")); 


// function makeMultiplier(multiplier) {
//   return function(value) {
//     return multiplier * value;
//   };
// }

// const triple = makeMultiplier(3);
// console.log(triple(5)); // expect 15


// function createApi(baseUrl) {
//   return function(endpoint) {
//     return baseUrl + endpoint;
//   };
// }

// const api = createApi("https://api.example.com");
// console.log(api("/users"));  // https://api.example.com/users



// function createLogger(prefix) {
//   return function(message) {
//     return `[${prefix}]: ${message}`
//   };
// }

// const error = createLogger("ERROR");
// error("Something broke");

// console.log(error("Something broke"))


// function createPower(power){
//      return function(value){
//         return power * value
//     }
// }

// const square = createPower(2);

// console.log(square(51))

// function createToggle() {
//   let state = false

//   return function() {
//    return state = !state
//   };
// }

// const toggle = createToggle();

// console.log(toggle()); // true
// console.log(toggle()); // false

// function createCounter(start) {
//   let count = start;

//   function inc() {
//     return count++
//   }

//   function get() {
//     return count
//   }

//   return {
//     inc, get
//   };
// }

// const counter = createCounter(10);

// console.log(counter.get()); // 10
// counter.inc();
// counter.inc();
// console.log(counter.get()); // 12

// const users = [
//   { id: 1, name: "Anna", age: 17 },
//   { id: 2, name: "John", age: 22 },
//   { id: 3, name: "Mark", age: 30 }
// ];

// // ["Anna", "John", "Mark"]

// const names = users.map(user => user.name);

// console.log("names", names)

// const users = [
//   { id: 1, name: "Anna", age: 17 },
//   { id: 2, name: "John", age: 22 },
//   { id: 3, name: "Mark", age: 30 }
// ];

// // [{ id: 2, ... }, { id: 3, ... }]

// const adults = users.find((adult) => adult.id === 2)
// console.log(adults)

// const items = [
//   { price: 5 }, 
//   { price: 10 },
//   { price: 3 }
// ];

// // 18


// const reduced = items.reduce((acc, item) => {
//    return acc + item.price;
// }, 0)

// const products = [
//   { cat: "food", price: 5 },
//   { cat: "tech", price: 100 },
//   { cat: "food", price: 3 },
//   { cat: "clothes", price: 20 },
//   { cat: "tech", price: 80 }
// ];

// {
//   food: [5, 3],
//   tech: [100, 80],
//   clothes: [20]
// }

// const result = products.reduce((acc, product)=> {
//   acc[product.cat] = acc[product.cat] ?? []
//   acc[product.cat].push(product.price)
//   return acc
// }, {})

// console.log("result", result)

// const users = [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" },
//   { id: 1, name: "A2" },
//   { id: 3, name: "C" }
// ];

// // [
// //   { id: 1, name: "A" },
// //   { id: 2, name: "B" },
// //   { id: 3, name: "C" }
// // ]

// const unique = users.reduce((acc, user) => {
//   if (!acc.some(u => u.id === user.id)) {
//     acc.push(user);
//   }
//   return acc;
// }, []);

// console.log(unique)

// const items = ["a", "b", "a", "c", "b", "a"];

// // { a: 3, b: 2, c: 1 }

// const result = items.reduce((acc, letter) => {
//   acc[letter] = (acc[letter] ?? 0) + 1
//   return acc
// }, {})

// console.log(result)

// const api = [
//   { id: 10, title: "Post", author: { id: 1, name: "Mark" }},
//   { id: 11, title: "Story", author: { id: 2, name: "John" }},
// ];

// // [
// //   { id: 10, title: "Post", authorName: "Mark" },
// //   { id: 11, title: "Story", authorName: "John" }
// // ]

// const result = api.map((m) => ({
// id: m.id,
// title: m.title,
// authorName: m.author.name
// }))

// const data = [
//   { day: "Mon", tasks: ["a", "b"] },
//   { day: "Tue", tasks: ["c"] }
// ];

// // ["Mon:a", "Mon:b", "Tue:c"]

// const flattened = data.flatMap(dayEntry =>
//   dayEntry.tasks.map(task => `${dayEntry.day}:${task}`)
// );

// console.log(flattened)

// const users = [
//   { name: "A", age: 17 },
//   { name: "B", age: 22 },
//   { name: "C", age: 30 }
// ];

// // {
// //   teen: ["A"],
// //   adult: ["B", "C"]
// // }

// const grouped = users.reduce((acc, user) => {
//   // 1. Decide group name
//   const group = user.age >= 18 ? "adult" : "teen";

//   // 2. If group not created yet, create empty array
//   acc[group] = acc[group] ?? [];

//   // 3. Push name into correct group
//   acc[group].push(user.name);

//   return acc;
// }, {});

// console.log(grouped)

// const arr = [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" }
// ];

// const result = arr.reduce((acc, item) => {
//   acc[item.id] = item;
//   return acc;
// }, {});

// console.log(result);

// const stats = {
//   day1: { views: 10, likes: 2 },
//   day2: { views: 5, likes: 1 },
//   day3: { views: 9, likes: 3 }
// };

// // { views: 24, likes: 6 }

// const totals = Object.values(stats).reduce((acc, day) => {
//   acc.views += day.views;
//   acc.likes += day.likes;
//   return acc;
// }, { views: 0, likes: 0 });


// console.log(totals)
