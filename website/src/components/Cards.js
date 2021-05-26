import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out !</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='Madrid, 1991. A teen girl finds herself besieged by an evil supernatural force after she played Ouija with two classmates.'
              label='Horror'
         
            />
            <CardItem
              src='images/img-2.jpg'
              text='A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.'
              label='Action movie'
       
            />
          </ul>
       
        </div>
      </div>
    </div>
  );
}

export default Cards;
