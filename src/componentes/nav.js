import React from "react";

function Nav(){

    const logo = "https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"

    return(
        <div className="nav-container">
            <img className="nav-logo" 
                src={logo} 
                alt="netflix"></img>
            <img className="nav-avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="CAI-2023"></img>
        </div>
    )
}

export default Nav;