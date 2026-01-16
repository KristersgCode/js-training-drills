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

// function fetchUser(id) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(`user ${id}`), 1000)
//   })
// }

// function createUserLoader(fn) {
//   const pendingUser = new Map()

//   return function loadUser(id) {
//     if (pendingUser.has(id)) {
//       return pendingUser.get(id)
//     }

//     const promise = fn(id).finally(() => {
//       pendingUser.delete(id)
//     })

//     pendingUser.set(id, promise)
//     return promise
//   }
// }


// const loadUser = createUserLoader(fetchUser)

// const a = loadUser(1)
// const b = loadUser(1)

// console.log(a === b) // true


// function saveForm(){
//   return new Promise((resolve) => {setTimeout(() => resolve("saved"), 1000)})
// }

// function createClickGuard(){
//   const actions = new Map()

//   return function guard(action, fn){
//     //returns if action already exists
//     if(actions.has(action)){
//       return actions.get(action)
//     }

//     //finallyze the fn and delete the action
//    const promise = fn().finally(() => {
//       actions.delete(action)
//     })

//     actions.set(action, promise)
//     return promise
//   }
// }

// const guard = createClickGuard()

// guard("save", saveForm)
// guard("save", saveForm)


// function sendEmail() {
//   console.log("email sent")
// }


// function createCooldown(ms) {
//   const cooldown = new Map()

//   return function run(key, fn) {
//     if (cooldown.has(key)) {
//       return // blocked
//     }

//     fn()

//     cooldown.set(key, true)

//     setTimeout(() => {
//       cooldown.delete(key)
//     }, ms)
//   }
// }

// const run = createCooldown(1000)

// run("email", sendEmail)
// run("email", sendEmail) // blocked

// function uploadFn(){
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("resolved"), 1000)
//   })
// }

// const fileA = "file"

// function createUploadManager(fn){
  
//   const keys = new Map()

//   return function upload(file){
//     if(keys.has(file)){
//       return keys.get(file)
//     }

//     const promise = fn(file).finally(() => {
//       keys.delete(file)
//     })

//     keys.set(file, promise)
//     return promise
//   }
// }


// const upload = createUploadManager(uploadFn)

// console.log(upload(fileA))
// console.log(upload(fileA))

// function createListenerRegistry() {
//   const events = new Map()

//   function subscribe(event, fn) {
//     if (!events.has(event)) {
//       events.set(event, new Set())
//     }

//     const listeners = events.get(event)
//     listeners.add(fn)

//     // unsubscribe function
//     return function unsubscribe() {
//       listeners.delete(fn)

//       // cleanup to avoid memory leak
//       if (listeners.size === 0) {
//         events.delete(event)
//       }
//     }
//   }

//   function emit(event, data) {
//     if (!events.has(event)) return

//     for (const fn of events.get(event)) {
//       fn(data)
//     }
//   }

//   return { subscribe, emit }
// }

// const registry = createListenerRegistry()

// const unsubscribe = registry.subscribe("shoot", (data) => {
//   console.log("shot fired:", data)
// })

// registry.emit("shoot", { power: 10 })

// unsubscribe()

// registry.emit("shoot", { power: 20 }) // nothing happens

// function createListenerRegistry() {
//   const events = new Map()

//   function subscribe(event, fn) {

//     if (!events.has(event)) {
//       events.set(event, new Set())
//     }

//     const listeners = events.get(event)

//     listeners.add(fn)

//     return function unsubscribe() {

//       listeners.delete(fn)

//       if (listeners.size === 0) {
//         events.delete(event)
//       }

//     }
//   }

//   function emit(event, data) {

//     if (!events.has(event)) {
//       return
//     }

//     const listeners = events.get(event)

//     for (const fn of listeners) {
//       fn(data)
//     }
//   }

//   return { subscribe, emit }
// }


// function func(data) {
//   console.log("shoot event:", data)
// }

// const registry = createListenerRegistry()

// const unsub = registry.subscribe("shoot", func)

// registry.emit("shoot", 1)
// // shoot event: 1

// unsub()

// registry.emit("shoot", 2)
// nothing happens

// “When I subscribe, I store a function under an event name.
// When I emit, I call all stored functions for that event.
// When I unsubscribe, I remove that function.”

