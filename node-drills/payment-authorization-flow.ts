export {};

const fakeDB: Record<number, number> = {
  1: 300,
  2: 120,
};

async function processPayment(
  userId: number,
  amount: number,
): Promise<{ ok: boolean }> {
  let reservationId = "";
  let balance = 0;

  console.log("[processPayment] start checkBalance");

  // STEP 1 — CHECK BALANCE
  try {
    balance = await withTimeout(() => checkBalance(userId), 1000);
  } catch (e) {
    logError("checkBalance failed", e);

    console.log("[processPayment] retry checkBalance");
    try {
      balance = await withTimeout(() => checkBalance(userId), 1000);
    } catch (e) {
      logError("checkBalance retry failed", e);
      return { ok: false };
    }
  }

  if (balance < amount) {
    console.log("[processPayment] insufficient funds");
    return { ok: false };
  }

  console.log("[processPayment] start reserveMoney");

  // STEP 2 — RESERVE MONEY
  try {
    reservationId = await withTimeout(() => reserveMoney(userId, amount), 1000);
  } catch (e) {
    logError("reserveMoney failed", e);

    console.log("[processPayment] retry reserveMoney");
    try {
      reservationId = await withTimeout(
        () => reserveMoney(userId, amount),
        1000,
      );
    } catch (e) {
      logError("reserveMoney retry failed", e);
      return { ok: false };
    }
  }

  console.log("[processPayment] start confirmPayment");

  // STEP 3 — CONFIRM PAYMENT
  try {
    await withTimeout(() => confirmPayment(reservationId), 1000);
    console.log("[processPayment] payment success");
    return { ok: true };
  } catch (e) {
    logError("confirmPayment failed", e);

    console.log("[processPayment] retry confirmPayment");
    try {
      await withTimeout(() => confirmPayment(reservationId), 1000);
      console.log("[processPayment] payment success");
      return { ok: true };
    } catch (e) {
      logError("confirmPayment retry failed", e);

      console.log("[processPayment] cancelling reservation");
      await cancelReservation(reservationId);

      return { ok: false };
    }
  }
}

//
// ---------------- TIMEOUT ----------------
//
async function withTimeout<T>(fn: () => Promise<T>, ms: number): Promise<T> {
  return Promise.race([
    fn(),
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error("Timeout")), ms),
    ),
  ]);
}

//
// ---------------- ERROR LOGGING ----------------
//
function logError(context: string, e: unknown) {
  if (e instanceof Error) {
    console.error(`[ERROR] ${context}:`, e.message);
  } else {
    console.error(`[ERROR] ${context}:`, e);
  }
}

//
// ---------------- FAKE APIs ----------------
//
function checkBalance(userId: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const balance = fakeDB[userId];
      if (balance !== undefined) {
        console.log("checking user balance:", balance);
        resolve(balance);
      } else {
        reject(new Error("User not found"));
      }
    }, Math.random() * 1500);
  });
}

function reserveMoney(userId: number, amount: number): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const balance = fakeDB[userId];
      if (balance !== undefined && amount <= balance) {
        console.log("reserving money:", amount);
        resolve("reservation-" + Math.random().toString(36).slice(2));
      } else {
        reject(new Error("Reserve failed"));
      }
    }, Math.random() * 1500);
  });
}

function confirmPayment(reservationId: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (reservationId) {
        console.log("confirming payment:", reservationId);
        resolve(true);
      } else {
        reject(new Error("Confirm failed"));
      }
    }, Math.random() * 1500);
  });
}

function cancelReservation(reservationId: string): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("reservation cancelled:", reservationId);
      resolve();
    }, 300);
  });
}

processPayment(1, 250).then(console.log);
