// function readFileMock(path, cb) {
//   setTimeout(() => {
//     if (!path.endsWith(".txt")) {
//       cb(new Error("Only .txt allowed"));
//     } else {
//       cb(null, `Content of ${path}`);
//     }
//   }, 300);
// }

// function readFileMockAsync(path) {
//   return new Promise((resolve, reject) => {
//     readFileMock(path, (err, result) => {
//       if (err) reject(err);
//       else resolve(result);
//     });
//   });
// }

// function wait300() {
//   // return Promise that resolves "ok" after 300ms
//   return new Promise(resolve => {
//     setTimeout(() => resolve("ok"), 300);
//   });
// }

// wait300().then(result => console.log(result))

// function getNumber(cb) {
//   setTimeout(() => cb(10), 200);
// }


// function getNumberAsync() {
//   return new Promise(resolve => {
//     getNumber(num => resolve(num));
//   })
// }

// getNumberAsync().then(x => console.log(x * 3));



// function wait300(){
//   return new Promise(resolve => {
//     setTimeout(() => resolve("ok"), 300)
//   })
// }

// async function demo() {
//   // wait 300ms using wait300
//   await wait300()
//   console.log("done")
//   // then log "done"
// }
// demo();

// function failAfter(ms) {

//   return new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error("ERROR")), ms)
//   })
//   // reject with new Error("failed") after ms
//   // Then handle it with try/catch.
// }

// async function test(){
//   try {
//     await failAfter(300)
//      console.log("this will NOT run");
//   }catch (err) {
//     console.log("Caught error:", err.message);
//   }
// }

// test()


// function wait(ms){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("done")
//     }, ms)
//   })
// }

// async function demo() {
//   const result = await wait(500);
//   console.log(result); // should print "done"
// }
// demo();

// function getNumber(){
//   return new Promise(resolve => {
//     setTimeout(() => resolve(42), 300);
//   })
// }

// async function run() {
//   const num = await getNumber();
//   console.log(num); // 42
// }
// run();

// function loadUser() {
//   return new Promise(resolve =>
//     setTimeout(() => resolve({ id: 1, name: "Kristers" }), 300)
//   );
// }

// async function showObj(){
//   const user = await loadUser()
//   console.log(user)
// }

// showObj()

// function failNow() {
//   // return a Promise that rejects with new Error("boom")
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(new Error("this is the error boom"))
//     },300)
//   })
// }

// async function getError(){
//   try{
//     await failNow()
//   } catch(err) {
//   console.log("error", err.message)
//   }
// }

// getError()


// function waitAndReturn(ms, value) {
//   // after ms, resolve with the provided value
//   return new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(value)
//     }, ms)
//   })
// }


// async function demo() {
//   const a = await waitAndReturn(300, "hello");
//   const b = await waitAndReturn(500, 123);
//   console.log(a, b); // "hello", 123
// }

// demo();

// function getUser(id, cb) {
//   setTimeout(() => {
//     if (id < 0) cb(new Error("Invalid id"));
//     else cb(null, { id, name: "User" + id });
//   }, 100);
// }

// function getUserP(id) {
//   return new Promise((resolve, reject) => {
// setTimeout(() => {
//     if (id < 0) reject(new Error("Invalid id"));
//     else resolve({ id, name: "User" + id });
//   }, 100);
//   })
// }

// Promise.all([1,2,3].map(getUserP))
// .then(users => {
//   const result = users.reduce((acc, user) => {
//        acc[user.id] = user.name;
//         return acc
//   },{})
//   console.log(result)
// })
// .catch(err => {
//   console.error("Failed to fetch users:", err.message)
// })

// Convert to getUserP(id) returning a Promise
// Fetch users [1,2,3]
// Transform result → { 1: "User1", 2: "User2", 3: "User3" }
// 🧪 Extra: Reject if any user fails

// function wait(ms, cb) {
//   setTimeout(() => cb(ms), ms);
// }

// function waitP(ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(ms))
//   })
// }

// waitP(100).then(v => console.log(v))

// function f() {
//   return Promise.resolve(5).then(x => x + 1);
// }

// async function f() {
//   const x = await Promise.resolve(5);
//   return x + 1;
// }

