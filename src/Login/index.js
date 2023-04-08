import { AuthErrorCodes, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useCallback, useContext, useEffect, useState } from "react"
import { Link, Navigate, useOutletContext } from "react-router-dom";
import { auth } from "../auth.js";
import passwordicon from "../Asset/subimages/password.svg"
import {
    // useLocation,
    useNavigate,
    // useParams,
} from "react-router-dom";
import GoogleButton from "react-google-button";
import submit from "../Asset/subimages/submit.svg"
import googleBtn from "../Asset/subimages/googlebtn.jpg"

import '../Style/Login.css'

const Login = () => {
    const [activeLogin, setActiveLogin] = useState(false)
    const navgateLink = () => {
        setActiveLogin(current => !current)
    }
    const navigate = useNavigate()

    const [input] = useOutletContext();
    const email = input.props.children[2].props.value;

    const [password, setPassword] = useState("")
    const [user, setUser] = useState();


    const [active, setActive] = useState(false)
    const navgating = () => {
        setActive(current => !current)
    }


    const inputpassword = (e => {
        setPassword(e.target.value)
    })

    //login auth function
    const loginEmailPassword = async (e) => {
        console.log("hi")
        e.preventDefault()
        const loginEmail = email;
        const loginPassword = password;
        console.log(loginEmail)
        console.log(loginPassword)
        try {
            const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            setUser(userCredential.user)
            console.log(userCredential.user)
            navigate("/")
        }
        catch (error) {
            console.log(error)
            alert(error)
            const showLoginError = (error) => {
                //using use state hook to arrange it 
                if (error.code === AuthErrorCodes.INVALID_PASSWORD) {
                    return (

                        alert('Invalid Password')
                    )
                }
                if (error.code === AuthErrorCodes.INVALID_EMAIL) {
                    alert('Invalid Email')
                }
            }
        }
    }



    // adding email
    const signinWithEmail = () => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {

                const credential = GoogleAuthProvider.credentialFromResult(result);

                console.log(credential)

                navigate("/")
                // ...
            }).catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;

                const email = error.customData.email;

                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }


    // function for the navitating to password
    const forgottenpassword = (e, path) => {
        e.preventDefault();
        setTimeout(() => {
            navgating()
        }, 500)
        setTimeout(() => navigate(path), 1500);
    }
    return (
        <div className="login">
            <div className="gray">
                <img className="authImg" src="https://dev-pu8wyk-g.us.auth0.com/img/badge.png" alt="" />
                <h3>react store testing
                </h3>
            </div>

            {/* my login block  */}
            <div className={active ? "navigate-to" : ""}>
                <div className="link-signUp-login"><Link className={activeLogin ? "link-login not-active " : "link-login  active"} to={"/auth/login"}>Log In</Link> <Link className="link-signup not-active" to={"/auth/signup"}>Sign Up</Link></div>
                <form onSubmit={loginEmailPassword}>
                    {/* <GoogleButton type="light" className="googleButton" onClick={signinWithEmail} /> */}
                    <div className="googleButton" onClick={signinWithEmail}><img src={googleBtn} width={30} height={30} /> <span>Sign in with Google</span></div>

                    <div></div>
                    <div className="or">or</div>

                    <div>{input}</div>
                    <div className="inputbox"><div className="gray input-icon"><img src={passwordicon} alt="" /></div> <input type="password" value={"" || password} onChange={inputpassword} /></div><br />
                    <br />
                    <div className="passwordReset"><Link onClick={(e) => forgottenpassword(e, "/auth/passwordreset")}>Don't remember you password?</Link></div>
                </form>
            </div>

            {/* my button */}
            <button >Log In<img src={submit} alt="" /></button><br />
        </div>
    )
}

export default Login;