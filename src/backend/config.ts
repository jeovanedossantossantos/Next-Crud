
import firebase from "firebase/compat/app"
import 'firebase/compat/firestore' 

if(!(firebase.apps.length)){
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    })
    console.log("fire base")
}

export default firebase