// const wait = ms => new Promise(r => setTimeout(r, ms));

// // async function run() {
// //   console.log("start");

// //   await wait(100);
// //   console.log("A");

// //   await wait(100);
// //   console.log("B");

// //   await wait(100);
// //   console.log("C");

// //   console.log("end");
// // }

// // run()

// async function runParallel() {
//    await Promise.all([wait(100).then(() => console.log("A")),
//     wait(100).then(() => console.log("B")),
//     wait(100).then(() => console.log("C"))])
// }

// runParallel()

// Promise.resolve(10).then(x => console.log(x));

// async function(){
//  return await console.log(x)
// }

// const api = {
//   users: [
//     { id: 1, name: "Alice", teamId: 10 },
//     { id: 2, name: "Bob", teamId: 20 },
//     { id: 3, name: "Charlie", teamId: 20 },
//     { id: 4, name: "Dave", teamId: 999 }

//   ],
//   teams: [
//     { id: 10, name: "Red" },
//     { id: 20, name: "Blue" }
//   ],
//   settings: { theme: "dark" }
// };

// function fetchUsers() {
//   return Promise.resolve(api.users);
// }

// function fetchTeams() {
//   return Promise.resolve(api.teams);
// }

// function fetchSettings() {
//   return Promise.resolve(api.settings);
// }

// // fetchUsers()
// //   .then(users => {
// //     return fetchTeams().then(teams => {
// //       return { users, teams };
// //     })
// // })
// //   .then(({ users, teams }) => {
// //     let counts = {};

// //     users.forEach(user => {
// //       const team = teams.find(t => t.id === user.teamId);
// //       const teamName = team ? team.name : "unknown";
// //       counts[teamName] = (counts[teamName] ?? 0) + 1;
// //     });

// //     Object.entries(counts).forEach(([team, count]) => {
// //       console.log(`${team}: ${count}`);
// //     });
// //   });

// // Red: 2
// // Blue: 1


// // Fetch users and settings and log:
// // dark theme has 3 users

// // fetchUsers().then((users) => {
// //     return fetchSettings().then((settings) => {
// //         return {users, settings}
// //     })
// // }).then(({users, settings}) => {
// //     console.log(settings.theme, " theme has ", Array.from(users).length, "users")
// // }
// // )

// // fetchUsers().then((users) => {
// //     return fetchTeams().then((teams) => {
// //         return {users, teams}
//     })
// }).then(({users, teams}) => {
//         users.forEach((user) => {
//             const team = teams.find((t) => t.id === user.teamId)
//             const teamName = team ? team.name : "unknown"
//             console.log(user.name, teamName)
//         })
// })

// fetchUsers()
//   .then(users => {
//     if (users.length === 0) {
//       console.log("no users");
//       return;
//     }

//     console.log(users);
//   });

// fetchUsers()
//   .then(users => {
//     return fetchTeams().then(teams => {
//       return { users, teams };
//     });
//   })
//   .then(({ users, teams }) => {
//     const hasRedUser = users.some(user => {
//       const team = teams.find(t => t.id === user.teamId);
//       return team?.name === "Red";
//     });

//     return hasRedUser;
//   })
//   .then(hasRedUser => {
//     if (hasRedUser) {
//       return fetchSettings().then(settings => {
//         console.log(settings);
//       });
//     } else {
//       console.log("settings skipped");
//     }
//   });

// Promise.all([fetchUsers(), fetchTeams()]).then((users) => {
//    return {users: users[0], teams: users[1]}
// }).then(({users, teams}) => {
//             users.forEach((user) => {
//                  const team = teams.find(t => t.id === user.teamId);
//                  const teamName = team?.name ?? "unknown"
//                  const userName = user.name
//                  console.log(userName, teamName)
//             })
// })

// Promise.resolve(5)
//   .then(x => {
//     if (x > 0) throw("bad");   
//     return x;
//   })
//   .catch(err => console.log("caught:", err));

  // Make a function:

// function validateName(name) {
//   return new Promise((resolve, reject) => {
//     if (name.length >= 3) {
//       resolve("ok");
//     } else {
//       reject(new Error("too short"));
//     }
//   });
// }
// validateName("Anna").then(console.log);   // ok
// validateName("A").catch(err => console.error(err.message));

