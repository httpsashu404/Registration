import React from "react"
import "./Homepage.css"

const Homepage = ({setLoginUser}) => {
    return (
        <div className="homepage">
            <h2>Boomm... Guy's, I'm Ashutosh.</h2>
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
    )
}

export default Homepage