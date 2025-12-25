// •	key = id
// 	•	value = { name, isAdult }
// 	•	ignore users with deleted: true

// const users = [
//   { id: "u1", name: "Anna", age: 22, deleted: false },
//   { id: "u2", name: "Bob", age: 17, deleted: false },
//   { id: "u3", name: "Cara", age: 31, deleted: true }
// ]

// // Map {
// //   "u1" => { name: "Anna", isAdult: true },
// //   "u2" => { name: "Bob", isAdult: false }
// // }

// let mappedUsers = new Map()

// for(const user of users){
//     if(user.deleted){
//       continue
//     }
//     let isAdult = user.age >= 18
//    mappedUsers.set(user.id, {name: user.name, isAdult})
// }

// console.log(mappedUsers)

// Create a Map counting how many times each event appears.

// const events = [
//   "LOGIN",
//   "LOGOUT",
//   "LOGIN",
//   "LOGIN",
//   "PURCHASE",
//   "LOGOUT"
// ]

// // Map {
// //   "LOGIN" => 3,
// //   "LOGOUT" => 2,
// //   "PURCHASE" => 1
// // }

// const mapped = new Map()

// for(const event of events){
//     mapped.set(event, (mapped.get(event) ?? 0) + 1)
// }

// console.log(mapped)

// Group orders by userId.
// Value should be an array of order IDs.

// const orders = [
//   { id: "o1", userId: "u1" },
//   { id: "o2", userId: "u2" },
//   { id: "o3", userId: "u1" },
//   { id: "o4", userId: "u3" }
// ]

// // Map {
// //   "u1" => ["o1", "o3"],
// //   "u2" => ["o2"],
// //   "u3" => ["o4"]
// // }

// const ordered = new Map()

// for (const order of orders) {
//   const arr = ordered.get(order.userId) ?? []
//   arr.push(order.id)
//   ordered.set(order.userId, arr)
// }

// console.log(ordered)


	// •	"LOGIN" → set user online
	// •	"LOGOUT" → set user offline
    // Final Map should contain only users who are online.

// const actions = [
//   { type: "LOGIN", userId: "u1" },
//   { type: "LOGIN", userId: "u2" },
//   { type: "LOGOUT", userId: "u1" },
//   { type: "LOGIN", userId: "u3" }
// ]

// // Map {
// //   "u2" => true,
// //   "u3" => true
// // }

// const mapped = new Map()

// for(const action of actions){
//     if(action.type === "LOGOUT"){
//        mapped.delete(action.userId)
//     }

//     if(action.type === "LOGIN"){
//         mapped.set(action.userId, true)
//     }
// }

// console.log(mapped)

// From a Map of products, produce a sorted array of product names 
// (sorted by price ascending).

// const products = new Map([
//   ["p1", { name: "Keyboard", price: 120 }],
//   ["p2", { name: "Mouse", price: 40 }],
//   ["p3", { name: "Monitor", price: 300 }]
// ])

// // ["Mouse", "Keyboard", "Monitor"]


// const result = [...products.values()].sort((a,b) => a.price - b.price).map((prod) => {
//     return prod.name
// })

// console.log(result)

// Remove duplicate emails (case-insensitive).
// Keep the first occurrence.

// const emails = [
//   "Test@Email.com",
//   "hello@site.com",
//   "test@email.com",
//   "HELLO@site.com",
//   "admin@site.com"
// ]

// // [
// //   "Test@Email.com",
// //   "hello@site.com",
// //   "admin@site.com"
// // ]

// const mapped = new Map()

// for(const email of emails){
//     const mail = email.toLocaleLowerCase()
//     if(!mapped.has(mail)){
//         mapped.set(mail,email)
//     }
// }

// const result = [...mapped.values()]

// console.log(result)

// •	key = country
// •	value = another Map of { city => population }

const cities = [
  { country: "LV", city: "Riga", pop: 600000 },
  { country: "LV", city: "Liepaja", pop: 70000 },
  { country: "NO", city: "Oslo", pop: 700000 }
]   

const mapp = new Map()

   for (const { country, city, pop } of cities) {
  let inner = mapp.get(country)

  if(!inner){
     inner = new Map()
     mapp.set(country, inner)
  }
   inner.set(city, pop)
}



// Map {
//   "LV" => Map {
//     "Riga" => 600000,
//     "Liepaja" => 70000
//   },
//   "NO" => Map {
//     "Oslo" => 700000
//   }
// }