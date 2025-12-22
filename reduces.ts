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


const words = ["Apple", "banana", "APPLE", "pear", "Banana"];

// {
//   apple: 2,
//   banana: 2
// }

const result = words.reduce((acc, word) => {
    let normalize = word.toLowerCase()
    if(normalize.length >= 5)
        acc[normalize] = (acc[normalize] ?? 0) +1
        return acc
}, {})

console.log(result)


