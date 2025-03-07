/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './CookieBanner.css';

function CookieBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = getCookie('cookieConsent');
        if (!consent) {
            setTimeout(() => setVisible(true), 500); // Delay showing the banner
        }
    }, []);

    const acceptCookies = async () => {
        setCookie('cookieConsent', 'true', 365);
        setVisible(false);
        await saveConsentToAPI(true); // Save consent to API
    };

    const declineCookies = async () => {
        setCookie('cookieConsent', 'false', 365);
        setVisible(false);
        await saveConsentToAPI(false); // Save consent to API
    };

    const setCookie = (name, value, days) => {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name}=${value};${expires};path=/`;
    };

    const getCookie = (name) => {
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookies = decodedCookie.split(';');
        for (let cookie of cookies) {
            cookie = cookie.trim();
            if (cookie.startsWith(`${name}=`)) {
                return cookie.substring(name.length + 1);
            }
        }
        return null;
    };

    const saveConsentToAPI = async (consent) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ consent }),
            });
            return await response.json();
        } catch (error) {
            console.error('Error saving consent:', error);
        }
    };

    if (!visible) return null;

    return (
        <div className={`cookie-banner ${visible ? 'show' : ''}`}>
            <div className="cookie-banner-content">
                <p>
                    We use cookies to enhance your experience. By continuing to use our website, you agree to our use
                    of cookies.
                </p>
                <div className="cookie-banner-buttons">
                    <button className="accept-button" onClick={acceptCookies}>
                        Accept
                    </button>
                    <button className="decline-button" onClick={declineCookies}>
                        Decline
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CookieBanner;
