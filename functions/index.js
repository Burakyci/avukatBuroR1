const functions = require("firebase-functions");
const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app");
const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore");

initializeApp();
const db = getFirestore();

const docRef = db.collection("users").doc("alovelace");

await docRef.set({
  first: "Ada",
  last: "Lovelace",
  born: 1815,
});

const aTuringRef = db.collection("users").doc("aturing");

await aTuringRef.set({
  first: "Alan",
  middle: "Mathison",
  last: "Turing",
  born: 1912,
});

const snapshot = await db.collection("users").get();
snapshot.forEach((doc) => {
  console.log(doc.id, "=>", doc.data());
});

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});
