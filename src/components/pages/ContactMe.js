import React, { useRef, useState } from "react";
import "../styles/ContactMe.css";
import emailjs from '@emailjs/browser';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

function ContactMe() {
    // Create state variables for the form and set their initial values to empty string
    const [visitorName, setVisitorName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
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
        } else if (inputType === "subject") {
            setSubject(inputValue);
        } else if (inputType === "message") {
            setMessage(inputValue);
        }
    };

    // set up EmailJS to receive messages
    const form = useRef();

    const sendEmail = () => {
        emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    // Check to see if all required fields are filled out
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("sent")
        if (visitorName === "") {
            setAlertMessage("Name is a required field");
            return;
        }
        if (email === "") {
            setAlertMessage("Email is a required field");
            return;
        }
        if (subject === "") {
            setAlertMessage("Subject is a required field");
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
        sendEmail();
    };

    // Regex to validate email input
    function validateEmail(email) {
        const re = /([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        return re.test(String(email).toLowerCase());
    };

    return (
        <>
            <div className="contactMe">
                <h2 className="contactmeh2">If you would like to contact me, please fill out the form below and send me a message</h2>

                <Box
                    className="box"
                    noValidate
                    sx={{
                        '& .MuiTextField-root': { m: 2, width: '35ch', display: "flex !important", },
                    }}
                >
                    <form ref={form} onSubmit={sendEmail}
                    >
                        <TextField
                            onChange={inputHandler}
                            label="Your name" id="custom-css-outlined-input" name="visitorName" value={visitorName}
                            InputLabelProps={{ style: { color: 'beige' } }}
                        />
                        <TextField label="Your email" id="custom-css-outlined-input" type="email" name="email" value={email}
                            InputLabelProps={{ style: { color: 'beige' } }}
                            onChange={inputHandler}
                        />
                        <TextField label="Email subject" id="custom-css-outlined-input" name="subject" value={subject}
                            InputLabelProps={{ style: { color: 'beige' } }}
                            onChange={inputHandler}
                        />
                        <TextField label="Your message" id="custom-css-outlined-input" name="message" value={message} multiline rows={8}
                            InputLabelProps={{ style: { color: 'beige' } }}
                            onChange={inputHandler}
                        />
                        <Button className="sendbtn" variant="contained" type="submit" value="Send" onClick={submitHandler}>Send</Button>
                        {alertMessage && (
                            <div>
                                <p className="error-text">{alertMessage}</p>
                            </div>
                        )}
                    </form>
                </Box>
            </div>
        </>
    );




}

export default ContactMe;