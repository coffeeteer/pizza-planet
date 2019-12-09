//const firebaseCdn = url.parse("https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js");
//import * as Firebase from firebaseCdn; 
import Firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBl4qOBUoK1AMkKSnnEhHnGX7WouR6gcp8",
    authDomain: "pizza-planet-8ac45.firebaseapp.com",
    databaseURL: "https://pizza-planet-8ac45.firebaseio.com",
    projectId: "pizza-planet-8ac45",
    storageBucket: "pizza-planet-8ac45.appspot.com",
    messagingSenderId: "742588368759",
    appId: "1:742588368759:web:3f96351c0bba480ada8372"
};
  // Initialize Firebase
const firebaseApp = Firebase.initializeApp(firebaseConfig); //config
const db = firebaseApp.database();
export const dbMenuRef = db.ref('menu');

