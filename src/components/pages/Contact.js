import React, { useState } from 'react';


const styles = {
  h1: {
    fontSize: '40px',
    margin: '20px',
    color: '#664E4C',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  },
  formContainer: {
    maxWidth: '60%',
    margin: '0 auto',
  },
  label: {
    color: '#664E4C',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px',
    border: '1px solid #E2D58B',
    borderRadius: '4px',
  },
  textarea: {
    width: '100%',
    height: '200px',
    padding: '10px',
    margin: '10px',
    border: '1px solid #E2D58B',
    borderRadius: '4px',
  },
  error: {
    color: 'red',
    fontSize: '14px',
  },
  submitButton: {
    background: '#E2D58B',
    color: '#664E4C',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    margin: "10px"
  },
};


export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [disabled, setDisabled] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  // Function to check if the form can be submitted
  const canSubmit = () => {
    let formErrors = {};

    if (!name.trim()) {
      return false;
    }

    if (!email.trim()) {
      return false;
    }

    if (!message.trim()) {
      return false;
    }

    return true;
  };

  // Function to validate the form 
  const validateForm = () => {
    let formErrors = {};

    if (!name.trim()) {
      formErrors.name = 'Name is required';
    }

    if (!email.trim()) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = 'Invalid email address';
    }

    if (!message.trim()) {
      formErrors.message = 'Message is required';
    }

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };
  // Event handler for input blur
  const handleBlur = (e) => {
    let formErrors = {};
    // Check if the blurred input is email
    if (e.target.name === 'email') {
      if (!e.target.value.length) {
        formErrors.email = 'Email is required';
      }
      // Check if the email format is valid
      else if (!/\S+@\S+\.\S+/.test(e.target.value)) {
        formErrors.email = 'Please enter a valid email address';
      } else {
        setEmail(e.target.value);
      }
      // Check if the blurred input is name
    } else if (e.target.name === 'name') {
      if (!e.target.value.length) {
        formErrors.name = 'Name is required';
      } else {
        setName(e.target.value);
      }
      // Check if the blurred input is message
    } else if (e.target.name === 'message') {
      if (!e.target.value.length) {
        formErrors.message = 'Message is required';
      } else {
        setMessage(e.target.value);
      }

    }
    setErrors(formErrors);
    // Enable the submit button if the form is valid
    if (canSubmit()) {
      setDisabled(false);
    }


  };
  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setDisabled(false);
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
      setSubmitted(true);
      setTimeout(() => { setSubmitted(false); }, 3000);

    }


  };


  return (
    <div>
      <h1 className="text-center" style={styles.h1}>
        Contact Page
      </h1>

      <div style={styles.formContainer}>
        <p>Email :<a href="mailto:moe.abbasi1983@gmail.com">   Email me</a></p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" style={styles.label}>
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onBlur={handleBlur}
              onChange={(e) => setName(e.target.value)} //  onChange event handler
              style={styles.input}
            />
            {errors.name && <span style={styles.error}>{errors.name}</span>}
          </div>
          <div>
            <label htmlFor="email" style={styles.label}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onBlur={handleBlur}
              onChange={(e) => setEmail(e.target.value)} //  onChange event handler
              style={styles.input}
            />
            {errors.email && <span style={styles.error}>{errors.email}</span>}
          </div>
          <div>
            <label htmlFor="message" style={styles.label}>
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onBlur={handleBlur}
              onChange={(e) => setMessage(e.target.value)} //  onChange event handler
              style={styles.textarea}
            ></textarea>
            {errors.message && <span style={styles.error}>{errors.message}</span>}
          </div>
          <button type="submit" disabled={disabled} style={styles.submitButton}>
            Submit
          </button>
          {submitted && <span style={styles.error}>Form submitted successfully! Not true. This part has not been implemented. Just send me an email!</span>}
        </form>
      </div>
    </div>
  );
}