// function createChatRoom(){
//     const chat = new Map()
    
//     function join(user, fn){
//         if(!chat.has(user)){
//             chat.set(user, new Set())
//         }

//         let listeners = chat.get(user)
//         listeners.add(fn)

//         function unsubscribe(){
//             listeners.delete(fn)

//             if(listeners.size === 0){
//                 chat.delete(user)
//             }
//         }
//         return unsubscribe

        
//     }
//     function message(msg){
//         // console.log(chat)
      

//         for(const [_, value] of chat)
//         {
//            for(const v of value){
//             v(msg)
//            }
//         }

//     }
//     return {join, message}
// }

// const room = createChatRoom()

// function fnA(message){
//     console.log("alice: " + message)
// }

// function fnB(message){
//     console.log("bob: " + message)
// }

// const unsubA = room.join("alice", fnA)
// const unsubB = room.join("bob", fnB)

// room.message("hello")

// unsubA()
// room.message("bye")

// function createInputSystem(){
//     const inputs = new Map()
    
//     function on(event, fnc){
//         if(!inputs.has(event)){
//             inputs.set(event, new Set())
//         }

//         let listeners = inputs.get(event)
//         listeners.add(fnc)
        
//         function unsubscribe(){
//             listeners.delete(fnc)
            
//             if(listeners.size === 0)
//                 {
//                     inputs.delete(event)
//                 }

//         }
//         return unsubscribe
//     }

//     function trigger(event){
//          if (!inputs.has(event)) {
//             return
//             } 
//         const listeners = inputs.get(event)
//         for(const fn of listeners){
//            fn(event)
//     }
// }
// return { on, trigger}

// }

// const input = createInputSystem()

// function fn(input){
//     console.log("input triggered: ", input)
// }

// const off = input.on("jump", fn)
// const off2 = input.on("run", fn)
// input.trigger("jump")
// off()
// input.trigger("run")
// off2()

// function createPriceWatcher(){
//     const stocks = new Map()

//     function subscribe(stock, fn){
//         if(!stocks.has(stock)){
//             stocks.set(stock, new Set())
//         }

//         const callbacks = stocks.get(stock)
//         callbacks.add(fn)

//         function unsubscribe(){
//             callbacks.delete(fn)
//             if(callbacks.size === 0){
//                 stocks.delete(stock)
//             }
//         }
//         return unsubscribe
//     }
//             function update(stock, data){
//             if(!stocks.has(stock)) {
//                 return
//             }
//             const callbacks = stocks.get(stock)
//             for(const fn of callbacks){
//                 fn(data)
//             }

//     }
//     return {subscribe, update}
// }

// const watch = createPriceWatcher()

// function fn(data){
//     console.log("price: ", data)
// }

// const stop = watch.subscribe("AAPL", fn)
// watch.update("AAPL", 180)
// stop()
// watch.update("AAPL", 181)


// function createResizeObserver(){
//     const shapes = new Map()

//     function observe(fn){
//         if(!shapes.has("shape")){
//             shapes.set("shape", new Set())
//         }

//             const listeners = shapes.get("shape")
//             listeners.add(fn)

//     function unsubscribe(){
//         listeners.delete(fn)
//         if(listeners.size === 0){
//             shapes.delete("shape")
//         }
//     }
//     return unsubscribe
//     }

//     function resize(size){
//           if(!shapes.has("shape")) {
//                 return
//             }
//              const listeners = shapes.get("shape")
//              console.log(listeners)
//              for(const fn of listeners){
//                 fn(size)
//              }
//     }

//     return {observe, resize}

// }



// const resize = createResizeObserver()

// function fn(data){
//     console.log("size changed: ", data)
// }

// const off = resize.observe(fn)
// resize.resize({ w: 100, h: 100 })
// off()
// resize.resize({ w: 200, h: 200 })

// function createCounter(initialValue){
    
//     let count = initialValue

//     function inc(){
//        return count++        
//     }

//     function dec(){
//        return count--
//     }

//     function get(){
//         console.log(count)
//         return count
//     }

//     return {inc, dec, get}
// }


// const initialValue = 3

// createCounter(initialValue)

// const a = createCounter(0)
// a.inc()
// a.inc()
// a.get() // 2

// const b = createCounter(10)
// b.dec()
// b.get() // 9

