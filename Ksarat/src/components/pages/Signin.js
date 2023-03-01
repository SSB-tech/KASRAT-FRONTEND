import React from 'react';
import UseForm1 from './UseForm1';
import SigninValidate from './SigninValidate';
import './Form.css';

const submitForm = () => {
  console.log('Form submitted successfully!');
}
const Signin = () => {
    const { handleChange, handleSubmit, values, errors } = UseForm1(
      submitForm,
      SigninValidate
    );

    return (
        <div className='form-content-right'>
          <form onSubmit={handleSubmit} className='form' noValidate>
          <h1>SIGN IN</h1>
            <div className='form-inputs'>
              <label className='form-label'>Username</label>
              <input
                className='form-input'
                type='text'
                name='username'
                placeholder='Enter your username'
                value={values.username}
                onChange={handleChange}
    
              />
              {errors.username && <p>{errors.username}</p>}
            </div>

            <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign In
        </button>
        <span className='form-input-sign-in'>
         Don't Have An Account? Sign Up <a href='./sign-up'>here</a>
        </span>
      </form>
    </div>
  );
};

export default Signin;
