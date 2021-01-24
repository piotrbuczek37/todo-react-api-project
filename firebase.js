const firebase = require('firebase/app');
require('firebase/firestore');

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDqgn2PINZKieTawabCit0yKvEydN_tr_A",
    authDomain: "todo-react-app-dad03.firebaseapp.com",
    databaseURL: "https://todo-react-app-dad03-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "todo-react-app-dad03",
    storageBucket: "todo-react-app-dad03.appspot.com",
    messagingSenderId: "408693395292",
    appId: "1:408693395292:web:a3884800ddc0490822bb99"
});

module.exports = firebaseConfig;