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

// const users = [
//   { id: 1, role: "admin", team: "A" },
//   { id: 2, role: "user", team: "A" },
//   { id: 3, role: "admin", team: "B" }
// ]

// // {
// //   "admin:A": [1],
// //   "user:A": [2],
// //   "admin:B": [3]
// // }

// const result = users.reduce((acc, user) => {
// 	const key = `${user.role}:${user.team}`
// 	acc[key] = acc[key] ? [...acc[key], user.id] : [user.id]
// 	return acc
// },{})

// const updates = [
//   { a: 1, b: 2 },
//   { b: 3, c: 4 },
//   { a: 1, c: 5 }
// ]

// const result = updates.reduce((acc, obj) => {
//   Object.keys(obj).forEach(key => {
//     const prev = acc.data[key]
//     const next = obj[key]

//     if (prev !== undefined && prev !== next) {
//       acc.conflicts.push(key)
//     }

//     acc.data[key] = next
//   })

//   return acc
// }, { data: {}, conflicts: [] })


// {
//   data: { a: 1, b: 3, c: 5 },
//   conflicts: ["b", "c"]
// }
// Rules:
	// •	conflict = key seen before with different value
	// •	reduce must return { data, conflicts }

// 	const users = [
//   { role: "admin", active: true },
//   { role: "admin", active: false },
//   { role: "user", active: true }
// ]

// {
//   admin: { total: 2, active: 1 },
//   user: { total: 1, active: 1 }
// }

// const result = users.reduce((acc, user) => {
//   acc[user.role].total += 1

//   if (user.active) {
//     acc[user.role].active += 1
//   }

//   return acc
// }, {
//   admin: { total: 0, active: 0 },
//   user: { total: 0, active: 0 }
// })

// const items = ["a", "b", "a", "c", "b"]

// // ["a", "b", "c"]

// const result = items.reduce((acc, letter)=>{
// 	if(!acc.includes(letter)){
// 		acc.push(letter)
// 	}
// 	return acc
// },[])

// console.log(result)

// const updates = [
//   { id: 1, value: "A" },
//   { id: 1, value: "B" },
//   { id: 2, value: "X" }
// ]

// {
//   1: ["A", "B"],
//   2: ["X"]
// }
// •	grouping + preserving order

// const result = updates.reduce((acc, update) => {
// 	acc[update.id] = acc[update.id] ? [...acc[update.id], update.value] : [update.value]
// 	return acc
// }, {})

// const nums = [1, 2, 3, 4, 5, 6]

// const result = nums.reduce((acc, number) => {
// 	if(number % 2 === 0){
// 		acc.even.push(number)
// 	}
// 	else {
// 		acc.odd.push(number)
// 	}
// 	return acc
// }, {even: [], odd: []})

// const scores = [10, 20, 30]

// {
//   sum: 60,
//   avg: 20,
//   count: 3
// }
// Focus:
	// •	accumulator with multiple fields

// const result = scores.reduce((acc, number) => {
// 	acc.sum += number
// 	acc.count += 1
// 	acc.avg = acc.sum / acc.count
// 	return acc

// }, {sum: 0, avg: 0, count: 0})

// const input = ["a", "a", "b", "b", "b", "a"]

// const result = input.reduce((acc, letter)=> {
// 	const previousValue = acc[acc.length -1]
// 	if(previousValue !== letter){
// 		acc.push(letter)
// 	}
// return acc
// }, [])

// ["a", "b", "a"]

// const nums = [3, 8, 12, 1, 5]
// // Output

// const result = nums.reduce((acc, number) => {
// 	if(number < 6){
// 		acc.small.push(number)
// 	}
// 	if(number >= 6){
// 		acc.large.push(number)
// 	}
// 	return acc
// }, {small: [], large: []})

// console.log(result)

// const input = [1, 1, 2, 2, 2, 3, 3]
// // [1, 2, 3]

// const result = input.reduce((acc, number) => {
// 	const prevValue = acc[acc.length -1]
// 	if(prevValue !== number){
// 		acc.push(number)
// 	}
// 	return acc
// }, [])

// const input = ["a", "a", "b", "b", "a", "a"]

// // ["a", "b", "a"]
// 	// •	adjacency, not global uniqueness

// 	const result = input.reduce((acc, letter) => {
// 		const prevLetter = acc[acc.length -1]
// 		if(prevLetter !== letter){
// 			acc.push(letter)
// 		}
// 		return acc
// 	},[])

// const input = [1, 1, 1, 2, 2, 3]

// const result = input.reduce((acc, number) => {
//   if (acc.lastValue === null) {
//     acc.currentCount = 1
//   } else if (number === acc.lastValue) {
//     acc.currentCount += 1
//   } else {
//     acc.counts.push(acc.currentCount)
//     acc.currentCount = 1
//   }

