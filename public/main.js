 // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
        import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-database.js"
        import { 
                getAuth, 
                onAuthStateChanged, 
                 } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";
        
        const firebaseConfig = {
                  apiKey: "AIzaSyDNY0drJfhyqxBiuONq-AMTjCR1pA0U810",
                  authDomain: "justwin-2e222.firebaseapp.com",
                  projectId: "justwin-2e222",
                  storageBucket: "justwin-2e222.appspot.com",
                  messagingSenderId: "319970877026",
                  appId: "1:319970877026:web:cb144129664f9aec707b3b",
                  measurementId: "G-4QSJ5VJBWF",
                  databaseURL: "https://justwin-2e222-default-rtdb.europe-west1.firebasedatabase.app"
      };

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const database = getDatabase(app)
      const auth = getAuth();

      const user = auth.currentUser;

          //---------[IF USER IS CONNECTED]---------//
      onAuthStateChanged(auth, (user) => { 

      if (user) {
      
        const uid = user.uid;

        console.log(uid)
        const name = user.displayName;
        console.log(name)
        const email = user.email;
        console.log(email)


      } else {
        // User is signed out
        console.log('USER ARE NOT CONNECTED !')
      }
    });

