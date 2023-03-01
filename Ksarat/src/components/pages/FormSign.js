import React from 'react';
import './Form.css';
import Signin from './Signin';


const FormSign = () => {
  

  return (
    <>
    <div className='heading'>
  <h1>KASRAT</h1>
  <h3>The Perfect Workout and Diet Plan Generator</h3>
</div>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='images/img-2.svg' alt='spaceship' />
        </div>
        <Signin />
      </div>
    </>
  );
};

export default FormSign;