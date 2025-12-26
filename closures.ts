// function createCounter(count) {

//   function inc() {
//     count++;
//     return count;
//   }

//   function get() {
//     return count;
//   }

//   return { inc, get };
// }

// const counter = createCounter(10);


// counter.inc(); // 11
// counter.inc(); // 12
// counter.get(); // 12


// const a = createCounter(0);
// const b = createCounter(100);

// console.log(a.inc())
// console.log(b.inc())

// function createToggle(){

//     let state = false
//     function toggle(){
//         state = !state
//         return state
//     }
//     return {toggle}
// }



// const toggle = createToggle();

// console.log(toggle.toggle()); // true
// console.log(toggle.toggle()); // false
// console.log(toggle.toggle()); // true

// function limitCalls(n, fn) {
//   return function () {
//     if (n > 0) {
//       n--;
//       return fn();
//     }
//     return null;
//   };
// }
 

// const onlyTwice = limitCalls(2, () => "hi");

// console.log(onlyTwice()); // "hi"
// console.log(onlyTwice()); // "hi"
// console.log(onlyTwice()); // null
// console.log(onlyTwice()); // null

// function withPrefix(prefix){
//   return function(message){
//       return `${prefix} ${message}` 
//   }
// }
  
// const logInfo = withPrefix("[INFO]");

// logInfo("Server started");
// // [INFO] Server started

// function createAdder(koef){
// return function(number){
//     return number +  number * koef
// }
// }

// const addVAT = createAdder(0.21);

// console.log(addVAT(100)); // 121
// console.log(addVAT(50));  // 60.5

// function buildHandlers(n){
//   const handlers =[]
//   for(let i = 0; i < n; i++){
//     handlers.push(() => i)
//   }
//   return handlers
// }

// const handlers = buildHandlers(3);

// console.log(handlers[0]()); // 0
// console.log(handlers[1]()); // 1
// console.log(handlers[2]()); // 2

// const loggers = createDelayedLoggers(["A", "B", "C"]);

// loggers[0](); // logs "A" after 100ms
// loggers[1](); // logs "B" after 200ms
// loggers[2](); // logs "C" after 300ms

// function createTrafficLight() {
//   let state = "red";
//   return function light() {
//     const current = state;
//     if (state === "red") {
//       state = "green";
//     } else if (state === "green") {
//       state = "yellow";
//     } else {
//       state = "red";
//     }
//     console.log("current", current)
//     return current;
//   };
// }


// const light = createTrafficLight();

// // No arrays returned
// // State must be private
// // Single returned function

// console.log(light()); // "red"
// console.log(light()); // "green"
// console.log(light()); // "yellow"
// console.log(light()); // "red"

// function once(fn) {
//   let didItRun = false;
//   return function() {
//     if (didItRun) return;
//     didItRun = true;
//     return fn();
//   }
// }

// const init = once(() => {
//   console.log("Initialized");
// });



// // Must remember if it already ran
// // No global flags

// init(); // logs
// init(); // does nothing

// function createStore() {
//   const data = {}; // Object to store all key-value pairs

//   function set(key, value) {
//     data[key] = value;
//   }

//   function get(key) {
//     return data[key];
//   }

//   return { set, get };
// }


// const store = createStore();

// // Internal data must not be directly accessible
// // Must use an object inside closure

// store.set("token", "abc");
// console.log(store.get("token")); // "abc"
// console.log(store.get("password")); // undefined

// function createSubscribe(){
//   return function unsub(){
    
//   }
// }

// const subscribe = createSubscribe();

// // Subscribers stored in closure
// // unsub must remove only its own callback

// const unsub = subscribe((msg) => console.log(msg));
// subscribe((msg) => console.log("Second:", msg));

// unsub();

// WED 17 DEC 18:19--------------------------------------------------

// function createCounterProcessor(){
//   let totalCalls = 0
//   return function(arr){
//     totalCalls++
//     const sum = arr.reduce((sum, number) =>  sum + number,0)
//     return {sum, calls: totalCalls}
//   }
// }

// const processNumbers = createCounterProcessor();

// console.log(processNumbers([1, 2, 3])); // { sum: 6, calls: 1 }
// console.log(processNumbers([5, 5]));    // { sum: 10, calls: 2 }

// function createGroupCounter(){
//   let totalCalls = 0
//   return function(arr){
//     totalCalls++
//     const group = arr.reduce((acc, element) => {
//       // console.log(group)
//       acc[element] = (acc[element] ?? 0) +1
//       return acc
//     }, {})
//     group.calls = totalCalls
//     return group
//   }
// }

// const groupCounter = createGroupCounter();

// console.log(groupCounter(["a", "b", "a"]));
// // { a: 2, b: 1, calls: 1 }

// console.log(groupCounter(["a", "c"]));
// // { a: 1, c: 1, calls: 2 }

// function createTransformer(fn){
//   return function(arr){
//     return arr.map(fn)
//   }
//   }

// const normalizeUsers = createTransformer(user => ({
//   ...user,
//   name: user.name.toLowerCase()
// }));

// normalizeUsers([
//   { name: "ALICE" },
//   { name: "BOB" }
// ]);
// [{ name: "alice" }, { name: "bob" }]

// function createFilteredTransformer(fn){
//   return function(arr){
//    return arr.filter(fn)
//   }
// } 

// const onlyAdults = createFilteredTransformer(u => u.age >= 18);

// console.log(
//   onlyAdults([
//     { age: 20 },
//     { age: 15 }
//   ])
// );
// // [{ age: 20 }]

// function createAnalytics() {
//   let counts = {}

//   function track(events) {
//     counts = events.reduce((acc, e) => {
//       acc[e] = (acc[e] ?? 0) + 1
//       return acc
//     }, counts)
//   }

//   function report() {
//     return { ...counts } // defensive copy
//   }

//   return { track, report }
// }

// const analytics = createAnalytics();

// analytics.track(["click", "scroll", "click"])
// analytics.track(["click"])

// console.log(analytics.report());
// // { click: 3, scroll: 1 }
// // { click: 3, scroll: 1 }

// function fetchUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("user data"), 1000)
//   })
// }

// function createRequestDeduper() {
//   const pending = new Map()

//   return function request(key, fn) {
//     // 1. If a request is already in flight → return same Promise
//     if (pending.has(key)) {
//       return pending.get(key)
//     }

//     // 2. Create the Promise ONCE
//     const promise = fn()
//       .finally(() => {
//         // 3. Cleanup after resolve or reject
//         pending.delete(key)
//       })

//     // 4. Store in-flight Promise
//     pending.set(key, promise)

//     return promise
//   }
// }

// const request = createRequestDeduper()

// const a = request("user:1", fetchUser)
// const b = request("user:1", fetchUser)

// console.log(a === b) // true

// a.then(console.log)
// b.then(console.log)

function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`user ${id}`), 1000)
  })
}

function createUserLoader(fn) {
  const pendingUser = new Map()

  return function loadUser(id) {
    if (pendingUser.has(id)) {
      return pendingUser.get(id)
    }

    const promise = fn(id).finally(() => {
      pendingUser.delete(id)
    })

    pendingUser.set(id, promise)
    return promise
  }
}


const loadUser = createUserLoader(fetchUser)

const a = loadUser(1)
const b = loadUser(1)

console.log(a === b) // true
