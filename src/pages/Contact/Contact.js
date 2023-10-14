import React from "react";
import Footer from "../../components/Footer/Footer";
import "./Contact.css";
import emailjs from 'emailjs-com';


function Contact(){

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then((result) => {
                window.location.reload();
            }, (error) => {
                console.log(error.text);
            });
    }
    

    return (
        <div className="contactPageWrapper">
            <h3 className="contactTitle">Contact Me</h3>
            <div className="contactMain">
                <form className="contact-form" onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="from_name" placeholder="John Smith"/>
                    <label>Email</label>
                    <input type="email" name="from_email" placeholder="youremail@email.com"/>
                    <label>Phone</label>
                    <input type="text" name="subject" placeholder="(123)-456-7890"/>
                    <label>Anything you want to share</label>
                    <textarea name="html_message" placeholder="Anything" id="messageArea"/>
                    <input type="submit" value="Send" id="sendButton" />
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;