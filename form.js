

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAPcAKXqpwCxYl92IxOZQ5xTvaAY6FB_RU",
    authDomain: "form-543f6.firebaseapp.com",
    databaseURL: "https://form-543f6.firebaseio.com",
    projectId: "form-543f6",
    storageBucket: "form-543f6.appspot.com",
    messagingSenderId: "30763599862",
    appId: "1:30763599862:web:4e30bfc824282b652169d7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const auth=firebase.auth();


function signUp(){

var email=document.getElementById("email");
var password=document.getElementById("password");

const promise =auth.createUserWithEmailAndPassword(email.value,password.value);
promise.catch(e=> alert(e.message));
alert("Account Created Successfully,Now Sign In to Continue");

}

function signIn(){

var email=document.getElementById("email");
var password=document.getElementById("password");

const promise =auth.signInWithEmailAndPassword(email.value,password.value);
promise.catch(e=> alert(e.message));
alert("Signing In as "+email.value);

}
function signOut(){
  auth.signOut();
  var email=document.getElementById("email");
  promise.catch(e=> alert(e.message));
  alert("Succesfully Signed Out "+email.value);
}
