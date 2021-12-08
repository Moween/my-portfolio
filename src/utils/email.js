import emailjs from 'emailjs-com';

const sendEmail = (formData) => {
  emailjs
    .send(
      'service_rxyp0f4',
      'template_ym9nv15',
      formData,
      process.env.REACT_APP_EMAIL_JS_KEY
    )
    .then(
      (result) => {
        alert(result.text);
        // setSuccessMsg(result.text);
        // alert(successMsg)
      },
      (error) => {
        alert(error.text);
        // setErrorMsg(error.text);
        // alert(errorMsg);
      }
    );
};

export default sendEmail;
