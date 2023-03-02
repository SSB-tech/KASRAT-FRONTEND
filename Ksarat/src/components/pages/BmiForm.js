import React, { Component } from 'react';
import './BmiForm.css'
import '../Button.css';
import Navbar from '../Navbar';
import Footer from '../Footer';

const STYLES = ['btn--primary', 'btn--outline','btn--custom1','btn--custom2','btn--custom3'];
const SIZES = ['btn--medium', 'btn--large'];

const Button = ({
  children,
  type,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  // function onClick(){
  //   window.open("https://ramkedem.com/en/locating-empty-rows/")  
  // }

  return (
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        // onClick={onClick}
        type={type}
      >
        {children}
      </button>
  );
};

class BmiForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '',
      weight: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Height:', this.state.height);
    console.log('Weight:', this.state.weight);
  
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ height: this.state.height, weight: this.state.weight })
    };
    const url = 'http://localhost:5054/api/Calculation/bmi';
    try {
      const response = await fetch(url, options); 
      const data = await response.json();
      console.log(data); // do something with the response data
      if(data.isSuccess){
        window.location.href=data.fileurl;
      }
  
    } catch (error) {
      console.error(error);
    }
  };
  
  

  handleHeightChange = (event) => {
    this.setState({ height: event.target.value });
  };


  handleWeightChange = (event) => {
    this.setState({ weight: event.target.value });
  };

  render() {
    return (
      <>
      <Navbar />
      <div className="bmiform-container">
        <h1 className='bmi-heading'>Enter Your Body Dimensions To Get Your Personalized Workout Routine</h1>
        <form className="form-box" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className='form-label1'> Height (in cm) : </label>
              <input
                className='form-input1'
                type='text'
                name='height'
                placeholder='Enter your height in meters'
                value={this.state.height}
                onChange={this.handleHeightChange}
              />
          
          </div>
          <div className="form-group">
          <label className='form-label1'>Weight (in kg) : </label>
              <input
                className='form-input1'
                type='text'
                name='weight'
                placeholder='Enter your weight in kg'
                value={this.state.weight}
                onChange={this.handleWeightChange}
              />
          </div>
          <div className = 'btn-form'>
          <Button buttonStyle='btn--custom1'>Submit</Button>
          </div>
        </form>
      </div>
      <Footer />
      </>
    );
  }
}

export default BmiForm;
