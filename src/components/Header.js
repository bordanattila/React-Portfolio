import React, {useState} from "react";
import Navigation from "./Navigation";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import ContactMe from "./pages/ContactMe";
import Resume from "./pages/Resume";

function Header() {
    // set currentPage state to AboutMe to start with
    const [currentPage, setCurrentpage] = useState("AboutMe");

    // render page based on user click
    const renderPage = () => {
        if (currentPage === "AboutMe") {
            return <AboutMe />;
        }
        if (currentPage === "Portfolio") {
            return <Portfolio />;
        }
        if (currentPage === "ContactMe") {
            return <ContactMe />;
        }
        if (currentPage === "Resume") {
            return <Resume />;
        }
    };

    // set current page to the one that is clicked on
    const handlePageChange = (page) => setCurrentpage(page);

    // passing currentPage and handlePagechange as props to Navigation
    return (
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}

export default Header;