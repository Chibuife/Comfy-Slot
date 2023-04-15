import { auth } from "../auth";
import { onAuthStateChanged, signOut } from "firebase/auth";
export const monitorAuthState = async (setLogin) => {
    onAuthStateChanged(auth, user => {
        if (user) {
            setLogin(true)
        }
        else {
            setLogin(false)
        }
    })
}


export const logOut = async () => {
    await signOut(auth)
    console.log('clicked')
}