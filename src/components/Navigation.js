import React from "react";
import "./styles/Navigation.css";
// const styles = {
//     headerStyle {
//         padding: "20px"
//         display: "flex"
//         flexWrap: "wrap"
//         justifyContent: "space-evenly"
//         alignItems: "center"
//     }
// }

function Navbar({currentPage, handlePageChange}) {
    return (
        <div className="header">
            
            <h1 className="test">Attila Bordán</h1>
            <nav className="navbar">
                <a href="#AboutMe"
                 onClick={() => handlePageChange("AboutMe")}
                 className={currentPage === "AboutMe" ? "nav-link active" : "nav-link"}
                 >About me</a>
                <a href="#Portfolio">Portfolio</a>
                <a href="#ContactMe"
                 onClick={() => handlePageChange("ContactMe")}
                 className={currentPage === "ContactMe" ? "nav-link active" : "nav-link"}
                 >Contact me</a>
                <a href="#Resume">Resume</a>
            </nav>
        </div>
    );
}

export default Navbar;