//   acc.lastValue = number
//   return acc
// }, { counts: [], lastValue: null, currentCount: 0 })

// result.counts.push(result.currentCount)

// console.log(result.counts)

// // [3, 2, 1]
// 	// •	lengths of consecutive runs
// 	// •	detect when a run ends

// const actions = [
//   { type: "TOGGLE" },
//   { type: "TOGGLE" },
//   { type: "TOGGLE" }
// ]

// const result = actions.reduce((acc, action) => {
// 	if(action.type === "TOGGLE"){
// 		acc.isOn = true,
// 		acc.toggles += 1
// 	}
// 	return acc
// },{
//   isOn: false,
//   toggles: 0
// })



// const actions = [
//   { type: "ADD", permission: "write" },
//   { type: "ADD", permission: "read" },
//   { type: "REMOVE", permission: "read" },
//   { type: "RESET" },
// ]
// 	// •	No duplicates
// 	// •	RESET clears everything

// 	const result = actions.reduce((acc, action) => {
// 		if(action.type === "ADD" && !acc.permissions.includes(action.permission)){
// 				acc.permissions.push(action.permission)
// 		}
// 		if(action.type === "REMOVE"){
// 			const index = acc.permissions.indexOf(action.permission)
// 			  if (index !== -1) {
//     acc.permissions.splice(index, 1)
//   }
// 		}
// 		if(action.type === "RESET"){
// 			acc.permissions = []
// 		}
// 		return acc
// 	},
// 		{
// 	 	 permissions: ["read"]
// 		})


// {
//   value: 10
// }

// const actions = {
//   type: "BATCH",
//   actions: [
//     { type: "INCREMENT", by: 5 },
//     { type: "DECREMENT", by: 2 },
//     { type: "INCREMENT", by: 1 }
//   ]
// }

// const result = actions.reduce((acc, action) => {
//   if (action.type === "BATCH") {
//     acc = action.actions.reduce((innerAcc, innerAction) => {
//       if(innerAction.type === "INCREMENT"){
// 		innerAcc.value+= innerAction.by
// 	  }
// 	  if(innerAction.type === "DECREMENT"){
// 		innerAcc.value -= innerAction.by
// 	  }
// 	  return innerAcc

//     }, acc)
//   }

//   return acc
// }, { value: 10 })

// (This drill forces reducer-inside-reducer thinking)
//----------------------------------------------------------------------
// Initial state

// {
//   value: 0,
//   history: []
// }
// Actions

// const actions = [
//   { type: "SET", value: 5 },
//   { type: "SET", value: 10 },
//   { type: "UNDO" }
// ]

// const result = actions.reduce((acc, action) => {

// 	if(action.type === "UNDO") {
// 		if(!acc.history.length){
// 			acc.value = 0
// 		}
// 		else {
// 		acc.value = acc.history[acc.history.length - 1]
// 		acc.history.pop()
// 		}
// 	}
// 	if(action.type === "SET"){
// 		acc.history.push(acc.value)
// 		acc.value = action.value
// 	}	
// 	return acc
// }, {value:0, history: []})

// console.log(result)
	// •	Each SET pushes previous value to history
	// •	UNDO restores last value
// Expected final state

// {
//   value: 5,
//   history: [0]
// }

// -----------------------------------------------------------------------------

// idle → loading → success
        //    ↘ error
// Initial state

// const events = [
//   { type: "FETCH" },
//   { type: "SUCCESS" },
//   { type: "ERROR" },
// ]

// const result = events.reduce((acc, event) => {
//   // idle → loading
//   if (acc.status === "idle" && event.type === "FETCH") {
//     return { ...acc, status: "loading" }
//   }

//   // loading → success
//   if (acc.status === "loading" && event.type === "SUCCESS") {
//     return { ...acc, status: "success" }
//   }

//   // loading → error
//   if (acc.status === "loading" && event.type === "ERROR") {
//     return { ...acc, status: "error" }
//   }

//   // invalid transition → do nothing
//   return acc
// }, { status: "idle" })

// 	// •	FETCH only valid from idle
// 	// •	SUCCESS / ERROR only valid from loading
// 	// •	Invalid transitions do nothing

// loggedOut → loggingIn → loggedIn

// {
//   status: "loggedOut"
// }

// const events = [
//   { type: "LOGIN" },
//   { type: "LOGIN_SUCCESS" },
//   { type: "LOGOUT" }
// ]

// const result = events.reduce((acc, event) => {

// if(event.type === "LOGIN" && acc.status === "loggedOut"){
// 	return {...acc, status: "loggingIn" }
// }

// if(event.type === "LOGIN_SUCCESS" && acc.status === "loggingIn"){
// 	return {...acc, status: "loggedIn" }
// }

// if(event.type === "LOGOUT" && acc.status === "loggedIn"){
// 	return {...acc, status: "loggedOut" }
// }