// Write a chain that:
	// 1	Starts with Promise.resolve(10)
	// 2	In the 2nd .then, rejects with "err"
	// 3	.catch receives "err"
	// 4	Next .then prints "recovered"

  // Promise.resolve(10).then(() => Promise.reject(new Error("err"))).catch((err) => console.log(err.message)).then(()=> console.log("recovered"))
  
//   Create a function that resolves after N milliseconds with a given value.
// Input

// function delay(time, value){
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(value)
//       resolve(value)
//     }, time)
//   })
// }

// delay(500, "ok")

// Drill:Execute async functions one after another using a loop (not recursion).
// Input

// function delay(time, value){
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(value)
//     }, time)
//   })
// }

// const tasks = [
//   () => delay(300, 1),
//   () => delay(200, 2),
//   () => delay(100, 3),
// ]



// async function run(){
//   const results = []

//   for(const task of tasks){
//     results.push(await task())
//   }
//   return results
// }

// run().then(console.log)


// // [1, 2, 3]

// Drill:Run async functions at the same time and collect results.
// Input

// function delay(time, value){
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(value)
//     }, time)
//   })
// }

// const tasks = [
//   delay(300, "a"),
//   delay(100, "b"),
//   delay(200, "c"),
// ]

// const results = Promise.all(tasks).then((values) => {console.log(values)})

// ["a", "b", "c"]

// Drill:Implement your own asyncMap.
// Input

// function asyncMap(arr, asyncFn) {
//   return Promise.all(arr.map((item) => asyncFn(item)))
// }

// asyncMap([1, 2, 3], async (n) => n * 2).then(console.log)

// [2, 4, 6]


// Drill:Filter values using an async predicate.
// Input

// async function asyncFilter(arr, asyncFn){
//   const checks = await Promise.all(arr.map(asyncFn))
//   console.log(checks)
//    return arr.filter((_, index) => checks[index])
// }

// asyncFilter([1, 2, 3, 4], async (n) => n % 2 === 0).then(console.log)

// [2, 4]

// Drill:Implement reduce where reducer returns a Promise.
// Input

// async function asyncReduce(arr, asyncFn, initialValue) {
//   let acc = initialValue

//   for (const item of arr) {
//     acc = await asyncFn(acc, item)
//   }

//   return acc
// }

// asyncReduce([1, 2, 3], async (sum, n) => sum + n, 0)
// Expected

// 6

// async function asyncForEach(arr, asyncFn){

//   for(const element of arr){
//       await asyncFn(element)
//   }

// }

// async function delay(time){
//   return new Promise((resolve) => {
//   setTimeout(() => {resolve()}, time)
// })}

// asyncForEach([1, 2, 3], async (n) => {
//   await delay(100)
//   console.log(n)
// })

// Return the first element that matches an async predicate.

// async function asyncFind(arr, asyncFn) {
//   for (const element of arr) {
//     if (await asyncFn(element)) {
//       return element
//     }
//   }
//   return undefined
// }

// asyncFind([1, 2, 3, 4], async (n) => n > 2).then(console.log)
// // Expected


// Drill:Return true if any async predicate resolves to true.

// async function asyncSome(arr, asyncFn) {
//   for (const element of arr) {
//     if (await asyncFn(element)) {
//       return true
//     }
//   }
//   return false
// }

// asyncSome([1, 2, 3], async (n) => n === 2).then(console.log)

// true

// async function asyncMap(arr, asyncFn){
//   let output = []    

//       for(const number of arr){
//         const result = await asyncFn(number)
//          output.push(result)
//       }
//       return output
// }

// await asyncMap([1, 2, 3], async (n) => n * 2).then(console.log)

// [2, 4, 6]

// Goal: Filter with async predicate.

// async function asyncFilter(arr, asyncFn){
// let output = []

// for(const number of arr){
//   const shouldInclude = await asyncFn(number)
//   if(shouldInclude){
//     output.push(number)
//   }

// }

// return output
// }

// await asyncFilter([1, 2, 3, 4], async (n) => n % 2 === 0).then(console.log)

