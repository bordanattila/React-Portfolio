import React from "react";

function Navbar({currentPage, handlePageChange}) {
    return (
        <div>
            <h1 className="test">Attila Bordán</h1>
            <img className="profile_img" src="./images/profilepicture.jpg" alt="Profile picture"></img>
            <nav className="navbar">
                <a href="#AboutMe"
                 onClick={() => handlePageChange('AboutMe')}
                 className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
                 >About me</a>
                <a href="#Portfolio">Portfolio</a>
                <a href="#ContactMe">Contact me</a>
                <a href="#Resume">Resume</a>
            </nav>
        </div>
    );
}

export default Navbar;
