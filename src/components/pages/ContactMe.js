import React, { useRef, useState } from "react";
import "../styles/ContactMe.css";
import emailjs from '@emailjs/browser';
import { Box, TextField, Button, Snackbar } from '@mui/material/';
import MuiAlert from "@mui/material/Alert";
import { AccountCircle, Email, Subject, Message } from "@mui/icons-material/";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function ContactMe() {

    // Create state for sncakbar
    const [state, setState] = React.useState({
        vertical: 'bottom',
        horizontal: 'left',
    });
    const { vertical, horizontal } = state;

    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(true);

    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    // Button for snackbar
    const button = (
        <React.Fragment>
            <Button variant="contained" className="sendbtn"
                sx={{
                    minWidth: "10px",
                    maxWidth: "150px",
                    padding: "6px",
                }}
                onClick={() => {
                    submitHandler();
                }}
            > Send
            </Button>
        </React.Fragment>
    )

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
        handleClick({
            vertical: 'top',
            horizontal: 'left',
        });
        setVisitorName("")
        setEmail("")
        setSubject("")
        setMessage("");
    };

    // Check to see if all required fields are filled out
    const submitHandler = (e) => {
        setAlertMessage("");
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
            <div className="contactMe container">
                <h2 className="contactmeh2">If you would like to contact me, you can do so by sending an email to <br></br><a href="mailto:bordanattila007@gmail.com">bordanattila007@gmail.com</a> from your default account <br></br> or you can fill out the form below</h2>
                <div className="formArea">
                <Box
                    className="box container"
                    noValidate
                    sx={{
                        '& .MuiTextField-root': { m: 2, width: '35ch', display: "flex !important", },
                    }}
                >
                    <form ref={form} onSubmit={sendEmail}>
                        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                            <TextField
                                onChange={inputHandler}
                                label="Your name" id="custom-css-outlined-input" name="visitorName" value={visitorName}
                                InputLabelProps={{ style: { color: 'beige' }, }}
                            />
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                            <Email sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                            <TextField label="Your email" id="custom-css-outlined-input" type="email" name="email" value={email}
                                InputLabelProps={{ style: { color: 'beige' } }}
                                onChange={inputHandler}
                            />
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                            <Subject sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                            <TextField label="Email subject" id="custom-css-outlined-input" name="subject" value={subject}
                                InputLabelProps={{ style: { color: 'beige' } }}
                                onChange={inputHandler}
                            />
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                            <Message className="message" sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                            <TextField label="Your message" id="custom-css-outlined-input" name="message" value={message} multiline rows={8}
                                InputLabelProps={{ style: { color: 'beige' } }}
                                onChange={inputHandler}
                            />
                        </Box>
                        {button}
                        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical, horizontal }} key={vertical + horizontal}>
                            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                Your message has been sent!
                            </Alert>
                        </Snackbar>
                        {alertMessage && (
                            <div>
                                <p className="error-text">{alertMessage}</p>
                            </div>
                        )}
                    </form>
                </Box>
                </div>
            </div>
    );




}

export default ContactMe;