import Firebase from 'firebase'
 
  const firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyBwr5EvdiAwTztcP8aZAq14EROkrty1N68",
    authDomain: "ywc16h.firebaseapp.com",
    databaseURL: "https://ywc16h.firebaseio.com",
    projectId: "ywc16h",
    storageBucket: "ywc16h.appspot.com",
    messagingSenderId: "146458747567"
 });
 
  // Export the database for components to use.
 // If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
 export const db = firebaseApp.database(); 