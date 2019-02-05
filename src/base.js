const config = {
  apiKey: "AIzaSyCvbU4cYG9zyzrgFqNZCposx_0EfY2-M2w",
  authDomain: "mercado-dev-c6871.firebaseapp.com",
  databaseURL: "https://mercado-dev-c6871.firebaseio.com",
  projectId: "mercado-dev-c6871",
  storageBucket: "mercado-dev-c6871.appspot.com",
  messagingSenderId: "67772592227"
};

const Rebase = require("re-base");
const firebase = require("firebase/app");
require("firebase/database");

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export default base;
