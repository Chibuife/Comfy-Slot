import React, { useCallback, useState, useEffect } from "react"
import { Link, Navigate, Outlet, useOutletContext } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink, signInWithPopup, GoogleAuthProvider, sendEmailVerification } from "firebase/auth";
import { auth } from "../auth";
import passwordicon from "../Asset/subimages/password.svg"
import PasswordChecklist from "react-password-checklist"
import {
    // useLocation,
    useNavigate,
    // useParams,
} from "react-router-dom";
import GoogleButton from "react-google-button";
import submit from "../Asset/subimages/submit.svg"
import '../Style/Login.css'
import googleBtn from "../Asset/subimages/googlebtn.jpg"

const Signup = ({  setPasswordClose, passwordClose }) => {
    const [activeLogin, setActiveLogin] = useState(false)
    const navgateLink = () => {
        setActiveLogin(current => !current)
    }
    const [input] = useOutletContext();
    const email = input.props.children[2].props.value;
    const [password, setPassword] = useState("")
    let navigate = useNavigate();
    const inputpassword = (e => {
        setPassword(e.target.value)
        setPasswordClose(false)
    })
    const createAccount = async (e) => {
        e.preventDefault()
        const loginEmail = email;
        const loginPassword = password;
        // const loginName = name;

        console.log(loginEmail)
        console.log(loginPassword)
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword,);
            console.log(userCredential.user.emailVerified)
            if (userCredential.user.emailVerified === true) {
                navigate("/home")
            } else {
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        alert('verification sent')
                        navigate("/home")
                    })
            }
            sendEmailVerification(auth.currentUser)
                .then(() => {
                    console.log(auth.currentUser)
                });
            // userCredential.currentUser.sendEmailVerification();
            // navigate("/home")
        }
        catch (error) {
            console.log(error)
            alert(error)
            const showLoginError = (error) => {
            }
        }
    }

    const handleGoogleSignIn = async () => {
        try {
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider)
                .then(() => { navigate("/") })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="signin"  >
            <div className="passwordClose"
                onClick={()=>  setPasswordClose(true) }
               style={{zIndex:10}}></div>
            <div className="gray">
                <img className="authImg" src="https://dev-pu8wyk-g.us.auth0.com/img/badge.png" alt="" />
                <h3>Sign Up</h3>
            </div>
            <div className="link-signUp-login"><Link className="link-login not-active" to={"/auth/login"}>Log In</Link> <Link className={activeLogin ? "link-signup  not-active" : "link-signup active"} to={"/auth/signup"}>Sign Up</Link></div>
            <form onSubmit={createAccount}>
                <div className="googleButton" onClick={handleGoogleSignIn}><img  src={googleBtn} width={30} height={30} /> <span>Sign in with Google</span></div>

                <div className="or">or</div>
                <div>{input}</div>
                {
                    password && !passwordClose ?
                        <div className="p">
                            <PasswordChecklist
                                rules={["minLength", "specialChar", "number", "capital"]}
                                minLength={5}
                                value={password}
                                // valueAgain={passwordAgain}
                                onChange={(isValid) => { }}
                            />
                        </div>
                        :
                        null
                }
                <div className="inputbox"><div className="gray input-icon"><img src={passwordicon} alt="" /></div><input type="password" value={password || ""} onChange={inputpassword }  /><br /></div><br />
                <div className="small">
                    <small>
                        By signing up, you agree to our terms of service and privacy policy.
                    </small>
                </div>
                <button>Sign Up<img src={submit} alt="" /></button><br />
            </form>
        </div>
    )
}

export default Signup
