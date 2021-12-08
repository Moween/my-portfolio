import { useFormik } from 'formik';
import * as Yup from 'yup';

import sendEmail from '../utils/email';

const Validation = () => {
  const formValidationSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string().required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: formValidationSchema,
    onSubmit: (formData) => {
      sendEmail(formData);
    },
  });
  return formik;
};

export default Validation;
