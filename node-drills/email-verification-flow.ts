const fakeUsers: Record<number, { emailSent: boolean }> = {
  1: { emailSent: false },
};

async function sendVerificationEmail(userId: number): Promise<{ ok: boolean }> {
  if (!fakeUsers[userId]) {
    console.log("[flow] user not found");
    return { ok: false };
  }

  let token = "";

  // =========================
  // STEP 1 — CREATE TOKEN
  console.log("[token] start");

  try {
    token = await withTimeout(() => createVerificationToken(userId), 1000);
    console.log("[token] success");
  } catch {
    console.log("[token] retry");

    try {
      token = await withTimeout(() => createVerificationToken(userId), 1000);
      console.log("[token] success after retry");
    } catch {
      console.log("[token] failed");
      return { ok: false };
    }
  }

  // =========================
  // STEP 2 — SEND EMAIL
  console.log("[email] start");

  try {
    await withTimeout(() => sendEmail(token), 1000);
    console.log("[email] success");
  } catch {
    console.log("[email] retry");

    try {
      await withTimeout(() => sendEmail(token), 1000);
      console.log("[email] success after retry");
    } catch {
      console.log("[email] failed → invalidate token");

      try {
        await invalidateToken(token);
        console.log("[cleanup] token invalidated");
      } catch {
        console.log("[cleanup] failed to invalidate token");
      }

      return { ok: false };
    }
  }

  // =========================
  // STEP 3 — MARK EMAIL SENT
  console.log("[mark] start");

  try {
    await withTimeout(() => markEmailSent(userId), 1000);
    console.log("[mark] success");
  } catch {
    console.log("[mark] retry");

    try {
      await withTimeout(() => markEmailSent(userId), 1000);
      console.log("[mark] success after retry");
    } catch {
      console.log("[mark] failed (email already sent)");
      return { ok: false };
    }
  }

  return { ok: true };
}

async function withTimeout<T>(fn: () => Promise<T>, ms: number): Promise<T> {
  return Promise.race([
    fn(),
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error("Timeout")), ms),
    ),
  ]);
}

function randomDelay() {
  return Math.random() * 1500;
}

function maybeFail(rate = 0.3) {
  if (Math.random() < rate) throw new Error("Random failure");
}

const fakeTokens = new Map<string, number>();

function createVerificationToken(userId: number): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        maybeFail();
        const token = "token-" + Math.random().toString(36).slice(2);
        fakeTokens.set(token, userId);
        console.log("token created", token);
        resolve(token);
      } catch {
        reject("token failed");
      }
    }, randomDelay());
  });
}

function sendEmail(token: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        maybeFail();
        console.log("email sent");
        resolve(true);
      } catch {
        reject("email failed");
      }
    }, randomDelay());
  });
}

function markEmailSent(userId: number): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        maybeFail();
        fakeUsers[userId].emailSent = true;
        console.log("email marked in DB");
        resolve();
      } catch {
        reject("mark failed");
      }
    }, randomDelay());
  });
}

function invalidateToken(token: string): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fakeTokens.has(token)) {
        fakeTokens.delete(token);
        console.log("token invalidated", token);
        resolve();
      } else {
        reject("token not found");
      }
    }, randomDelay());
  });
}

sendVerificationEmail(1).then(console.log);
