import style from './Getintouch.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Getintouch() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [displayMessage, setDisplayMessage] = useState('');

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName) tempErrors.firstName = "First name is required";
    if (!formData.lastName) tempErrors.lastName = "Last name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Valid email is required";
    if (!formData.phone || formData.phone.length < 10) tempErrors.phone = "Valid phone number is required";
    if (!formData.message) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post('https://my-portfolio-2-sjzg.onrender.com/api/contact', formData);
        if (response.status === 201) {
          setSuccess(true);
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: ''
          });
        }
      } catch (error) {
        console.error("Error sending message:", error);
        setSuccess(false);
        setDisplayMessage("Failed to send message. Please try again.");
      }
    }
  };

  useEffect(() => {
    if (success) {
      setDisplayMessage("Message sent successfully!");
    } else {
      const firstError = Object.values(errors)[0];
      setDisplayMessage(firstError || '');
    }

    const timer = setTimeout(() => {
      setDisplayMessage('');
      setSuccess(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [errors, success]);

  return (
    <div className={style.box}>
      <h2>Get in touch</h2><br />
      <form onSubmit={handleSubmit}>
        <input type='text' name="firstName" value={formData.firstName} onChange={handleChange} className={style.textinput} placeholder='First Name' required />
        <input type='text' name="lastName" value={formData.lastName} onChange={handleChange} className={style.textinput} placeholder='Last Name' required />
        <br />
        <input type='email' name="email" value={formData.email} onChange={handleChange} className={style.textinput} placeholder='Email Address' required />
        <input type='number' name="phone" value={formData.phone} onChange={handleChange} className={style.textinput} placeholder='Phone No.' required />
        <br />
        <textarea name="message" value={formData.message} onChange={handleChange} className={style.msginput} placeholder='Message' required></textarea>
        <br /><br />
        <button type="submit" className={style.submitButton}>Send</button>
      </form>
      <div className={style.errorContainer}>
        {displayMessage && <p className={success ? style.success : style.error}>{displayMessage}</p>}
      </div>
    </div>
  );
}

export default Getintouch;
