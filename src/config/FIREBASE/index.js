import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyDDoUQc4USBIpEZD95KfbBmTAu1m7A2XWs",
    authDomain: "ivano-4f55a.firebaseapp.com",
    databaseURL: "https://ivano-4f55a-default-rtdb.firebaseio.com",
    projectId: "ivano-4f55a",
    storageBucket: "ivano-4f55a.appspot.com",
    messagingSenderId: "748396765419",
    appId: "1:748396765419:web:bab1064b10740938bedeae"
});

const FIREBASE = firebase;

export default FIREBASE;