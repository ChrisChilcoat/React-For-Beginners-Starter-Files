import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBz9VEcgz97LVIyAm4pcVrVqJqgo7ROG00",
  authDomain: "catch-of-the-day-fcfd7.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-fcfd7-default-rtdb.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export { firebaseApp }

//this is a default export
export default base;