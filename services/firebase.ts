import { initializeApp } from "firebase/app";
import { onAuthStateChanged, getAuth, Auth, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAsA9XivqF8mZifoK5GqwDuOg7UkzqavfI",
    authDomain: "fellow-demo-1103d.firebaseapp.com",
    projectId: "fellow-demo-1103d",
    storageBucket: "fellow-demo-1103d.appspot.com",
    messagingSenderId: "138664714999",
    appId: "1:138664714999:web:11b6dc55286bdd425ca9f2",
    measurementId: "G-CG7NT8BQKV",
}

const firebaseApp = initializeApp(firebaseConfig);
const auth: Auth = getAuth(firebaseApp);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        console.log('Google sign in success!', result.user)
    } catch(error:any) {
        console.error('Error signing in with Google:', error);
    }
}

const signOutUser = async () => {
    try {
        await signOut(auth);
        console.log('signed out');
    } catch(error:any) {
        console.error('error signing out:', error)
    }
}

export { auth, onAuthStateChanged, signInWithGoogle, signOutUser };