// [2, 4]

// Goal: Return true if ANY async predicate resolves to true.

// async function asyncSome(arr, asyncFn){
//   for(const number of arr){
//     const result = await asyncFn(number)
//     if(result){
//       return true
//     }
//   }
//   return false

// }

// await asyncSome([1, 2, 3], async (n) => n === 2).then(console.log)

//true

// Goal: Return first element that matches async predicate.

// async function asyncFind(arr, asyncFn){
//   for(const number of arr){
//     const result = await asyncFn(number)
//     if(result){
//       return number
//     }
//   }
//   return
// }


// await asyncFind([5, 6, 7], async (n) => n > 5).then(console.log)

// 6
	// •	Sequential
	// •	Stop immediately after match

  // Goal: Return true only if ALL predicates pass.

// async function asyncEvery(arr, asyncFn){
//   for(const num of arr){
//     const result = await asyncFn(num)
//     if(!result){
//      return false
//     }
//   }
//   return true
// }

// await asyncEvery([2, 4, 6], async (n) => n % 2 === 0).then(console.log)

// true

// Goal: Retry async function up to n times until it succeeds.

// let attempts = 0

// function fetchData(){
//   return new Promise((resolve, reject) => {
//     attempts++
//     console.log("attempt", attempts)
//     if(attempts < 3){
//     reject(new Error("fail"))
//     }
//     else {
//       resolve("DATA")
//     }
//   })
// }

// async function asyncRetry(fn, retries) {
//   let lastError

//   for(let attempt = 0; attempt < retries; attempt++){
//       try{
//         return await fn()
//       }
//       catch (err){
//         lastError = err
//       }
//   }

//   throw lastError
// }

// await asyncRetry(fetchData, 3).then(console.log)
// 	// •	Stop immediately on success
// 	// •	Throw last error if all fail
// 	// •	No recursion

// Goal: Reject promise if it takes longer than ms.

//  function fetchData(){
//   return new Promise((resolve, reject) => 
//     setTimeout(() => resolve("time"), 2000))
// }

// async function asyncTimeout(promise, time) {
//   let timeoutId

//   const timeoutPromise = new Promise((_, reject) => {
//     timeoutId = setTimeout(() => {
//       reject(new Error("Timeout"))
//     }, time)
//   })

//   try {
//     return await Promise.race([promise, timeoutPromise])
//   } finally {
//     clearTimeout(timeoutId)
//   }
// }



// await asyncTimeout(fetchData(), 1000)
// Rules
	// •	Must race promise vs timeout
	// •	Clean up timeout after resolve/reject
// ------------------------------------------------------------------
  
// •	Goal: Like asyncSome, but return the index of the first match.

    // async function asyncSomeWithIndex(letters, asyncFn){
    //   let count = -1
    //   for(const value of letters){
    //     const result = await asyncFn(value)
    //     count++
    //     if(result){
    //         return count
    //       }
    //     }
    //   return -1
    // }

		// await asyncSomeWithIndex(["a", "b", "c"], async (v) => v === "b").then(console.log)

		// 1
	// •	Sequential
	// •	Stop immediately
	// •	Return -1 if none match

  	// Goal: Return the resolved value from the async function, not the original item.

    // async function asyncFindValue(numbers, asyncFn){
    //   for(const number of numbers){
    //       const result = await asyncFn(number)
    //       if(result){
    //         return result
    //       }
    //     }
    //     return 
    // }
		
		// await asyncFindValue([1, 2, 3],async (n) => n === 2 ? "found" : null).then(console.log)
		
		// "found"
		// Stop on first truthy resolved value
		// Return undefined if nothing matches

		// Goal: Like asyncEvery, but return why it failed.
		
    // async function asyncEveryWithReason(numbers, asyncFn){

    //   //loop on every number
    //   // if function fails return it and quit
    //   // when all the loops end return true

    //   for(const number of numbers){
    //     const result = await asyncFn(number)
    //     if(result !== true){
    //       return result
    //     }
    //   }
    //   return true

    // }

		// await asyncEveryWithReason([2, 4, 5], async (n) => n % 2 === 0 ? true : "odd number").then(console.log)
		
		// "odd number"
		// Rules
		// Stop on first failure
		// Return true only if all pass

    //-------------------------------------------------------

    // Goal: Retry with a delay between attempts.

