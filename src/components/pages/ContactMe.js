import React, { useState } from "react";

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
    };

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    return (
        <div className="mb-3 container-fluid">
            <form className="messageForm">
                <input
                    className="form-control container-sm container-md"
                    value={visitorName}
                    name="visitorName"
                    onChange={inputHandler}
                    onMouseLeave={checkName}
                    type="text"
                    placeholder="Your name"
                /></form>
            <form className="messageForm">
                <input
                    className="form-control container-sm"
                    value={email}
                    name="email"
                    onChange={inputHandler}
                    onMouseLeave={checkEmail}
                    type="email"
                    placeholder="Your email"
                /></form>
            <form className="messageForm">
                <input
                    value={address}
                    name="address"
                    onChange={inputHandler}
                    onMouseLeave={checkAddress}
                    type="text"
                    placeholder="Your address"
                /></form>
            <form className="messageForm">
                <input
                    value={message}
                    name="message"
                    onChange={inputHandler}
                    onMouseLeave={checkMessage}
                    type="text"
                    placeholder="Your message"
                /></form>
            <button type="button" onClick={submitHandler}>
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