// Goal: Closures for configuration binding.
// Task:Create createLogger(prefix) that returns a log(message) function.
// Rules:
	// •	prefix is captured via closure
	// •	Logger must work even if called later or passed around
// Example:

// function createLogger(prefix){
//     return function authLog(msg){
//         console.log(prefix, msg)
//         return `${prefix} ${msg}`
//     }
// }

// const authLog = createLogger("[AUTH]")
// authLog("login success")
// // [AUTH] login success
//--------------------------------------------------------------------------

// Goal: Prevent repeated execution (very common in production).
// Task:Create once(fn) that:
// 	•	Runs fn only once
// 	•	Subsequent calls return the first result
// 	•	Uses closure to track state
// Example:

// const init = once(() => {
//   console.log("init")
//   return 42
// })

// function once(fn) {
//   let called = false
//   let result

//   return function () {
//     if (!called) {
//       result = fn()
//       called = true
//     }
//     return result
//   }
// }

// init() // logs "init", returns 42
// init() // returns 42, no log
// ---------------------------------------------------------------------------

// 🟡 Drill 4 — Event Listener with Unsubscribe
// Goal: Closure + resource cleanup.
// Task:Create createEmitter() with:
// 	•	subscribe(fn) → returns unsubscribe
// 	•	emit(value)
// Rules:
// 	•	unsubscribe must remove only its own listener
// 	•	No global variables
// Example:

// function createEmitter(){
//     const listeners = new Set()

//   function subscribe(fn) {
//     listeners.add(fn)
//     console.log(listeners)

//     return function unsubscribe() {
//       listeners.delete(fn)
//     }
//   }

//     function emit(value) {
//         for (const listener of listeners) {
//         listener(value)
//   }
// }
//     return {subscribe, emit}

// }

// const emitter = createEmitter()

// const unsub = emitter.subscribe(v => console.log(v))
// emitter.emit(1) // logs 1

// unsub()
// emitter.emit(2) // nothing

// 🟡 Drill 5 — Memoized Expensive Function
// Goal: Cache results using closure.
// Task:Create memoize(fn) that:
// 	•	Caches results by argument
// 	•	Returns cached value on repeat calls
// 	•	Cache must be private
// Example:

// const slowSquare = memoize(n => {
//   console.log("computing")
//   return n * n
// })


// function memoize(fn) {
//   const cache = new Map()

//   return function (arg) {
//     if (cache.has(arg)) {
//       return cache.get(arg)
//     }

//     const result = fn(arg)
//     cache.set(arg, result)
//     return result
//   }
// }


// slowSquare(4) // computing → 16
// slowSquare(4) // 16 (no log)

// Goal: Cache by single primitive argument.
// Task:Implement memoize(fn) so that:
// 	•	Same number → computed once
// 	•	Different numbers → cached separately
// Input / Output:

// const square = memoize(n => n * n)

// function memoize(fn){
//     let cache = new Map()
//     return function (arg){
//         if(cache.has(arg)){
//             return cache.get(arg)
//         }

//         const result = fn(arg)
//         cache.set(arg, result)
//         console.log(cache)
//         return result
//     }
// }

// square(2) // computes
// square(2) // cached
// square(3) // computes

// Goal: Cache expensive string processing.
// Task:Memoize a function that:
// 	•	Takes a string
// 	•	Returns number of vowels
// Input / Output:

// const countVowels = memoize(string => {
//     const vowels = ["a", "e", "i", "o", "u"]

//     let count = 0
//     for(const str of string){
//             if(vowels.includes(str)){
//                 count++
//         }
//     }
//         return count
// })

// function memoize(fn){
//     let cache = new Map()

//     return function (str){
//         if(cache.has(str)){
//             return cache.get(str)
//         }

//         const result = fn(str)
//         cache.set(str, result)
//         console.log(result)
//         return result
//     }

// }

// countVowels("hello") // computes
// countVowels("hello") // cached
// countVowels("world") // computes

// Goal: Ensure correct caching of falsy values.
// Task:Memoize a function that returns true or false.
// ⚠️ Must correctly cache false.
// Input / Output:


// const isEven = memoize(n => {
//     return n % 2 === 0
// })