//   function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms))
// }


// async function asyncRetryWithDelay(fn, attempts, delayMs) {
//   let lastError

//   for (let attempt = 0; attempt < attempts; attempt++) {
//     try {
//       return await fn()
//     } catch (err) {
//       lastError = err

//       if (attempt < attempts - 1) {
//         await delay(delayMs)
//       }
//     }
//   }

//   throw lastError
// }



// function fetchData(){
//   return new Promise((resolve) => resolve("done"))
// }

// await asyncRetryWithDelay(fetchData, 3, 500).then(console.log)
 
// 	// Retry on rejection only
// 	// Wait delay ms between attempts
// 	// Stop immediately on success
// 	// Throw last error if all fail

// const num = 2

// function fetchData(){
//     return new Promise((resolve, reject) => {
//       if(num > 1){
//         resolve("resolved")
//       }
//       else {
//         reject(new Error("This is an error"))
//       }
//     })
// }


// async function asyncTryOnce(fn){
//   try {
//     return await fn()
//   }
//   catch (error) {
//     console.log("caught:", error.message)
//     throw error // optional: rethrow if caller should know
//   }
// }

// await asyncTryOnce(fetchData).then(console.log)

//----------------------------------------------------------------------------

// Goal: Return fallback value on failure.

// let num = 1

// function fetchData(){
//   return new Promise((resolve,reject) => {
//     if(num > 1){
//       resolve("resolved")
//     }
//     else {
//       reject(new Error("error thrown"))
//     }
//   })
// }

// async function asyncTryDefault(fn, msg){

//   try{
//    return await fn()
//   }
//   catch (error){
//     console.log(error.message, msg)
//     return msg
//   }
// }

// await asyncTryDefault(fetchData, "fallback")
 
// Goal: Convert async success/failure into boolean.

// const num = 1

// function fetchData(){
//   return new Promise((resolve, reject) => {
//     if(num > 1){
//       resolve(true)
//     }
//     else {
//       reject(false)
//     }
//   })
// }

// async function asyncTryBoolean(fn){
//   try {
//       return await fn()
//   }
//   catch (e){
//     return e
//   }
// }

// await asyncTryBoolean(fetchData).then(console.log)
// 	// •	Resolve → true
// 	// •	Reject → false
// 	// •	No throwing outside

// Goal: Log error but still throw it.


// const num = 1

// function fetchData(){
//   return new Promise((resolve, reject) => {
//     if(num > 1){
//       resolve("resolved")
//     }
//     else {
//       reject(new Error("err"))
//     }
//   })
// }

// async function asyncTryLog(fn){
//     try {
//         return await fn()
//     }
//     catch (e) {
//       console.log(e)
//       throw e
//     }
// }

// await asyncTryLog(fetchData)
	// •	Catch error
	// •	console.log it
	// •	Re-throw the same error

  // Goal: Ignore errors completely.

//   const num = 1

// function fetchData(){
//   return new Promise((resolve, reject) => {
//     if(num > 1){
//       resolve("resolved")
//     }
//     else {
//       reject(new Error("err"))
//     }
//   })
// }

// async function asyncTrySilent(fn){
//   try {
//    await fn()
//   }
//   catch {

//   }
// }

// await asyncTrySilent(fetchData)
	// •	Try once
	// •	Ignore rejection
	// •	Always resolve with undefined


  // Goal: Try at most 2 times.

// const num = 12

// function fetchData(){
//   return new Promise((resolve, reject) => {
//     if(num > 1){
//       resolve("resolved")
//     }
//     else {
//       reject(new Error("err"))
//     }
//   })
// }

// async function asyncTryTwice(fn) {
//   for (let attempt = 1; attempt <= 2; attempt++) {
//     try {
//       return await fn()
//     } catch (e) {
//       console.log(e)
//       if (attempt === 2) throw e
//     }
//   }
// }

// await asyncTryTwice(fetchData).then(console.log)
	// •	First failure → retry once
	// •	Second failure → throw
	// •	Stop immediately on success
