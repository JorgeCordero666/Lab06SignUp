import firebase from 'firebase/app';
import 'firebase/auth';
import dotenv from 'dotenv';

dotenv.config();


const firebaseConfig = {
    apiKey: "AIzaSyDTUCQmEbojSajLLk2FRJOsAaxPpXC5ID0",
    authDomain: "basededatossignup.firebaseapp.com",
    projectId: "basededatossignup",
    storageBucket: "basededatossignup.appspot.com",
    messagingSenderId: "238092592594",
    appId: "1:238092592594:web:e4ab82eef1203cc2bcd40b"
  };

  firebase.initializeApp(firebaseConfig);

  document.getElementById('signup-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log('User registered:', userCredential.user);
      })
      .catch((error) => {
        console.error('Error registering user:', error);
      });
  });
  