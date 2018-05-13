// Initialize Firebase
import firebase from 'firebase'
import firestore from 'firebase/firestore'

const config = {
  apiKey: "AIzaSyCWp0z-gZ8RRPAZK3uoLLNEmZ_Sq4Q82Co",
  authDomain: "vue-zohdy-chat.firebaseapp.com",
  databaseURL: "https://vue-zohdy-chat.firebaseio.com",
  projectId: "vue-zohdy-chat",
  storageBucket: "vue-zohdy-chat.appspot.com",
  messagingSenderId: "397601689575"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings( { timestampInSnapshots: true } );

export default firebaseApp.firestore();
