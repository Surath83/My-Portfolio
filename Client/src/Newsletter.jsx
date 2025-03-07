import style from './Newsletter.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Newsletter() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:5000/api/newsletter', { email });
            if (response.status === 201) {
                setMessage('Subscribed successfully');
                setEmail('');
            }
        } catch (error) {
            console.error('Subscription failed:', error);
            setMessage('Subscription failed. Please try again.');
        }
    };

    // Timer to clear message after 5 seconds
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage('');
            }, 5000);
            return () => clearTimeout(timer); // Cleanup on unmount or state change
        }
    }, [message]);

    return (
        <div className={style.box}>
            <h2>Subscribe to our Newsletter</h2>
            <form className={style.ff} onSubmit={handleSubmit}>
                <input 
                    type='email' 
                    className={style.inp} 
                    placeholder='Email Address' 
                    required 
                    value={email} 
                    onChange={handleChange} 
                />
                <button className={style.submitbotton} type='submit'>Submit</button>
            </form>
            {message && <p className={style.message}>{message}</p>}
        </div>
    );
}

export default Newsletter;
