 // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
        import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js"
        import { 
          getAuth, 
          createUserWithEmailAndPassword,
          onAuthStateChanged,
          GoogleAuthProvider, 
          signInWithRedirect, 
          FacebookAuthProvider,
          getRedirectResult, 
          signInWithPopup,

         } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";

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
        databaseURL: "https://justwin-2e222-default-rtdb.europe-west1.firebasedatabase.app/"

      };

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const database = getDatabase(app)
      const auth = getAuth();

  sighUp.addEventListener('click', (e) => {

    let username = document.getElementById('username').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;

      set (ref(database, 'users/' + user.uid), {
        username: username,
        email:email
      })

      alert('user created');
      // ...
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


    //-----------------[GOOGLE AUTH]-----------------//
    
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


//----------------[FACEBOOK REGISTRATION]------------------//
const provider = new FacebookAuthProvider();


const faceButton = document.getElementById('#facebookConnect')
faceButton.addEventListener('click', e => {
  e.preventDefault();

  const provider = new firebase.auth.FacebookAuthProvider();
  auth.signInWithPopup(provider).then(result => {
    console.log(result)
    console.log('facebook sign in')
  }).catch(err => {
    console.log(err)
  })
})