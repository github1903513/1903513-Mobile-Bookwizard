/*import firebase from 'firebase/app';
import "firebase/database";
var firebaseConfig = {
    apiKey: "AIzaSyAheicmY_m62RlsZLV4b561SyDAVD94bRM",
    authDomain: "bookwizard-8afef.firebaseapp.com",
    databaseURL: "https://bookwizard-8afef.firebaseio.com",
    projectId: "bookwizard-8afef",
    storageBucket: "bookwizard-8afef.appspot.com",
    messagingSenderId: "46079735503",
    appId: "1:46079735503:web:c0c9142dd033e037d269ba",
    measurementId: "G-NJ57Y0Z60Z"
};
firebase.initializeApp(firebaseConfig);
const databaseRef = firebase.database().ref();
//export const todosRef = databaseRef.child("bookWizard")
export default firebase;*/

//import firebase from 'firebase';
import firebase from "firebase";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";


const config = {
    apiKey: "AIzaSyAheicmY_m62RlsZLV4b561SyDAVD94bRM",
    authDomain: "bookwizard-8afef.firebaseapp.com",
    databaseURL: "https://bookwizard-8afef.firebaseio.com",
    projectId: "bookwizard-8afef",
    storageBucket: "bookwizard-8afef.appspot.com",
    messagingSenderId: "46079735503",
    appId: "1:46079735503:web:c0c9142dd033e037d269ba",
    measurementId: "G-NJ57Y0Z60Z"
};
firebase.initializeApp(config);

export default firebase;