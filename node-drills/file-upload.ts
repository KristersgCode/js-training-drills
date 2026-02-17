export {};

async function uploadPhoto(userId: string): Promise<{ ok: boolean }> {
  let token = "";
  let fileId = "";

  console.log("start token");

  // STEP 1 — GET TOKEN
  try {
    token = await withTimeout(() => getUploadToken(userId), 1000);
  } catch {
    console.log("token retry");
    try {
      token = await withTimeout(() => getUploadToken(userId), 1000);
    } catch (e) {
      console.log("token failed");
      return { ok: false };
    }
  }

  console.log("start upload");

  // STEP 2 — UPLOAD FILE
  try {
    fileId = await withTimeout(() => uploadFile(token), 1000);
  } catch {
    console.log("upload retry");
    try {
      fileId = await withTimeout(() => uploadFile(token), 1000);
    } catch {
      console.log("upload failed");
      return { ok: false };
    }
  }

  console.log("start confirm");

  // STEP 3 — CONFIRM UPLOAD
  try {
    await withTimeout(() => confirmUpload(fileId), 1000);
  } catch {
    console.log("confirm retry");
    try {
      await withTimeout(() => confirmUpload(fileId), 1000);
    } catch {
      console.log("confirm failed → cleanup");
      await deleteFile(fileId);
      return { ok: false };
    }
  }

  console.log("upload success");
  return { ok: true };
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
// ---------------- FAKE APIs ----------------
//
function getUploadToken(userId: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId && userId.length > 1) {
        console.log("token got");
        resolve("token123");
      } else {
        reject(new Error("Token not valid"));
      }
    }, Math.random() * 1500);
  });
}

function uploadFile(token: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token) {
        console.log("file uploaded");
        resolve("fileId11");
      } else {
        reject(new Error("Token not valid"));
      }
    }, Math.random() * 1500);
  });
}

function confirmUpload(fileId: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fileId) {
        console.log("upload confirmed");
        resolve(true);
      } else {
        reject(new Error("File id not valid"));
      }
    }, Math.random() * 1500);
  });
}

function deleteFile(fileId: string): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("file deleted:", fileId);
      resolve();
    }, 300);
  });
}

//
// ---------------- TEST ----------------
//
uploadPhoto("user123").then(console.log);
