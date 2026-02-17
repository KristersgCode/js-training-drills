type Profile = { id: number };
type UserNotification = { id: number };
type Settings = { id: number };

type Dashboard = {
  profile?: Profile;
  notifications?: UserNotification[];
  settings?: Settings;
};

//
// ---------------- FAKE APIs ----------------
//
function fetchProfile(id: string): Promise<Profile> {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ id: 1 }), Math.random() * 1500),
  );
}

function fetchNotifications(id: string): Promise<UserNotification[]> {
  return new Promise((resolve) =>
    setTimeout(() => resolve([{ id: 1 }]), Math.random() * 1500),
  );
}

function fetchSettings(id: string): Promise<Settings> {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ id: 1 }), Math.random() * 1500),
  );
}

//
// ---------------- TIMEOUT WRAPPER ----------------
//
async function fetchWithTimeout<T>(
  fn: () => Promise<T>,
  timeoutMs: number,
): Promise<T | null> {
  return Promise.race([
    fn(),
    new Promise<null>((resolve) => setTimeout(() => resolve(null), timeoutMs)),
  ]);
}

//
// ---------------- CACHE ----------------
//
const TTL = 10000;
const cache = new Map<string, { value: Dashboard; createdAt: number }>();

function saveToCache(key: string, value: Dashboard) {
  cache.set(key, { value, createdAt: Date.now() });
}

function getFromCache(key: string): Dashboard | null {
  const cached = cache.get(key);
  if (!cached) return null;

  if (Date.now() - cached.createdAt > TTL) {
    cache.delete(key);
    return null;
  }

  return cached.value;
}

//
// ---------------- MAIN FUNCTION ----------------
//
async function loadDashboard(userId: string): Promise<Dashboard> {
  const cacheKey = `dashboard:${userId}`;

  // 1️⃣ check cache
  const cached = getFromCache(cacheKey);
  if (cached) {
    console.log("cache hit");
    return cached;
  }

  console.log("cache miss → fetching");

  // 2️⃣ start all API calls in parallel
  const profilePromise = fetchWithTimeout(() => fetchProfile(userId), 1000);
  const notificationsPromise = fetchWithTimeout(
    () => fetchNotifications(userId),
    1000,
  );
  const settingsPromise = fetchWithTimeout(() => fetchSettings(userId), 1000);

  // 3️⃣ wait for results
  const [profile, notifications, settings] = await Promise.all([
    profilePromise,
    notificationsPromise,
    settingsPromise,
  ]);

  // 4️⃣ build result
  const dashboard: Dashboard = {};

  if (profile) dashboard.profile = profile;
  if (notifications) dashboard.notifications = notifications;
  if (settings) dashboard.settings = settings;

  // 5️⃣ save cache only if something succeeded
  if (Object.keys(dashboard).length > 0) {
    saveToCache(cacheKey, dashboard);
  }

  return dashboard;
}

//
// ---------------- TEST ----------------
//
loadDashboard("user1").then(console.log);
setTimeout(() => loadDashboard("user1").then(console.log), 2000);
