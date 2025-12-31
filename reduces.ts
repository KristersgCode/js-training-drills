// const orders = [
//   { total: 12.5, currency: "EUR" },
//   { total: 7.3, currency: "EUR" },
//   { total: 20, currency: "USD" },
//   { total: 15, currency: "EUR" }
// ];
// // Task
// // Sum only EUR
// // Ignore totals < 10
// // Return a number

// const result = orders.reduce((sum, order) => {
//     if(order.total > 10 && order.currency === "EUR"){
//         console.log(order)
//         return sum + order.total 
//     }
//     return sum
// }, 0)

// console.log(result)

// const products = [
//   { name: "apple", category: "fruit" },
//   { name: "pear", category: "fruit" },
//   { name: "carrot", category: "veg" },
//   { name: "potato", category: "veg" },
//   { name: "bread", category: "grain" }
// ];
// // 	{
// //   fruit: 2,
// //   veg: 2,
// //   grain: 1
// // }

// const result = products.reduce((acc, product) => {
//                 acc[product.category] = (acc[product.category] ?? 0) + 1
//                 return acc
// },{})

// console.log(result)

// const users = [
//   { id: 1, name: "Anna", role: "admin" },
//   { id: 2, name: "Bob", role: "user" },
//   { id: 3, name: "Cara", role: "user" }
// ];
// // 	{
// //   1: { name: "Anna", isAdmin: true },
// //   2: { name: "Bob", isAdmin: false },
// //   3: { name: "Cara", isAdmin: false }
// // }

//     const result = users.reduce((acc, user)=> {
//                 acc[user.id] = {
//                     name: user.name,
//                     isAdmin: user.role === "admin" ? true : false
//                 }
//                 return acc
//     },{})
    

//     console.log(result)

// const numbers = [1, 2, 3, 4, 5, 6];
// 	// 	Keep only even numbers
// 	// 	Multiply by 3
// 	// 	Result must be an array
//     // [6, 12, 18]

//     const result = numbers.reduce((sum, number) => {
//             if(number % 2 === 0){
//             return sum.concat(number * 3)
//             }
//             return sum
//     },[])

//     console.log(result)


// const words = ["Apple", "banana", "APPLE", "pear", "Banana"];

// // {
// //   apple: 2,
// //   banana: 2
// // }

// const result = words.reduce((acc, word) => {
//     let normalize = word.toLowerCase()
//     if(normalize.length >= 5)
//         acc[normalize] = (acc[normalize] ?? 0) +1
//         return acc
// }, {})

// console.log(result)


// const logs = [
//   { day: "mon", level: "error" },
//   { day: "mon", level: "info" },
//   { day: "mon", level: "error" },
//   { day: "tue", level: "info" },
//   { day: "tue", level: "warn" }
// ];
	// •	Group by day
	// •	Count per level
	// •	Add { total } per day

//     {
//   mon: {
//     error: 2,
//     info: 1,
//     total: 3
//   },
//   tue: {
//     info: 1,
//     warn: 1,
//     total: 2
//   }
// }

// const result = logs.reduce((acc, log) => {
//   // 1. ensure day bucket exists
//   if (!acc[log.day]) {
//     acc[log.day] = { total: 0 };
//   }

//   // 2. ensure level bucket exists inside the day
//   acc[log.day][log.level] = (acc[log.day][log.level] ?? 0) + 1;

//   // 3. update total
//   acc[log.day].total += 1;

//   return acc;
// }, {});


//     console.log(result)

// const people = [
//   { name: "Anna", age: 22 },
//   { name: "Bob", age: 16 },
//   { name: "Cara", age: 30 },
//   { name: "Dan", age: 15 }
// ];

// // {
// //   adults: ["ANNA", "CARA"],
// //   minors: ["bob", "dan"]
// // }

// const result = people.reduce((acc, person) => {
//     if(person.age > 18){
//         acc.adults.push(person.name.toUpperCase())
//     }
//     else {
//         acc.minors.push(person.name.toLowerCase())
//     }
//     return acc
// },{adults: [], minors: []})

// console.log(result)

