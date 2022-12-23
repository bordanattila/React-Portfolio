import React, { ChangeEvent, useState } from "react";
import "../styles/ContactMe.css";
import { Icon } from "semantic-ui-react";

function ContactMe() {
    // Create state variables for the form and set their initial values to empty string
    const [visitorName, setVisitorName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [message, setMessage] = useState("");
    const [alertMessage, setAlertMessage] = useState("");

    // Set event handler for user input
    const inputHandler = (e) => {
        // Getting the name and the value of the event
        const { target } = (e);
        const inputType = target.name;
        const inputValue = target.value;

        //  Set the state based on input type
        if (inputType === "visitorName") {
            setVisitorName(inputValue);
        } else if (inputType === "email") {
            setEmail(inputValue);
        } else if (inputType === "address") {
            setAddress(inputValue);
        } else if (inputType === "message") {
            setMessage(inputValue);
        }
    };


    // Check to see if all required fields are filled out
    const submitHandler = (e) => {
        e.preventDefault();
        if (visitorName === "") {
            setAlertMessage("Name is a required field");
            return;
        }
        if (email === "") {
            setAlertMessage("Email is a required field");
            return;
        }
        if (address === "") {
            setAlertMessage("Address is a required field");
            return;
        }
        if (message === "") {
            setAlertMessage("Message is a required field");
            return;
        }
        if (!validateEmail(email)) {
            setAlertMessage("The email address you entered does not appear to be valid");
            return;
        }
    };

    // Regex to validate email input
    function validateEmail(email) {
        const re = /([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        return re.test(String(email).toLowerCase());
    };

    return (
        <div className="contactPage">
            <div className="container">
                <h2 className="contactmeh2">If you would like to contact me, please fill out the form below and send me your message</h2>
                <form className="messageForm">
                    <input
                        className={`form-control container-sm container-md ${visitorName ? 'has-value' : ''}`}
                        name="visitorName"
                        onChange={inputHandler}
                        type="text"
                        id="textbox"
                    />
                    <Icon className="icon" name="user outline" />
                    <label htmlFor="textbox">Your Name</label>
                </form>
                <form className="messageForm">
                    <input
                        className={`form-control container-sm container-md flex ${email ? 'has-value' : ''}`}
                        name="email"
                        onChange={inputHandler}
                        type="email"
                    />
                    <Icon className="icon" name="mail outline" />
                    <label htmlFor="textbox">Your Email</label>
                </form>
                <form className="messageForm">
                    <input
                        className={`form-control container-sm container-md ${address ? 'has-value' : ''}`}
                        name="address"
                        onChange={inputHandler}
                        type="text"
                    />
                    <Icon className="icon" name="home" />
                    <label htmlFor="textbox">Your Address</label>
                </form>
                <form className="messageForm">
                    <textarea
                        rows="10"
                        cols="1"
                        className={`form-control container-sm container-md ${message ? 'has-value' : ''}`}
                        name="message"
                        onChange={inputHandler}
                        type="text"
                    />
                    <label htmlFor="textbox">Your Message</label>
                </form>
                <button type="button"
                    className="btn btn-primary"
                    onClick={submitHandler}>
                    Submit
                </button>
                {alertMessage && (
                    <div>
                        <p className="error-text">{alertMessage}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ContactMe;