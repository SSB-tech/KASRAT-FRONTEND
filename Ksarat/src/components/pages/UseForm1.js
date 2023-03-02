import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);

    if (Object.keys(errors).length === 0) {
      const url = 'http://localhost:5054/api/State/login';
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data); // do something with the response data
        localStorage.setItem('token',data.token);
        if(data.isSuccess){
          window.location.href='/Home';
        }
      
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors,callback,isSubmitting ]
  );

  return { handleChange, handleSubmit, values, errors};
};

export default useForm;