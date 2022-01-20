import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {doc, getDoc, getFirestore, setDoc} from "firebase/firestore"
import {useAuthState} from "react-firebase-hooks/auth"
import React, {useEffect, useState} from "react";
import Main from "../Main/Main";
import * as styled from "./Firebase.styles"
import {initStateBlank} from "./defaultValues";
import {PromptContainer} from "../../styles/App.styles";
import placeHolder from "../../assets/profile_placeholder.png";

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
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                console.log("Error", errorCode, errorMessage)
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

export const SignOut = () => {
    let image: any = placeHolder
    if (auth.currentUser) image = auth.currentUser.photoURL
    return auth.currentUser && (
        <styled.SignInContainerHeader>
            <img src={image} alt="placeholder"/>
            <styled.GoogleSignInHeader onClick={() => {
                window.location.reload()
                auth.signOut()
            }}>
                Sign Out
            </styled.GoogleSignInHeader>
        </styled.SignInContainerHeader>
    )
}

const Firebase: React.FC = () => {

    const blankProjects = initStateBlank
    const [user] = useAuthState(auth)
    const [fireProjects, setFireProjects] = useState<any>()
    const [doneLoading, setDoneLoading] = useState(false)

    const writeToFire = (setFireObj: any) => {
        if (!user) return
        const userRef = doc(firestore, "users", `${user.uid}`);
        setDoc(userRef, setFireObj)
    }

    const _checkUserProjectsFire = async() => {
        if (!user) return
        const userRef = doc(firestore, "users", `${user.uid}`)
        const userSnapshot = await getDoc(userRef)

        const createUserProjectsDoc = async () => {
            if (!userSnapshot.exists()) {
                await setDoc(userRef, blankProjects)
                return blankProjects
            } else if (userSnapshot.exists()) {
                return userSnapshot.data()
            }
        }

        createUserProjectsDoc().then((r) => {
            setFireProjects(r)
            localStorage.setItem("projects", JSON.stringify(r))
            setDoneLoading(true)
        })
    }

    useEffect( () => {
        try {
            _checkUserProjectsFire()
        } catch (e) {
            console.log("Error", e)
        }
    },[user])

    return (
        <styled.DisplayLoginDiv>
            { !auth.currentUser && <SignIn />}
            { doneLoading && <Main localProjects={fireProjects} usingFire={true} updateFire={writeToFire}/> }
        </styled.DisplayLoginDiv>
    )
}

export default Firebase