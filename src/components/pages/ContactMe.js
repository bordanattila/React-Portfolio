import React, { ChangeEvent, useState } from "react";
import "../styles/ContactMe.css";

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
    // Alert user on hover out 
    const checkName = (e) => {
        if (visitorName === "") {
            alert("Name is a required field");
            return;
        }
    };
    const checkEmail = (e) => {
        if (email === "") {
            alert("Email is a required field");
            return;
        }
    };
    const checkAddress = (e) => {
        if (address === "") {
            alert("Address is a required field");
            return;
        }
    };
    const checkMessage = (e) => {
        if (message === "") {
            alert("Message is a required field");
            return;
        }
    }

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
        if (!validateEmail) {
            setAlertMessage("The email address you entered does not appear to be valid");
            return;
        }
    };

    // Regex to validate email input
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    return (
        <div className="mb-3 container">
            <form className="messageForm">
                <input
                    className={`form-control container-sm container-md ${visitorName ? 'has-value' : ''}`} 
                    name="visitorName"
                    onChange={inputHandler}
                    // onMouseLeave={checkName}
                    type="text"   
                    id="textbox"
                />
                <label htmlFor="textbox">Your Name</label>
                </form>
            <form className="messageForm">
                <input
                    className={`form-control container-sm container-md flex ${email ? 'has-value' : ''}`}
                    name="email"
                    onChange={inputHandler}
                    // onMouseLeave={checkEmail}
                    type="email"
                />
                <label htmlFor="textbox">Your Email</label>
                </form>
            <form className="messageForm">
                <input
                    className={`form-control container-sm container-md ${address ? 'has-value' : ''}`}
                    name="address"
                    onChange={inputHandler}
                    // onMouseLeave={checkAddress}
                    type="text"
                />
                <label htmlFor="textbox">Your Address</label>
                </form>
            <form className="messageForm">
                <textarea
                    rows="10" 
                    cols="1"
                    className={`form-control container-sm container-md ${message ? 'has-value' : ''}`}
                    // value={message}
                    name="message"
                    onChange={inputHandler}
                    onMouseLeave={checkMessage}
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
    );
}

export default ContactMe;