// function memoize(fn){
//     let cache = new Map()
//     return function (arg){
//         if(cache.has(arg)){
//             return cache.get(arg)
//         }

//          const result = fn(arg)
//          cache.set(arg, result)
//          console.log(result)
//          console.log(cache)
//          return result
//     }
// }


// isEven(3) // computes → false
// isEven(3) // cached → false

// function createCounter(){
//   let count = 0

//   function inc(){
//     count++
//     return count
//   }
  
//   function dec(){
//     count--
//     return count
//   }
  
//   function peek(){
//     console.log(count)
//     return count
//   }
  
//   function reset(){
//     count = 0
//     return count
//   }

//   return {inc, dec, peek, reset}

  

// }

// const counter = createCounter()

// counter.inc()
// counter.inc()
// counter.dec()

// counter.peek() // 1

// counter.reset()
// counter.peek() // 0


// Wrap a function so it can only run once.
// Requirements:
	// •	First call → runs original function
	// •	Subsequent calls → return cached result
	// •	Original function must never run again

// function once(fn) {
//   let didItRun = false
//   let result

//   return function () {
//     if (!didItRun) {
//       result = fn()
//       didItRun = true
//     }

//     return result
//   }
// }


// const init = once(() => {
//   console.log("initialized")
//   return 42
// })

// init() // logs "initialized", returns 42
// init() // returns 42
// init() // returns 42

// Goal:Create a tiny in-memory store with access control via closure.

// function createStore(){

//   let store = new Map()

//   function set(key, value){
//     store.set(key, value)
//   }

//   function get(key){
//     return store.get(key)
//   }

//   function has(key){
//       return store.has(key)
//   }

//   return {set,get,has}
// }

// const store = createStore()

// store.set("token", "abc123")
// store.get("token") // "abc123"
// store.has("token") // true
// store.get("missing") // undefined

// Goal:Limit how many times a function can be called.

// function limit(fn, number){
//   let limitCount = 0
//   let result 
//   return function(){
//     if(limitCount < number){
//       result = fn()
//       limitCount++
//     }

//     else {
//       console.log("LIMIT_REACHED")
//       return "LIMIT_REACHED"
//     }
//     return result
//   }
// }

// const limited = limit(() => console.log("ok"), 2)

// limited() // "ok"
// limited() // "ok"
// limited() // "LIMIT_REACHED"
// limited() // "LIMIT_REACHED"

// Model a simple multi-step process.
// Requirements:
	// •	Steps: "idle" → "loading" → "success"
	// •	Expose:
	// ◦	next()
	// ◦	status()
	// •	Calling next() at "success" keeps it "success"

//   function createFlow(){
//     let state = "idle"

//     function status(){
//       return state
//     }

//     function next(){
//       if(state === "idle"){
//         state = "loading"
//       }
//       else if(state === "loading"){
//         state = "success"
//       }
//       return state
//     }

//     return { status, next}
    
//   }

// const flow = createFlow()

// flow.status() // "idle"
// flow.next()
// flow.status() // "loading"
// flow.next()
// flow.status() // "success"
// flow.next()
// flow.status() // "success"

// -----------------------------------------------------------
// Goal:Generate unique incremental IDs.
// Requirements:
	// •	IDs start at 1
	// •	Each call increments
	// •	No global counter
// Expected behavior:

// function createIdGenerator(){
//   let id = 0
//   return function (){
//       id++
//       return id
//   }
// }

// const gen = createIdGenerator()

// console.log(gen()) // 1
// console.log(gen()) // 2
// console.log(gen()) // 3


// Goal:Track inputs and outputs of a function.
	// •	Wrap a function
	// •	Store { input, output } history
	// •	Expose:
	// ◦	wrapped function
	// ◦	getHistory()

// function withHistory(fnc) {
//   let history = []
  
//   function fn(input) {
//     let output 
//     output = fnc(input)
//     history.push({input, output})
//     return output
//   }

//   function getHistory() {
//     return [...history]
//   }

//   return { fn, getHistory }
// }

// const { fn, getHistory } = withHistory(n => n * 2)

// console.log(fn(2))
// console.log(fn(4))

// console.log(getHistory())

// function createToggle(bool){
//   let initialValue = bool

//   return function toggle(){
//      return initialValue = !initialValue
//   }
// }

// const toggle = createToggle(false)

