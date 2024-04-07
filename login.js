  // Import the functions you need from the SDKs you need
  import { getAuth, signInWithEmailAndPassword ,signInWithPopup , GoogleAuthProvider  } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";

  //TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration

  const firebaseConfig = {
    apiKey: "AIzaSyDcFj9xRRSzoFUikX-AN2In_Og9eMws09I",
    authDomain: "cart-item-6fba7.firebaseapp.com",
    databaseURL: "https://cart-item-6fba7-default-rtdb.firebaseio.com",
    projectId: "cart-item-6fba7",
    storageBucket: "cart-item-6fba7.appspot.com",
    messagingSenderId: "939769455842",
    appId: "1:939769455842:web:07de2d5f4eaf0a2987eabb"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  const provider = new GoogleAuthProvider();
  auth.languageCode = 'en'; 
  const googleLogin = document.getElementById('fa-google');
  googleLogin.addEventListener('click', function(event){
      event.preventDefault()
      
      signInWithPopup(auth, provider).then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    window.location.href = "profile.html"
  
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;

    // ...
  });
  })
 
  const submit = document.getElementById('submit') ;

  submit.addEventListener('click' , function(event){
    event.preventDefault()
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    signInWithEmailAndPassword (auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
    //   alert("Sign in to Account ...")
      window.location.href = "/Profile.html"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });
  })
