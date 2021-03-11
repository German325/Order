import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAPj8-Gg9uLUbWG7qvH5KxOxT3Q24WIpx0",
  authDomain: "organaizer-for-order.firebaseapp.com",
  projectId: "organaizer-for-order",
  storageBucket: "organaizer-for-order.appspot.com",
  messagingSenderId: "695213443367",
  appId: "1:695213443367:web:21bf89c315a275bc888102"
};

const fireBase = firebase.initializeApp(firebaseConfig);

export default fireBase;