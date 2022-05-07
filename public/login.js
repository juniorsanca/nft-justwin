   
   // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
        import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-database.js"
        import { 
            getAuth, 
            signInWithEmailAndPassword, 
            GoogleAuthProvider, 
            FacebookAuthProvider,
            signInWithRedirect, 
            getRedirectResult, 
            signInWithPopup,
            onAuthStateChanged
        } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

      // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries

      // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
      const provider = new GoogleAuthProvider();
      const fbprovider = new FacebookAuthProvider();



  //---------------------------[ SE CONNECTER ]---------------------------//

  singIn.addEventListener('click', (e) => {

    //let username = document.getElementById('username').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        const dt = new Date();
        update(ref(database, 'users/' + user.uid), {
        last_login: dt,
      })

      alert('User loged in!');
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage)
    });
  });


//-----------------[FACEBOOK LOGIN]----------------//
    facebookConnect.addEventListener('click', (e) =>{
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


    //-----------------[GOOGLE AUTH]----------------//
    googleConnect.addEventListener('click', (e) => {
    
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

     onAuthStateChanged(auth, (user) => {
      if (user) {
      window.location = 'home.html'; 
      // ...
      } else {
        // User is signed out
        // ...
        console.log('USEER IS LOGOUT')
      }
    });
