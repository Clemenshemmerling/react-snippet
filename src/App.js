import React, { useEffect }  from 'react';
import axios from 'axios';
import {
  useGoogleReCaptcha
} from 'react-google-recaptcha-v3';

const App = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  // Create an event handler so you can call the verification on button click event or form submit
  const handleGet = async () => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
    }

    const token = await executeRecaptcha('submit');
    // Do whatever you want with the token
    console.log(token);
    axios.get('https://clemensk.korconnect.io/GIPHY/v1/gifs/random', { headers: { token, 'x-api-key': '2y91wVZrme9mN93HMeGBv5wH9JoxVm8m5Mv61BQN' } })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  };

  // You can use useEffect to trigger the verification as soon as the component being loaded
  useEffect(() => {
    if (executeRecaptcha) {
      handleGet();
    }

  }, [executeRecaptcha]);

  return (
    <>
    <h1>Hello World</h1>
    </>
  );
};

export default App;
