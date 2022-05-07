 // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
          //import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-analytics.js";
        import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-database.js";

        import { 
                getAuth, 
                createUserWithEmailAndPassword,
                sendEmailVerification,
                onAuthStateChanged,
                GoogleAuthProvider, 
                signInWithRedirect, 
                FacebookAuthProvider,
                getRedirectResult, 
                signInWithPopup

              } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";
        

              const firebaseConfig = {
                  apiKey: "AIzaSyDNY0drJfhyqxBiuONq-AMTjCR1pA0U810",
                  authDomain: "justwin-2e222.firebaseapp.com",
                  projectId: "justwin-2e222",
                  storageBucket: "justwin-2e222.appspot.com",
                  messagingSenderId: "319970877026",
                  appId: "1:319970877026:web:cb144129664f9aec707b3b",
                  measurementId: "G-4QSJ5VJBWF",
                  databaseURL: "https://justwin-2e222-default-rtdb.europe-west1.firebasedatabase.app/"

              };

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      //console.log(database)
      const database = getDatabase(app) 
      //const db = getDatabase(app);
      const auth = getAuth();
     // const provider = new GoogleAuthProvider();
     // const fbprovider = new FacebookAuthProvider();


//-------------[ SUBSCRIBE USER WITH EMAIL AND PASSWORD AND NAME ]---------------//
      sighUp.addEventListener('click', (e) => {

        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let username = document.getElementById('username').value;


        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;

            //-----------[STORE DATA ON DATABASE]-----------//

            set(ref(database, 'users/' + user.uid), {
              username: username,
              email: email
            })



          alert('USER ARE CREATED')
          //...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert(errorMessage)
      });
    });

    onAuthStateChanged(auth, (user) => {
      if (user) {
      window.location = 'home.html'; 
      // ...
      } else {
        // User is signed out
        // ...
      }
  });

//--------------------------------[ GOOGLE AUTH ]---------------------------------//
    googleRegister.addEventListener('click', (e) => {
    
    //signInWithRedirect(auth, provider);

    getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
    

    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        // user name = displayName
        // email = email
        // photo = photoURL
        // redirect
        alert(user.displayName);
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        alert(errorMessage);
    });
})


//---------------------------------[ FACEBOOK AUTH ]-------------------------------//
   facebookRegister.addEventListener('click', (e) =>{
      signInWithPopup(auth, fbprovider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        //console.log('facebook login')
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
      });
    })