// const actions = [
//   { type: "LOGIN" },
//   { type: "ADD_ITEM", item: "book" },
//   { type: "ADD_ITEM", item: "pen" },
//   { type: "LOGOUT" },
//   { type: "ADD_ITEM", item: "pencil" }
// ];
// Items added while logged out must be ignored
// {
//   isLoggedIn: false,
//   items: ["book", "pen"]
// }

// const result = actions.reduce((acc, action) => {
//         if(action.type === "LOGIN"){
//             acc.isLoggedIn = true
//         }
        
//         if(action.type === "LOGOUT")
//             {
//                 acc.isLoggedIn = false
//         }

//         if(action.type === "ADD_ITEM" && acc.isLoggedIn)
//         {
//             acc.items.push(action.item)
//         }
        
//         return acc
// },{isLoggedIn: false, items: []})

// console.log(result)

// const numbers = [1, 2, 3, 4, 5, 6]

// const result = numbers.reduce((sum, number) => {
// 	if(number % 2 === 0 && number > 1){
// 		return sum + number
// 	}
// 	return sum
// }, 0)

// console.log(result)

// const words = ["apple", "banana", "apple", "orange", "banana", "apple"]
// // { apple: 3, banana: 2, orange: 1 }

// const result = words.reduce((acc, sum)=> {
// 	 acc[sum] = (acc[sum] ?? 0) + 1
// 	return acc
// },{})

// console.log(result)

// const nested = [[1, 2], [3, 4], [5]]

// // [1, 2, 3, 4, 5]

// const result = nested.reduce((acc, array) => {
// 	return acc.concat(array)
// }, [])

// console.log(result)

// const users = [
//   { name: "Anna", role: "admin" },
//   { name: "Bob", role: "user" },
//   { name: "Chris", role: "admin" }
// ]

// {
//   admin: [
//     { name: "Anna", role: "admin" },
//     { name: "Chris", role: "admin" }
//   ],
//   user: [
//     { name: "Bob", role: "user" }
//   ]
// }

// const result = users.reduce((acc, user) => {
// 	acc[user.role] = acc[user.role] ?? []
// 	acc[user.role].push(user)
// 	return acc
// },{})


// Description:Find the maximum number.

// const scores = [42, 87, 55, 99, 64]

// const result = scores.reduce((acc, number) => {
// 	if(number > acc){
// 		return number
// 	}
// 	return acc
// },0)

// const values = [1, 2, 2, 3, 4, 4, 5]

// // [1, 2, 3, 4, 5]


// const result = values.reduce((acc, number)=>{
// 	if(!acc.includes(number)){
// 		acc.push(number)
// 	}
// 	return acc
// }, [])

// console.log(result)


// Create an object where keys are id and values are the objects.

// const items = [
//   { id: "a1", value: 10 },
//   { id: "b2", value: 20 }
// ]

// // {
// //   a1: { id: "a1", value: 10 },
// //   b2: { id: "b2", value: 20 }
// // }

// const result = items.reduce((acc, item) => {
// 	acc[item.id] = item
// 	return acc
// }, {})


// Calculate total cost (price * qty).

// const cart = [
//   { price: 10, qty: 2 },
//   { price: 5, qty: 4 }
// ]

// // 40

// const result = cart.reduce((acc, item) => {
// 	let total = 0
// 	total = item.price * item.qty 
// 	return acc + total
// }, 0)


// const nums = [1, 2, 3, 4, 5, 6]

// // {
// //   even: [2, 4, 6],
// //   odd: [1, 3, 5]
// // }

// const result = nums.reduce((acc, number) => {
// 	if(number % 2 === 0){
// 		acc.even.push(number)
// 	}else {
// 		acc.odd.push(number)
// 	}
// 	return acc
// },{even: [], odd: []})

// console.log(result)
// const flags = { darkMode: false, betaUser: false }

// const updates = [
//   { key: "darkMode", value: true },
//   { key: "betaUser", value: true },
//   { key: "betaUser", value: false }
// ]

// const result = updates.reduce((acc, update) => {
//   acc[update.key] = update.value
//   return acc
// }, { ...flags })

// { darkMode: true, betaUser: true }

// const todos = [
//   { title: "Code", done: true },
//   { title: "Gym", done: false },
//   { title: "Read", done: true }
// ]

