export {};

const TTL = 5000; // 5 seconds
const cache = new Map();

function set(key: string, value: number) {
  cache.set(key, { value, createdAt: Date.now() });
}

function get(key: string) {
  const cached = cache.get(key);
  if (!cached) {
    return null;
  }
  if (Date.now() - cached.createdAt >= TTL) {
    cache.delete(key);
    return null;
  } else {
    return cached.value;
  }
}

set("a", 123);

console.log("Immediate:", get("a"));

setTimeout(() => {
  console.log("After 6 seconds:", get("a"));
}, 6000);