// console.log(toggle()) // true
// console.log(toggle()) // false
// console.log(toggle()) // true

// Goal:Wrap a function and track how many times it has been called.
	// •	Wrapped function behaves like the original
	// •	Call count persists via closure
	// •	Expose getCount() to read the count

//   function createCallCounter(fnc) {
//   let callCount = 0

//   function wrapped(number) {
//     callCount++
//     return fnc(number)
//   }

//   wrapped.getCount = function () {
//     return callCount
//   }

//   return wrapped
// }

// const wrapped = createCallCounter(x => x * 2)

// console.log(wrapped(2)) // 4
// console.log(wrapped(3)) // 6
// console.log(wrapped.getCount()) // 2

// Allow a function to run once per unique key.

// function createOncePerKey(fn){
//   let keys = new Map()

//   return function runOnce(key, msg){
//     if(!keys.has(key)){
//       keys.set(key, true)
//     }
//     else {
//       return
//     }
//     return fn(msg)
//   }

// }

// const runOnce = createOncePerKey(msg => msg)

// console.log(runOnce("a", "hello")) // "hello"
// console.log(runOnce("a", "hello")) // undefined
// console.log(runOnce("b", "hi"))    // "hi"

// Goal:Create a function that validates whether a number is within a range.
	// •	Inclusive range
	// •	Return true if valid, otherwise false
	// •	No global state

// function createRangeLimiter(n1, n2){
//   return function (number){
//     if(number >= n1 && number <= n2)
//         {
//           return true
//         }
//         return false
//   }
// }

// const limit = createRangeLimiter(10, 20)

// console.log(limit(5))   // false
// console.log(limit(15))  // true
// console.log(limit(25))  // false

// function createCounter(num, step){
// 	let result = num - step
// 	return function(){
// 		result += step
// 		return result
// 	}
// }

// const counter = createCounter(10, 2)

// console.log(counter()) // 10
// console.log(counter()) // 12
// console.log(counter()) // 14

// Create limitCalls(fn, max).

// function limitCalls(fn, limit){
// 	let count = limit
// 	return function(){
// 		if(count > 0){
// 			count--
// 			return fn()
// 		}
// 	}
// }

// const limited = limitCalls(() => "run", 2)

// console.log(limited()) // "run"
// console.log(limited()) // "run"
// console.log(limited()) // undefined
// console.log(limited()) // undefined

// Create oncePerKey(fn).

// function oncePerKey(fn) {
//   const seen = new Map()

//   return function (key, ...args) {
//     if (seen.has(key)) return

//     seen.set(key, true)
//     return fn(...args)
//   }
// }

// const logOnce = oncePerKey((msg) => msg)

// console.log(logOnce("a", "hello")) // "hello"
// console.log(logOnce("a", "world")) // undefined
// console.log(logOnce("b", "again")) // "again"
// console.log(logOnce("b", "more"))  // undefined


// function createToggle(boolean){
// 	let light = boolean
// 	return function(){
// 		light = !light
// 		return light
// 	}
// }

// const toggle = createToggle(false)

// console.log(toggle()) // true
// console.log(toggle()) // false
// console.log(toggle()) // true
// console.log(toggle()) // false


// function memo(fn) {
//   const cache = new Map()

//   return function (value) {
//     if (cache.has(value)) {
//       return cache.get(value)
//     }

//     const result = fn(value)
//     cache.set(value, result)
//     return result
//   }
// }

// const slow = (n) => {
//   console.log("compute", n)
//   return n * 2
// }

// const fast = memo(slow)

// console.log(fast(2)) // logs "compute 2", returns 4
// console.log(fast(2)) // returns 4 (no log)
// console.log(fast(3)) // logs "compute 3", returns 6
// console.log(fast(3)) // returns 6 (cached)

// Create delayOnce(fn, ms).

// function delayOnce(fn, ms){

// 	let called = false

// 	return function(){
// 		if(!called) {
// 			called = true
// 		setTimeout(() => {
// 			fn()
// 		}, ms)
// 	}}
// }

// const delayed = delayOnce(() => {
//   console.log("run")
// }, 1000)

// console.log("call 1")
// delayed()

// console.log("call 2")
// delayed()

// console.log("call 3")
// delayed()

// // after 1s → logs "run" once

