import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyArDEafPCx0btPUYOgPYRnGxsE00rhYUIA",
    authDomain: "crown-db-d7b08.firebaseapp.com",
    projectId: "crown-db-d7b08",
    storageBucket: "crown-db-d7b08.appspot.com",
    messagingSenderId: "357241605036",
    appId: "1:357241605036:web:1a3f722c5c48b95ece8809"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`user/${userAuth.uid}`);
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message)
        }
    }
    return userRef
}


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({'login_hint': 'user@example.com'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
