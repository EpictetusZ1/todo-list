import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection } from 'firebase/firestore/lite';
import * as styled from "./Firebase.styles"
import {PromptContainer} from "../../styles/App.styles";

import { useAuthState } from "react-firebase-hooks/auth"
import { useCollectionData } from "react-firebase-hooks/firestore"
import React from "react";

const firebaseConfig = {
    apiKey: "AIzaSyA5VaycICObWQ76Get_seMWW8AlOhAwj-A",
    authDomain: "todoapp-62469.firebaseapp.com",
    projectId: "todoapp-62469",
    storageBucket: "todoapp-62469.appspot.com",
    messagingSenderId: "37184304476",
    appId: "1:37184304476:web:62fc5ee42998d247e7bd99"
}

const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)
const auth = getAuth()

const SignIn: React.FC = () => {
    const singInWithGoogle = () => {
        const provider = new GoogleAuthProvider()

        signInWithPopup(auth, provider)
            .then( (result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result)
                // @ts-ignore
                const token = credential.accessToken
                // The signed-in user info.
                const user = result.user
                console.log(user)
            }).catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            // The email of the user's account used.
            const email = error.email
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
        })

    }
    return (
        <PromptContainer>
            <h3>To Do-ify</h3>
            <hr/>
            <styled.SignInGoogle onClick={singInWithGoogle}>Sign In With Google</styled.SignInGoogle>
        </PromptContainer>
    )
}

const Firebase: React.FC = () => {
    return (
        <styled.DisplayLoginDiv>
            <SignIn />

        </styled.DisplayLoginDiv>
    )
}

export default Firebase