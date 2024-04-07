import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";

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
const signedInMessage = document.getElementById('signedInMessage')
signedInMessage.style.fontSize = '18px';
signedInMessage.style.color = 'rgba(0, 131, 168, 0.752)';
const userDataContainer = document.getElementById('userData');
const userEmail = document.getElementById('userEmail');
const userDisplayName = document.getElementById('userDisplayName');
const profileImage = document.getElementById('profileImage');
const signOutButton = document.getElementById('signOutButton');

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        const uid = user.uid;
        signedInMessage.textContent = `Signed in as :  '${uid}'`;

        // Display user data
        userEmail.textContent = user.email || '';
        userDisplayName.textContent = user.displayName || ''; // Display Name

        // Display profile image
        if (user.photoURL) {
            profileImage.src = user.photoURL;
        } else {
            // Set a default image if photoURL is not available
            profileImage.src = 'default-profile-image.png';
        }

        // Show the sign-out button
        signOutButton.style.display = 'block';
    } else {
        // User is signed out
        signedInMessage.textContent = 'Signed out';
        userDataContainer.innerHTML = ''; // Clear user data when signed out

        // Hide the sign-out button
        signOutButton.style.display = 'none';
    }
});

// Add event listener for the sign-out button
signOutButton.addEventListener('click', () => {
    signOut(auth).then(() => {
        // Sign-out successful
        console.log('User signed out');
        window.location.href = "login.html";
    }).catch((error) => {
        // An error happened
        console.error('Error signing out:', error);
    });
});

// ... (previous code)

const toggleDarkModeButton = document.getElementById('toggleDarkMode');
const body = document.body;

toggleDarkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
