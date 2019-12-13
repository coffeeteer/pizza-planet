import Firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDsW59m57n4okJIXCe09ieCpQyYhEoKlmo",
    authDomain: "pizza-planet-faad8.firebaseapp.com",
    databaseURL: "https://pizza-planet-faad8.firebaseio.com",
    projectId: "pizza-planet-faad8",
    storageBucket: "pizza-planet-faad8.appspot.com",
    messagingSenderId: "312598893584",
    appId: "1:312598893584:web:ecae28968dd526d6516695",
    measurementId: "G-7PG135R6L4"
  };
  const firebaseApp = Firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.database();
  export const dbMenuRef = db.ref('menu')
  Firebase.analytics();
