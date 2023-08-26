import Carousel from './Components/Homepagejs/Carousel';
import Chennai from './Components/Homepagejs/Chennai';
import Rameshwaram from './Components/Homepagejs/Rameshwaram';
import Kodaikanal from './Components/Homepagejs/Kodaikanal';
import Ooty from './Components/Homepagejs/Ooty';
import  Kanyakumari  from './Components/Homepagejs/Kanyakumari';
import  Kumbakonam  from './Components/Homepagejs/Kumbakonam';
import  Madurai  from './Components/Homepagejs/Madurai';
import  Yercaud  from './Components/Homepagejs/Yercaud';
import  Theni  from './Components/Homepagejs/Theni';
import  Hogenakkal  from './Components/Homepagejs/Hogenakkal';

import React from 'react'

const  Home= () => {
  return (
    <div className='home'> 
        <Carousel/>
        <Chennai/>
        <Rameshwaram/>
        <Kodaikanal/>
        <Ooty/>
        <Kanyakumari/>
        <Kumbakonam/>
        <Madurai/>
        <Yercaud />
        <Theni/>
        <Hogenakkal/>
    </div>
  )
}

export default Home;
        