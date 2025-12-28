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

function createListenerRegistry() {
  const events = new Map()

  function subscribe(event, fn) {

    if (!events.has(event)) {
      events.set(event, new Set())
    }

    const listeners = events.get(event)

    listeners.add(fn)

    return function unsubscribe() {

      listeners.delete(fn)

      if (listeners.size === 0) {
        events.delete(event)
      }

    }
  }

  function emit(event, data) {

    if (!events.has(event)) {
      return
    }

    const listeners = events.get(event)

    for (const fn of listeners) {
      fn(data)
    }
  }

  return { subscribe, emit }
}


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

function createInputSystem(){
    const inputs = new Map()
    
    function on(event, fnc){
        if(!inputs.has(event)){
            inputs.set(event, new Set())
        }

        let listeners = inputs.get(event)
        listeners.add(fnc)
        
        function unsubscribe(){
            listeners.delete(fnc)
            
            if(listeners.size === 0)
                {
                    inputs.delete(event)
                }

        }
        return unsubscribe
    }

    function trigger(event){
         if (!inputs.has(event)) {
            return
            } 
        const listeners = inputs.get(event)
        for(const fn of listeners){
           fn(event)
    }
}
return { on, trigger}

}

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

function createPriceWatcher(){
    const stocks = new Map()

    function subscribe(stock, fn){
        if(!stocks.has(stock)){
            stocks.set(stock, new Set())
        }

        const callbacks = stocks.get(stock)
        callbacks.add(fn)

        function unsubscribe(){
            callbacks.delete(fn)
            if(callbacks.size === 0){
                stocks.delete(stock)
            }
        }
        return unsubscribe
    }
            function update(stock, data){
            if(!stocks.has(stock)) {
                return
            }
            const callbacks = stocks.get(stock)
            for(const fn of callbacks){
                fn(data)
            }

    }
    return {subscribe, update}
}

// const watch = createPriceWatcher()

// function fn(data){
//     console.log("price: ", data)
// }

// const stop = watch.subscribe("AAPL", fn)
// watch.update("AAPL", 180)
// stop()
// watch.update("AAPL", 181)


function createResizeObserver(){
    const shapes = new Map()

    function observe(fn){
        if(!shapes.has("shape")){
            shapes.set("shape", new Set())
        }

            const listeners = shapes.get("shape")
            listeners.add(fn)

    function unsubscribe(){
        listeners.delete(fn)
        if(listeners.size === 0){
            shapes.delete("shape")
        }
    }
    return unsubscribe
    }

    function resize(size){
          if(!shapes.has("shape")) {
                return
            }
             const listeners = shapes.get("shape")
             console.log(listeners)
             for(const fn of listeners){
                fn(size)
             }
    }

    return {observe, resize}

}



const resize = createResizeObserver()

function fn(data){
    console.log("size changed: ", data)
}

const off = resize.observe(fn)
resize.resize({ w: 100, h: 100 })
off()
resize.resize({ w: 200, h: 200 })
