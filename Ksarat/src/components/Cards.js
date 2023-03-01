import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check Out What We Have To Offer!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items' type='none'>
          <CardItem 
                  src = './images/gym1.png'
                  text="Get A Personalised Workout Routine"
                  label='Workout'
                  path= '/programs'
            /> 
            <CardItem 
                  src = './images/gym4.jpg'
                  text="Track Your Progress As You Go"
                  label='Workout'
                  path= '/programs'
            /> 
            <CardItem 
                  src = './images/gym5.jpg'
                  text="Build Your Muscles With The Right Supplements"
                  label='Products'
                  path= '/programs'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;