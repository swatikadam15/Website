import React from 'react';
import './Cards.css';

import SeriesCardsItem from './MovieCardItem';

function SeriesCards() {
  return (
    <div className='cards'>
      <h1>Watch Anywhere!!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <SeriesCardsItem
              src='images/img-8.jpg'
              text='A Dead Can Talk '
              label=' Mystery '
  
          
            />
            <SeriesCardsItem
              src='images/img-9.jpg'
              text='A down and out cop lands the case of a lifetime when four suspects are nabbed in the assassination attempt of a journalist. The pursuit of it leads him to Paatal Lok and to shocking discoveries in the past of the four suspects.'
              label='crime thriller'
     
            />
          </ul>
        
      
   
        </div>
      </div>
    </div>
  );
}

export default SeriesCards;
