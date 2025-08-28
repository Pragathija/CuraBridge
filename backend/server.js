const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const auth = admin.auth();

/**
 * Signup Cloud Function
 */
exports.signup = functions.https.onRequest(async (req, res) => {
  try {
    const { email, password, name, role } = req.body;

    // create firebase user
    const userRecord = await auth.createUser({
      email,
      password,
      displayName: name,
    });

    // add custom claims for role
    await auth.setCustomUserClaims(userRecord.uid, { role });

    res.status(200).json({
      message: "Signup successful",
      user: {
        uid: userRecord.uid,
        email: userRecord.email,
        name: userRecord.displayName,
        role,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
});

/**
 * Login Cloud Function
 * (Better: use Firebase Client SDK for login, but if you want endpoint…)
 */
exports.login = functions.https.onRequest(async (req, res) => {
  try {
    const { email, password } = req.body;

    // Normally you use Firebase Auth client SDK for login,
    // but here we issue a custom token for server-side login.
    const user = await auth.getUserByEmail(email);

    // In real setup, verify password with Firebase Auth client side.
    // For server, issue custom token:
    const customToken = await auth.createCustomToken(user.uid);

    res.status(200).json({
      message: "Login successful",
      token: customToken,
      user: {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
});
