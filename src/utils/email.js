import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

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
        toast.success(`${result.text}! form submitted. Thank you for your request.`);   
      },
      (error) => {
        toast.error(`${error.text}! try again.`);
      }
    );
};

export default sendEmail;
