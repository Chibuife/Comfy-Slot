import { useState } from "react"
import { Outlet } from "react-router-dom"
import email from "./Asset/subimages/envelopIcon.svg"
import Signup from "./Signup"

export const Authentication = ({  setPasswordClose }) => {

    const [mail, setEmail] = useState("")
    const inputemail = (e) => {
        setEmail(e.target.value)

    }

    const input = <div className="inputbox"><div className="gray input-icon"><img src={email} alt="" /></div> <input type="email" value={mail || ""} onChange={inputemail} /></div>;
    //    console.log(input.props.children[2].props.value)
    return (
            <div className="authBody">
            <div className="passwordClose" onClick={()=>setPasswordClose(true)}></div>
                <div className="signin-login">
                    <Outlet context={[input]} />
                </div>
            </div>
    )
}