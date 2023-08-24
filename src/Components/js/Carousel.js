import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

import img1 from '../images/carouselimages/img1.jpg'
import img2 from '../images/carouselimages/img2.jpeg';
import img3 from '../images/carouselimages/img3.jpeg';
import img4 from '../images/carouselimages/img4.jpeg';
import img5 from '../images/carouselimages/img5.jpeg';

const CarouSel = () => {
  const images = [img1,img2,img3,img4,img5];
  const states=[{id:'#chennai',state :'Chennai'},
  {id:'#kodaikanal',state :'Kodaikanal'},
  {id:'#madurai',state :'Madurai'},
  {id:'#kumbakonam',state :'Kumbakonam'},
  {id:'#theni',state :'Theni'},
  {id:'#rameshwaram',state :'Rameshwaram'},
  {id:'#ooty',state :'Ooty'},
  {id:'#kanyakumari',state :'Kanyakumari'},
  {id:'#yarcaud',state :'Yarcaud'},
  {id:'#hogenakkal',state :'Hogenakkal'},
]
  // const states=['Chennai','Kodaikanal','Madurai','Kumbakonam','Theni','Rameshwaram','Ooty','Kanyakumari','Yarcaud','Hogenakkal'];
  return (
    <>
      <div className='carousel-type'>
        <Carousel>
          {images.map((image) => (
            <Carousel.Item>
              <img style={{ maxHeight: "100vh" }} className="images" src={image} alt="carousel images" />              
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className='options'>
            <h3 className='optionHeading'>
                Tourist Places To Tamil Nadu <br/> Here Are The Top Places To Visit In Tamil Nadu In 2023
            </h3>
            
                <ul className='stateuList'>
                {states.map((state)=>(
                   <Link to={state.id} style={{textDecoration:'none'}}><li className='stateList'>{state.state}</li> </Link>                
                ))}
                </ul>
        </div>
    </>
  )
}

export default CarouSel