// Create createAverager().

// function createAverager(){

//   let sum = 0
//   let count = 0


// return function(number){
// 	sum += number
// 	count++
// 	return sum / count
// 	}
// }

// const avg = createAverager()

// console.log(avg(10)) // 10
// console.log(avg(20)) // 15
// console.log(avg(30)) // 20
// console.log(avg(40)) // 25

// function createCounter(num, step){
// 	let result = num - step 
	
// 	 function counter(){
// 		 return result += step
// 	}

// 	counter.reset = function () {
// 		result = num - step
// 	}
	
// 	return counter

// }

// const counter = createCounter(10, 2)

// console.log(counter()) // 10
// console.log(counter()) // 12
// counter.reset()
// console.log(counter()) // 10

// Create countCalls(fn).
	// •	Returns a wrapped function
	// •	Wrapped function has .count() method

// function countCalls(fn){
// 	let count = 0
// 	function wrapped(...args){
// 		count++
// 		return fn(...args)
// 	}

// 	wrapped.count = function (){
// 		return count
// 	}

// 	return wrapped
// }

// const wrapped = countCalls(() => "run")

// wrapped()
// wrapped()
// console.log(wrapped.count()) // 2

// Create once(fn).
	// •	fn runs only once
	// •	Later calls return the same result

// function once(fn){
// 	let didItCall = false
// 	let result
// 	return function(){
// 		if(!didItCall){
// 			didItCall = true
// 			result = fn()
// 		}
// 		return result
// 	}

// }

// const init = once(() => Math.random())

// console.log(init())
// console.log(init())
// console.log(init()) // all same value


// Create limitEvery(fn, n).
	// •	fn runs only every nth call

// function limitEvery(fn, startAt){
// 	let count = 0
// 	return function(){
// 		count++
// 		if(count === startAt){
// 			count = 0
// 			return fn()
// 		}
// 		return
// 	}
// }

// const limited = limitEvery(() => "run", 3)

// console.log(limited()) // undefined
// console.log(limited()) // undefined
// console.log(limited()) // "run"
// console.log(limited()) // undefined
// console.log(limited()) // undefined
// console.log(limited()) // "run"

// Create withHistory(fn).
	// •	Wraps a function
	// •	Exposes .history() (returns past results)

// function withHistory(fn) {
//   const history = []

//   function wrapped(...args) {
//     const result = fn(...args)
//     history.push(result)
//     return result
//   }

//   wrapped.history = function () {
//     return history.slice() // protect internal state
//   }

//   return wrapped
// }

// const doubled = withHistory(n => n * 2)

// console.log(doubled(2)) // 4
// console.log(doubled(3)) // 6
// console.log(doubled(4)) // 8

// console.log(doubled.history()) // [4, 6, 8]


// Task:Create debounce(fn, ms).
	// •	Only last call runs
	// •	Earlier scheduled calls are cancelled

// function debounce(fn, time){
// 	let timerId

// return function() {
// 	clearTimeout(timerId)

// 		timerId = setTimeout(() => {
// 			fn()
// 		}, time)
	
// }
// }

// const debounced = debounce(() => console.log("run"), 500)

// debounced()
// debounced()
// debounced()
// after 500ms → "run" once

// Create createKeyCounter().

// function createKeyCounter(){
// 	const keys = new Map()
// 	return function(key){
// 				keys.set(key, (keys.get(key) ?? 0) + 1)
// 			return keys.get(key)
// 	}
// }

// const count = createKeyCounter()

// console.log(count("a")) // 1
// console.log(count("a")) // 2
// console.log(count("b")) // 1
// console.log(count("a")) // 3

// Create cacheWithTTL(fn, ms).
	// •	Cache result
	// •	Expire after ms

// function cacheWithTTL(fn, time) {
//   const cache = new Map()

//   return function (key) {
//     if (cache.has(key)) {
//       return cache.get(key)
//     }

//     const result = fn(key)
//     cache.set(key, result)

//     setTimeout(() => {
//       cache.delete(key)
//     }, time)

//     return result
//   }
// }


// const cached = cacheWithTTL(n => {
//   console.log("compute", n)
//   return n * 2
// }, 1000)

// cached(2) // compute
// cached(2) // cached
// // after 1s
// cached(2) // compute again
