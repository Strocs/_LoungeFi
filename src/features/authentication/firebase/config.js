// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCnz6LtVg1FNB2vxgpLTPim39cV_Ht0OVc',
  authDomain: 'lounge-fi.firebaseapp.com',
  projectId: 'lounge-fi',
  storageBucket: 'lounge-fi.appspot.com',
  messagingSenderId: '420359518423',
  appId: '1:420359518423:web:3200eddbeb1d8a883c9892'
}

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)
