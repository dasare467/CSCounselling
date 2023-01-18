import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/analytics'




// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "enter api key",
    authDomain: "cs-counselling-website.firebaseapp.com",
    projectId: "cs-counselling-website",
    storageBucket: "cs-counselling-website.appspot.com",
    messagingSenderId: "601468521268",
    appId: "1:601468521268:web:8c92ab18c0375422f53361",
    measurementId: "G-SV48W4YME3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore().settings({ timestapsInSnapshots: true })

  const db = firebase.firestore();

  export { db }
  export default firebase;