// // 2

// const stateMachine = todos.reduce((acc, todo) => {
//   console.log(acc)
//   if(todo.done === true)
//   {
//     acc++
//   }
//   return acc
// },0)

// const cart = [
//   { price: 10, qty: 2 },
//   { price: 5, qty: 1 }
// ]

// const totalPrice = cart.reduce((acc, item)=> {
//   return acc + item.price * item.qty
// },0)
// // 25

// const users = [
//   { name: "Anna", role: "admin" },
//   { name: "John", role: "user" },
//   { name: "Maria", role: "admin" }
// ]
// // TaskGroup users by role.
// // Output

// // {
// //   admin: ["Anna", "Maria"],
// //   user: ["John"]
// // }

// const groupedUsers = users.reduce((acc, user) => {
//     acc[user.role] = acc[user.role] ?? []
//     acc[user.role].push(user.name)
//     return acc
// },{})

// console.log(groupedUsers)

// const products = [
//   { id: 1, name: "Book" },
//   { id: 2, name: "Pen" }
// ]
// // TaskConvert array into object keyed by id.
// // Output

// // {
// //   1: { id: 1, name: "Book" },
// //   2: { id: 2, name: "Pen" }
// // }

// const result = products.reduce((acc, object) => {
//   acc[object.id] = object
//   return acc
// },{})

// const events = [
//   "LOGIN",
//   "LOGOUT",
//   "LOGIN",
//   "LOGIN"
// ]

// const authStatus = events.reduce((acc, event) => {
//   if(event === "LOGIN"){
//     return "loggedIn"
//   }
//   if(event === "LOGOUT"){
//     return "loggedOut"
//   }
//   return acc

// }, 'loggedOut')

// console.log(authStatus)

// // Rules
// // 	•	Initial state: "loggedOut"
// // 	•	"LOGIN" → "loggedIn"
// // 	•	"LOGOUT" → "loggedOut"
// // TaskReturn final auth state.
// // Output

// "loggedIn"


// const actions = [
//   { type: "ADD", item: "apple" },
//   { type: "ADD", item: "banana" },
//   { type: "REMOVE", item: "apple" }
// ]
// Initial State
// []

// Rules
// 	•	"ADD" → add item
// 	•	"REMOVE" → remove one instance
// Output

// ["banana"]

// const shoppingCart = actions.reduce((acc, action) => {
//   if(action.type === "ADD"){
//     return acc.concat(action.item)
//   }

//   if(action.type === "REMOVE"){
//     const index = acc.indexOf(action.item)
//     if (index === -1) return acc
//     return [
//       ...acc.slice(0, index),
//       ...acc.slice(index + 1)
//     ]
//   }
//   return acc
// },[])

// console.log(shoppingCart)

// const logs = [
//   { level: "error", msg: "Failed" },
//   { level: "info", msg: "Started" },
//   { level: "error", msg: "Timeout" }
// ]
// // Task Collect only error messages.
// // Output

// // ["Failed", "Timeout"]

// const errorMessages = logs.reduce((acc, log) => {
//    if(log.level === "error")
//    {
//     return acc.push(log.msg)
//    }
//    return acc
// },[])

// console.log(errorMessages)

// const fields = [
//   { name: "email", valid: true },
//   { name: "password", valid: false },
//   { name: "age", valid: true }
// ]
// TaskReturn:

// {
//   isValid: false,
//   invalidFields: ["password"]
// }

// const invalidFields = fields.reduce((acc, field) => {
//   if(!field.valid){
//     acc.isValid = false
//     acc.invalidFields.push(field.name)
//   }
//   return acc

// },{isValid: true, invalidFields: []})

// console.log(invalidFields)

// const actions = [
//   { type: "INCREMENT" },
//   { type: "INCREMENT" },
//   { type: "DECREMENT" }
// ]

// const result = actions.reduce((acc, action) => {
//   console.log(acc)
//     if(action.type === "INCREMENT"){
//         acc++
//     }
//     if(action.type === "DECREMENT"){
//       acc--
//     }
//     return acc
// },0)

// console.log(result)

// Initial State
// 0
// Output
// 1