// return acc
// }, {status: "loggedOut"})

// const actions = [
//   { type: "SUBMIT" },
//   { type: "INVALID", errors: ["email"] },
//   { type: "FIX_FIELD", field: "email" },
//   { type: "VALID" }
// ]

// const result = actions.reduce((acc, action) => {
//   // idle → validating
//   if (action.type === "SUBMIT" && acc.status === "idle") {
//     return { ...acc, status: "validating" }
//   }

//   // validating → invalid
//   if (action.type === "INVALID" && acc.status === "validating") {
//     return { ...acc, status: "invalid", errors: action.errors }
//   }

//   // remove one error
//   if (action.type === "FIX_FIELD" && acc.status === "invalid") {
//     return {
//       ...acc,
//       errors: acc.errors.filter(e => e !== action.field)
//     }
//   }

//   // invalid → valid (only if no errors)
//   if (
//     action.type === "VALID" &&
//     acc.status === "invalid" &&
//     acc.errors.length === 0
//   ) {
//     return { ...acc, status: "valid" }
//   }

//   // invalid transition → do nothing
//   return acc
// }, {
//   status: "idle",
//   errors: []
// })

// const users = [
//   { name: "Anna", age: 17 },
//   { name: "Bob", age: 22 },
//   { name: "Chris", age: 16 },
//   { name: "Dana", age: 35 }
// ]

// // {
// //   minor: ["Anna", "Chris"],
// //   adult: ["Bob", "Dana"]
// // }


// const result = users.reduce((acc, user) => {
// 	if(user.age < 18){
// 	acc.minor.push(user.name)
// 	}
// 	else {
// 	acc.adult.push(user.name)
// 	}
// 	return acc
// }, {
// 	minor: [], adult: []
// })

// const votes = ["yes", "no", "yes", "yes", "no"]
// // Task: count each valueExpected:

// // { yes: 3, no: 2 }

// const result = votes.reduce((acc, vote) => {
// 	if(vote === "yes"){
// 		acc.yes++
// 	}
// 	else {
// 		acc.no++
// 	}
// 	return acc
// }, {yes: 0, no: 0})

// const products = [
//   { id: "p1", price: 10 },
//   { id: "p2", price: 20 }
// ]
// // Task: key by idExpected:

// // {
// //   p1: { id: "p1", price: 10 },
// //   p2: { id: "p2", price: 20 }
// // }

// const result = products.reduce((acc, product) => {
// 	acc[product.id] = product
// 	return acc
// }, {})

// console.log(result)

// const numbers = [5, 12, 8, 130, 44]
// // Task: sum only numbers > 10Expected:

// // 186

// const result = numbers.reduce((acc, number) => {
// 	if(number > 10){
// 		return acc + number
// 	}
// return acc
// },0)

// const orders = [
//   { user: "A", total: 30 },
//   { user: "B", total: 50 },
//   { user: "A", total: 20 }
// ]
// // Task: sum totals per userExpected:

// // { A: 50, B: 50 }

// const result = orders.reduce((acc, order) => {
// 		acc[order.user] = (acc[order.user] ?? 0) + order.total
// 		return acc
// },{})

// const actions = [
//   { type: "LOGIN" },
//   { type: "LOGOUT" },
//   { type: "LOGIN" }
// ]
// Rules:
	// •	LOGIN → authenticated
	// •	LOGOUT → guest
// Expected final state:

// { status: "authenticated" }


// const result = actions.reduce((acc, action) => {
// 	if(action.type === "LOGIN" && acc.status !== "authenticated"){
// 		 acc.status = "authenticated"
// 	}
// 	else if(action.type === "LOGOUT" && acc.status === "authenticated"){
// 		 acc.status = "guest"
// 	}
// 	return acc
// }, {status: "guest"})

// console.log(result)

// const items = ["a", "b", "a", "c", "b"]

// const result = items.reduce((acc, letter) => {
// 	if(!acc.includes(letter)){
// 		acc.push(letter)
// 	}
// 	return acc
// }, [])

// // ["a", "b", "c"]

// const nums = [1, 2, 3, 4, 5]
// // Task: split into even / oddExpected:

// // {
// //   even: [2, 4],
// //   odd: [1, 3, 5]
// // }

// const result = nums.reduce((acc, number) => {
// 			if(number % 2 === 0){
// 				acc.even.push(number)
// 			}
// 			else {
// 				acc.odd.push(number)
// 			}
// 			return acc
// },{even: [], odd: []})

// console.log(result)

const matrix = [
  [1, 2],
  [3, 4],
  [5]
]
// Task: flatten and sumExpected:

// 15

const result = matrix.reduce((sum, inner) => {
  return sum + inner.reduce((innerSum, n) => innerSum + n, 0)
}, 0)

console.log(result) // 15