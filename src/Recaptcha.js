import React, { useEffect, useCallback }  from 'react';
import axios from 'axios';
import {
  useGoogleReCaptcha
} from 'react-google-recaptcha-v3';

const Recaptcha = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  // Create an event handler so you can call the verification on button click event or form submit
  const handleRecaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
    }

    const token = await executeRecaptcha('submit');
    // Do whatever you want with the token
    console.log(token);
    axios.get('SECURE_API_URL', { headers: { token } })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }, []);

  // You can use useEffect to trigger the verification as soon as the component being loaded
  useEffect(() => {
    handleRecaptchaVerify();
    const el = document.querySelector('.grecaptcha-badge');
    el.style.display = 'none';
  }, [handleRecaptchaVerify]);

  return <button id="submit" onClick={handleRecaptchaVerify}>Verify recaptcha</button>;
};

export default Recaptcha;
