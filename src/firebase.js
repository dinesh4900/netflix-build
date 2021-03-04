import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA-EDis_0RjLk-VCLHKS9En31FLFIPWRkI",
    authDomain: "netflix-4900.firebaseapp.com",
    projectId: "netflix-4900",
    storageBucket: "netflix-4900.appspot.com",
    messagingSenderId: "304892732127",
    appId: "1:304892732127:web:e4e493a38f202af465bf6a"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();

  export {auth}
  export default db;
  