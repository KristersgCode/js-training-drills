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

const actions = [
  { type: "LOGIN" },
  { type: "ADD_ITEM", item: "book" },
  { type: "ADD_ITEM", item: "pen" },
  { type: "LOGOUT" },
  { type: "ADD_ITEM", item: "pencil" }
];
// Items added while logged out must be ignored
// {
//   isLoggedIn: false,
//   items: ["book", "pen"]
// }

const result = actions.reduce((acc, action) => {
        if(action.type === "LOGIN"){
            acc.isLoggedIn = true
        }
        
        if(action.type === "LOGOUT")
            {
                acc.isLoggedIn = false
        }

        if(action.type === "ADD_ITEM" && acc.isLoggedIn)
        {
            acc.items.push(action.item)
        }
        
        return acc
},{isLoggedIn: false, items: []})

console.log(result)

