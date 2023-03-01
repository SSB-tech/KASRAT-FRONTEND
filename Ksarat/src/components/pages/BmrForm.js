import React, { Component } from 'react';
import './BmiForm.css'
import '../Button.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import NutritionInfo from './NutritionInfo';
const STYLES = ['btn--primary', 'btn--outline', 'btn--custom1', 'btn--custom2', 'btn--custom3'];
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
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

class BmrForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      height: '',
      age: '',
      lifestyle: '',
      gender: '',
      bodyfat: '',
      experience: '',
      goal: ''

    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Height:', this.state.height);
    console.log('Weight:', this.state.weight);
    console.log('Age:', this.state.age);

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          weight: this.state.weight,
          height: this.state.height,
          age: this.state.age,
          lifestyle: this.state.lifestyle,
          gender: this.state.gender,
          bodyfat: this.state.bodyfat,
          experience: this.state.experience,
          goal: this.state.goal
        }
      )
    };
    const url = 'http://localhost:5054/api/Calculation/bmr';
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data); // do something with the response data
      this.setState({
        carbohydrate: data.carbohydrate,
        protein: data.protein,
        fat: data.fat,

        calfromcarb: data.calfromcarb,
        calfromprotein: data.calfromprotein,
        calfromfat: data.calfromfat,

        perfromcarb:data.perfromcarb,
        perfromprotein:data.perfromprotein,
        perfromfat:data.perfromfat,

        calories:data.calories
      
      })
    } catch (error) {
      console.error(error);
    }
  };

  handleHeightChange = (event) => {
    this.setState({ height: event.target.value });
  };

  handleAgeChange = (event) => {
    this.setState({ age: event.target.value });
  };

  handleWeightChange = (event) => {
    this.setState({ weight: event.target.value });
  };

  handleLifestyleChange = (event) => {
    this.setState({ lifestyle: event.target.value });
  };

  handleGenderChange = (event) => {
    this.setState({ gender: event.target.value });
  };

  handleBodyfatChange = (event) => {
    this.setState({ bodyfat: event.target.value });
  };

  handleExperienceChange = (event) => {
    this.setState({ experience: event.target.value });
  };

  handleGoalChange = (event) => {
    this.setState({ goal: event.target.value });
  };

  render() {
    return (
      <>
        <Navbar />
        <div className="bmrform-container">
          <h1>Get Your Personalised Diet Plan</h1>
          <form className="form-box" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label className='form-label1'> Height (in cm) : </label>
              <input
                className="form-input1"
                type="text"
                name='height'
                value={this.state.height}
                onChange={this.handleHeightChange}
              />
            </div>
            <div className="form-group">
              <label className='form-label1'> Age : </label>
              <input
                className="form-input1"
                type="text"
                name='age'
                value={this.state.age}
                onChange={this.handleAgeChange}
              />
            </div>
            <div className="form-group">
              <label className='form-label1'> Weight (in Kg) : </label>
              <input
                className="form-input1"
                type="text"
                name='weight'
                value={this.state.weight}
                onChange={this.handleWeightChange}
              />
              <div className="form-group">
                <label className='form-label1'> Lifestyle : </label>
                <select
                  className="form-input1"
                  name='lifestyle'
                  value={this.state.lifestyle}
                  onChange={this.handleLifestyleChange}
                >
                  <option value="">Select a lifestyle</option>
                  <option value="s">Sedentary</option>
                  <option value="la">Lightly active</option>
                  <option value="ma">Moderately active</option>
                  <option value="ha">Very active</option>
                </select>
              </div>
              <div className="form-group">
                <label className='form-label1'> Gender : </label>
                <select
                  className="form-input1"
                  name='gender'
                  value={this.state.gender}
                  onChange={this.handleGenderChange}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="form-group">
                <label className='form-label1'> Bodyfat % : </label>
                <input
                  className="form-input1"
                  type="text"
                  name='bodyfat'
                  value={this.state.bodyfat}
                  onChange={this.handleBodyfatChange}
                />
              </div>
              <div className="form-group">
                <label className='form-label1'> Experience : </label>
                <select
                  className="form-input1"
                  name='experience'
                  value={this.state.experience}
                  onChange={this.handleExperienceChange}
                >
                  <option value="">Select Your Experience Level</option>
                  <option value="b">Begineer</option>
                  <option value="i">Intermediate</option>
                  <option value="a">Advanced</option>
                </select>
              </div>
              <div className="form-group">
                <label className='form-label1'> Goal : </label>
                <select
                  className="form-input1"
                  name='goal'
                  value={this.state.goal}
                  onChange={this.handleGoalChange}
                >
                  <option value="">Select Your Goal</option>
                  <option value="lose fat">Lose Fat</option>
                  <option value="build muscle">Build Muscle</option>
                  <option value="build muscle lose fat">Recomposition/Build Muscle and Lose Fat</option>
                </select>
              </div>
            </div>
            <div className='btn-form'>
              <Button buttonStyle='btn--custom1'>Submit</Button>
            </div>
          </form>
        </div>
        <NutritionInfo
          carbohydrate={this.state.carbohydrate}
          protein={this.state.protein}
          fat={this.state.fat}
          calfromcarb={this.state.calfromcarb}
          calfromprotein={this.state.calfromprotein}
          calfromfat={this.state.calfromfat}
          perfromcarb={this.state.perfromcarb}
          perfromprotein={this.state.perfromprotein}
          perfromfat={this.state.perfromfat}
        />
        <Footer />
      </>
    );
  }
}

export default BmrForm;
