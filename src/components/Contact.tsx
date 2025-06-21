import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef<HTMLFormElement>(null);

  // Sanitizes input to remove potential HTML/script
  function sanitizeInput(input: string): string {
    return input.replace(/<\/?[^>]+(>|$)/g, '');
  }

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '' || !email.includes('@'));
    setMessageError(message === '');

    if (name && email.includes('@') && message && form.current) {
      const sanitizedName = sanitizeInput(name);
      const sanitizedEmail = sanitizeInput(email);
      const sanitizedMessage = sanitizeInput(message);

      const templateParams = {
        from_name: sanitizedName,
        reply_to: sanitizedEmail,  // user’s actual email goes here
        message: sanitizedMessage,
      };

      emailjs
        .send(
          'service_7muz1ir',       // Replace with your actual EmailJS service ID
          'template_j0xw8wc',      // Replace with your actual EmailJS template ID
          templateParams,
          'PVmr_F7ec4-n1oeqr'    // Replace with your EmailJS public API key
        )
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Your message has been sent!');
            setName('');
            setEmail('');
            setMessage('');
          },
          (error) => {
            console.error('FAILED...', error);
            alert('Failed to send message. Please try again.');
          }
        );
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail}
          >
            <div className="form-flex">
              <TextField
                required
                id="outlined-name"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? 'Please enter your name' : ''}
                className='bgColor'
              />
              <TextField
                required
                id="outlined-email"
                label="Email"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? 'Please enter a valid email address' : ''}
                className='bgColor'
              />
            </div>
            <TextField
              required
              id="outlined-message"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? 'Please enter the message' : ''}
            />
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
