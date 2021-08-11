import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import {
  GoogleReCaptcha
} from 'react-google-recaptcha-v3';

const Recaptcha = () => {
  const [token, setToken] = useState('');
  // Create an event handler so you can call the verification on button click event or form submit
  const handleGet = ()  => {
    // Do whatever you want with the token
    console.log(token);
    axios.get('SECURE_API_URL', { headers: { token } })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  };

  // You can use useEffect to trigger the verification as soon as the component being loaded
  useEffect(() => {
    handleGet();
  }, []);

  return (
    <>
      <GoogleReCaptcha
        onVerify={token => {
          setToken(token);
        }}
      />
    </>
  );
};

export default Recaptcha;
