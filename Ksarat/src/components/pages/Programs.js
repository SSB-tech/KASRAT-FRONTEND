import React from 'react';
import '../../App.css';
import '../Cards.css';
import CardItem from '../CardItem';
import Navbar from '../Navbar';
import Footer from '../Footer';


const Programs = () => {
  return (
      <>
      <Navbar />
  <div className='cards'>
    <h1>Get Started With Our Amazing Programs!!</h1>
    <h4>a better program for a better you</h4>
    <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items' type='none'>
          <CardItem 
                  src = './images/gym1.png'
                  text="Get A Personalised Workout Routine"
                  label='Workout'
                  path = '/BmiForm'
            /> 
            <CardItem 
                  src = './images/diet.jpg'
                  text="Generate A Personalised Diet Plan"
                  label='Diet'
                  path= '/BmrForm'
            /> 
            <CardItem 
                  src = './images/gym4.jpg'
                  text="Track Your Progress As You Go"
                  label='Tracking'
                  path= '/programs'
            /> 
            </ul>
            </div>
            </div>
  </div>
  <Footer />
  </>
  );
}

export default Programs