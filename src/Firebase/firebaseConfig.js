import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDdsOFyP1ENdtFGy_IzUaGxDU4gFpALq0s",
    authDomain: "tienda-1f9c4.firebaseapp.com",
    projectId: "tienda-1f9c4",
    storageBucket: "tienda-1f9c4.appspot.com",
    messagingSenderId: "87506205738",
    appId: "1:87506205738:web:3fa38c1d8ee13fd7f09753"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
