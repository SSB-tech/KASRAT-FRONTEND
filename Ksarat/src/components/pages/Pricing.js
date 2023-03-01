import React from 'react'
import './Prices.css'
import '../Button.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';


const STYLES = ['btn--primary', 'btn--outline','btn--custom1','btn--custom2','btn--custom3'];
const SIZES = ['btn--medium', 'btn--large'];

const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to='/pricing' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
  
const Pricing = () => {
return (
<>
<Navbar />
<div className="pricing-container">
<div className='pricing-header'>
          <span className='stroke-text'> READY TO START</span>
          <span>YOUR JOURNEY</span>
          <span className='stroke-text'> WITH US?</span>
        </div>
      <div className="plan-container">
        <div className="plan">
          <h2 className="plan-name1">BASIC</h2>
          <p className="plan-price">$5.99/month</p>
          <ul className="plan-features">
            <li>Personalized Workout Routine</li>
            <li>Personalized Diet Plan</li>
            <li>Recommended Suppliments</li>
          </ul>
          <div className='prices-btn'>
          <Button buttonStyle='btn--custom1'>Choose Plan</Button>
          </div>
        </div>
        <div className="plan">
          <h2 className="plan-name2">PREMIUN</h2>
          <p className="plan-price">$10.99/month</p>
          <ul className="plan-features">
            <li>Personalized Workout Routine</li>
            <li>Personalized Diet Plan</li>
            <li>Access To Tracking You Progress</li>
            <li>Recommended Suppliments</li>
          </ul>
          <div className='prices-btn'>
          <Button buttonStyle='btn--custom2'>Choose Plan</Button>
          </div>
        </div>
        <div className="plan">
          <h2 className="plan-name3">ELITE</h2>
          <p className="plan-price">$15.99/month</p>
          <ul className="plan-features">
            <li>Personalized Workout Routine</li>
            <li>Personalized Diet Plan</li>
            <li>Access To Tracking You Progress</li>
            <li>One gym outfit and resistance bands</li>
            <li>Recommended Suppliments</li>
          </ul>
          <div className='prices-btn'>
          <Button buttonStyle='btn--custom3'>Choose Plan</Button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Pricing;