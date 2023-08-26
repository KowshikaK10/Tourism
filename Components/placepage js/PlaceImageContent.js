import React from 'react';
import '../css/place.css';
import {chennaiDetails,rameshwaramDetails,kodaikanalDetails,ootyDetails,kanyakumariDetails,kumbakonamDetails,maduraiDetails,yercaudDetails,theniDetails,hogenakkalDetails} from './PlaceContentDetails';


const PlaceImageContent = () => {
  return (
    <>
    <div className='placeImage pt-5 pb-5'>  
    <h1 style={{textAlign:'center'}} >Chennai</h1>
    <h2 style={{textAlign:'center'}}>Tourist Places Visit</h2> 
    <section className='placeimageDetails'>
      <img src={chennaiDetails[0].placeImg} alt='placeimage'style={{width:'20%' , maxHeight:'35vh'}}className=' placeimg '/>
        <div className='placepara1'>
          <h4>{chennaiDetails[0].placeHeading}</h4>
          <p>{chennaiDetails[0].placeDetails1}</p>
          <p>{chennaiDetails[0].placeDetails2}</p>
        </div>
    </section>   

    <section className='placeimageDetails'>
        <div className='placepara2'>
          <h4 >{chennaiDetails[1].placeHeading}</h4>
          <p>{chennaiDetails[1].placeDetails1}</p>
          <p>{chennaiDetails[1].placeDetails2}</p>
        </div>
        <img src={chennaiDetails[1].placeImg} alt='placeimage'style={{width:'20%' , maxHeight:'36vh'}}className=' placeimg '/>
    </section>   
      
    <section className='placeimageDetails'>
      <img src={chennaiDetails[2].placeImg} alt='placeimage'style={{width:'20%' , maxHeight:'35vh'}}className=' placeimg '/>
        <div className='placepara1'>
          <h4>{chennaiDetails[2].placeHeading}</h4>
          <p>{chennaiDetails[2].placeDetails1}</p>
          <p>{chennaiDetails[2].placeDetails2}</p>
        </div>
    </section> 
    <section className='placeimageDetails'>
        <div className='placepara2'>
          <h4>{chennaiDetails[3].placeHeading}</h4>
          <p>{chennaiDetails[3].placeDetails1}</p>
          <p>{chennaiDetails[3].placeDetails2}</p>
        </div>
        <img src={chennaiDetails[3].placeImg} alt='placeimage'style={{width:'20%' , maxHeight:'25vh'}}className=' placeimg '/>
    </section> 
      
    </div>

    {/* rameshwaram */}

    <div className='placeImage pt-5 pb-5'>  
    <h1 style={{textAlign:'center'}} >Rameshwaram</h1>
    <h2 style={{textAlign:'center'}}>Tourist Places Visit</h2> 
    <section className='placeimageDetails'>
      <img src={rameshwaramDetails[0].placeImg} alt='placeimage'style={{width:'20%' , maxHeight:'35vh'}}className=' placeimg '/>
        <div className='placepara1'>
          <h4>{rameshwaramDetails[0].placeHeading}</h4>
          <p>{rameshwaramDetails[0].placeDetails1}</p>
          <p>{rameshwaramDetails[0].placeDetails2}</p>
        </div>
    </section>   

    <section className='placeimageDetails'>
        <div className='placepara2'>
          <h4 >{rameshwaramDetails[1].placeHeading}</h4>
          <p>{rameshwaramDetails[1].placeDetails1}</p>
          <p>{rameshwaramDetails[1].placeDetails2}</p>
        </div>
        <img src={rameshwaramDetails[1].placeImg} alt='placeimage'style={{width:'20%' , maxHeight:'25vh'}}className=' placeimg '/>
    </section>   
      
    <section className='placeimageDetails'>
      <img src={rameshwaramDetails[2].placeImg} alt='placeimage'style={{width:'20%' , maxHeight:'36vh'}}className=' placeimg '/>
        <div className='placepara1'>
          <h4>{rameshwaramDetails[2].placeHeading}</h4>
          <p>{rameshwaramDetails[2].placeDetails1}</p>
          <p>{rameshwaramDetails[2].placeDetails2}</p>
        </div>
    </section> 
    <section className='placeimageDetails'>
        <div className='placepara2'>
          <h4>{rameshwaramDetails[3].placeHeading}</h4>
          <p>{rameshwaramDetails[3].placeDetails1}</p>
          <p>{rameshwaramDetails[3].placeDetails2}</p>
        </div>
        <img src={rameshwaramDetails[3].placeImg} alt='placeimage'style={{width:'20%' , maxHeight:'35vh'}}className=' placeimg '/>
    </section> 
      
    </div>

    {/* kodaikanal */}

    <div className='placeImage pt-5 pb-5'>  
    <h1 style={{textAlign:'center'}} >Kodaikanal</h1>
    <h2 style={{textAlign:'center'}}>Tourist Places Visit</h2> 
    <section className='placeimageDetails'>
      <img src={kodaikanalDetails[0].placeImg} alt='placeimage'style={{width:'20%' , maxHeight:'30vh'}}className=' placeimg '/>
        <div className='placepara1'>
          <h4>{kodaikanalDetails[0].placeHeading}</h4>
          <p>{kodaikanalDetails[0].placeDetails1}</p>
          <p>{kodaikanalDetails[0].placeDetails2}</p>
        </div>
    </section>   

    <section className='placeimageDetails'>
        <div className='placepara2'>
          <h4 >{kodaikanalDetails[1].placeHeading}</h4>
          <p>{kodaikanalDetails[1].placeDetails1}</p>
          <p>{kodaikanalDetails[1].placeDetails2}</p>
        </div>
        <img src={kodaikanalDetails[1].placeImg} alt='placeimage'style={{width:'20%' , maxHeight:'30vh'}}className=' placeimg '/>
    </section>   
      
    <section className='placeimageDetails'>
      <img src={kodaikanalDetails[2].placeImg} alt='placeimage'style={{width:'20%' , maxHeight:'32vh'}}className=' placeimg '/>
        <div className='placepara1'>
          <h4>{kodaikanalDetails[2].placeHeading}</h4>
          <p>{kodaikanalDetails[2].placeDetails1}</p>
          <p>{kodaikanalDetails[2].placeDetails2}</p>
        </div>
    </section> 
    <section className='placeimageDetails'>
        <div className='placepara2'>
          <h4>{kodaikanalDetails[3].placeHeading}</h4>
          <p>{kodaikanalDetails[3].placeDetails1}</p>
          <p>{kodaikanalDetails[3].placeDetails2}</p>
        </div>
        <img src={kodaikanalDetails[3].placeImg} alt='placeimage'style={{width:'20%' , maxHeight:'35vh'}}className=' placeimg '/>
    </section> 
      
    </div>

    {/* ooty */}

    <div className='placeImage pt-5 pb-5'>  
    <h1 style={{textAlign:'center'}} >Ooty</h1>
    <h2 style={{textAlign:'center'}}>Tourist Places Visit</h2> 
    <section className='placeimageDetails'>
      <img src={ootyDetails[0].placeImg} alt='placeimage'style={{width:'20%' , maxHeight:'30vh'}}className=' placeimg '/>
        <div className='placepara1'>
          <h4>{ootyDetails[0].placeHeading}</h4>
          <p>{ootyDetails[0].placeDetails1}</p>
          <p>{ootyDetails[0].placeDetails2}</p>
        </div>
    </section>   

    <section className='placeimageDetails'>
        <div className='placepara2'>
          <h4 >{ootyDetails[1].placeHeading}</h4>
          <p>{ootyDetails[1].placeDetails1}</p>
          <p>{ootyDetails[1].placeDetails2}</p>
        </div>
        <img src={ootyDetails[1].placeImg} alt='placeimage'style={{width:'20%' , maxHeight:'33vh'}}className=' placeimg '/>
    </section>   
      
    <section className='placeimageDetails'>
      <img src={ootyDetails[2].placeImg} alt='placeimage'style={{width:'20%' , maxHeight:'36vh'}}className=' placeimg '/>
        <div className='placepara1'>
          <h4>{ootyDetails[2].placeHeading}</h4>
          <p>{ootyDetails[2].placeDetails1}</p>
          <p>{ootyDetails[2].placeDetails2}</p>
        </div>
    </section> 
    <section className='placeimageDetails'>
        <div className='placepara2'>
          <h4>{ootyDetails[3].placeHeading}</h4>
          <p>{ootyDetails[3].placeDetails1}</p>
          <p>{ootyDetails[3].placeDetails2}</p>
        </div>
        <img src={ootyDetails[3].placeImg} alt='placeimage'style={{width:'20%' , maxHeight:'32vh'}}className=' placeimg '/>
    </section>       
    </div>


    {/* kanyakumari */}

    <div className='placeImage pt-5 pb-5'>  
    <h1 style={{textAlign:'center'}} >Kanyakumari</h1>
    <h2 style={{textAlign:'center'}}>Tourist Places Visit</h2> 
    <section className='placeimageDetails'>
      <img src={kanyakumariDetails[0].placeImg} alt='placeimage'style={{width:'20%' , maxHeight:'30vh'}}className=' placeimg '/>
        <div className='placepara1'>
          <h4>{kanyakumariDetails[0].placeHeading}</h4>
          <p>{kanyakumariDetails[0].placeDetails1}</p>
          <p>{kanyakumariDetails[0].placeDetails2}</p>
        </div>
    </section>   

    <section className='placeimageDetails'>
        <div className='placepara2'>
          <h4 >{kanyakumariDetails[1].placeHeading}</h4>
          <p>{kanyakumariDetails[1].placeDetails1}</p>
          <p>{kanyakumariDetails[1].placeDetails2}</p>
        </div>
        <img src={kanyakumariDetails[1].placeImg} alt='placeimage'style={{width:'20%' , maxHeight:'32vh'}}className=' placeimg '/>
    </section>   
      
    <section className='placeimageDetails'>
      <img src={kanyakumariDetails[2].placeImg} alt='placeimage'style={{width:'20%' , maxHeight:'35vh'}}className=' placeimg '/>
        <div className='placepara1'>
          <h4>{kanyakumariDetails[2].placeHeading}</h4>
          <p>{kanyakumariDetails[2].placeDetails1}</p>
          <p>{kanyakumariDetails[2].placeDetails2}</p>
        </div>
    </section> 
    <section className='placeimageDetails'>
        <div className='placepara2'>
          <h4>{kanyakumariDetails[3].placeHeading}</h4>
          <p>{kanyakumariDetails[3].placeDetails1}</p>
          <p>{kanyakumariDetails[3].placeDetails2}</p>
        </div>
        <img src={kanyakumariDetails[3].placeImg} alt='placeimage'style={{width:'20%' , maxHeight:'32vh'}}className=' placeimg '/>
    </section>      
    </div>

    {/* kumbakonam */}

    <div className='placeImage pt-5 pb-5'>  
    <h1 style={{textAlign:'center'}} >Kumbakonam</h1>
    <h2 style={{textAlign:'center'}}>Tourist Places Visit</h2> 
    <section className='placeimageDetails'>
      <img src={kumbakonamDetails[0].placeImg} alt='placeimage'style={{width:'20%' , maxHeight:'34vh'}}className=' placeimg '/>
        <div className='placepara1'>
          <h4>{kumbakonamDetails[0].placeHeading}</h4>
          <p>{kumbakonamDetails[0].placeDetails1}</p>
          <p>{kumbakonamDetails[0].placeDetails2}</p>
        </div>
    </section>   

    <section className='placeimageDetails'>
        <div className='placepara2'>
          <h4 >{kumbakonamDetails[1].placeHeading}</h4>
          <p>{kumbakonamDetails[1].placeDetails1}</p>
          <p>{kumbakonamDetails[1].placeDetails2}</p>
        </div>
        <img src={kumbakonamDetails[1].placeImg} alt='placeimage'style={{width:'20%' , maxHeight:'35vh'}}className=' placeimg '/>
    </section>   
      
    <section className='placeimageDetails'>
      <img src={kumbakonamDetails[2].placeImg} alt='placeimage'style={{width:'30%' , maxHeight:'35vh'}}className=' placeimg '/>
        <div className='placepara1 pt-3'>
          <h4>{kumbakonamDetails[2].placeHeading}</h4>
          <p>{kumbakonamDetails[2].placeDetails1}</p>
          <p>{kumbakonamDetails[2].placeDetails2}</p>
        </div>
    </section> 
    <section className='placeimageDetails'>
        <div className='placepara2'>
          <h4>{kumbakonamDetails[3].placeHeading}</h4>
          <p>{kumbakonamDetails[3].placeDetails1}</p>
          <p>{kumbakonamDetails[3].placeDetails2}</p>
        </div>
        <img src={kumbakonamDetails[3].placeImg} alt='placeimage'style={{width:'20%' , maxHeight:'33vh'}}className=' placeimg '/>
    </section>      
    </div>

    {/* madurai */}

    <div className='placeImage pt-5 pb-5'>  
    <h1 style={{textAlign:'center'}} >Madurai</h1>
    <h2 style={{textAlign:'center'}}>Tourist Places Visit</h2> 
    <section className='placeimageDetails'>
      <img src={maduraiDetails[0].placeImg} alt='placeimage'style={{width:'20%' , maxHeight:'35vh'}}className=' placeimg '/>
        <div className='placepara1'>
          <h4>{maduraiDetails[0].placeHeading}</h4>
          <p>{maduraiDetails[0].placeDetails1}</p>
          <p>{maduraiDetails[0].placeDetails2}</p>
        </div>
    </section>   

    <section className='placeimageDetails'>
        <div className='placepara2'>
          <h4 >{maduraiDetails[1].placeHeading}</h4>
          <p>{maduraiDetails[1].placeDetails1}</p>
          <p>{maduraiDetails[1].placeDetails2}</p>
        </div>
        <img src={maduraiDetails[1].placeImg} alt='placeimage'style={{width:'20%' , maxHeight:'35vh'}}className=' placeimg '/>
    </section>   
      
    <section className='placeimageDetails'>
      <img src={maduraiDetails[2].placeImg} alt='placeimage'style={{width:'20%' , maxHeight:'33vh'}}className=' placeimg '/>
        <div className='placepara1'>
          <h4>{maduraiDetails[2].placeHeading}</h4>
          <p>{maduraiDetails[2].placeDetails1}</p>
          <p>{maduraiDetails[2].placeDetails2}</p>
        </div>
    </section> 
    <section className='placeimageDetails'>
        <div className='placepara2'>
          <h4>{maduraiDetails[3].placeHeading}</h4>
          <p>{maduraiDetails[3].placeDetails1}</p>
          <p>{maduraiDetails[3].placeDetails2}</p>
        </div>
        <img src={maduraiDetails[3].placeImg} alt='placeimage'style={{width:'20%' , maxHeight:'32vh'}}className=' placeimg '/>
    </section>      
    </div>

    {/* Yercaud */}

    <div className='placeImage pt-5 pb-5'>  
    <h1 style={{textAlign:'center'}} >Yercaud</h1>
    <h2 style={{textAlign:'center'}}>Tourist Places Visit</h2> 
    <section className='placeimageDetails'>
      <img src={yercaudDetails[0].placeImg} alt='placeimage'style={{width:'20%' , maxHeight:'35vh'}}className=' placeimg '/>
        <div className='placepara1'>
          <h4>{yercaudDetails[0].placeHeading}</h4>
          <p>{yercaudDetails[0].placeDetails1}</p>
          <p>{yercaudDetails[0].placeDetails2}</p>
        </div>
    </section>   

    <section className='placeimageDetails'>
        <div className='placepara2'>
          <h4 >{yercaudDetails[1].placeHeading}</h4>
          <p>{yercaudDetails[1].placeDetails1}</p>
          <p>{yercaudDetails[1].placeDetails2}</p>
        </div>
        <img src={yercaudDetails[1].placeImg} alt='placeimage'style={{width:'20%' , maxHeight:'30vh'}}className=' placeimg '/>
    </section>   
      
    <section className='placeimageDetails'>
      <img src={yercaudDetails[2].placeImg} alt='placeimage'style={{width:'20%' , maxHeight:'25vh'}}className=' placeimg '/>
        <div className='placepara1'>
          <h4>{yercaudDetails[2].placeHeading}</h4>
          <p>{yercaudDetails[2].placeDetails1}</p>
          <p>{yercaudDetails[2].placeDetails2}</p>
        </div>
    </section> 
    <section className='placeimageDetails'>
        <div className='placepara2'>
          <h4>{yercaudDetails[3].placeHeading}</h4>
          <p>{yercaudDetails[3].placeDetails1}</p>
          <p>{yercaudDetails[3].placeDetails2}</p>
        </div>
        <img src={yercaudDetails[3].placeImg} alt='placeimage'style={{width:'20%' , maxHeight:'35vh'}}className=' placeimg '/>
    </section>      
    </div>

    {/* theni */}

    <div className='placeImage pt-5 pb-5'>  
    <h1 style={{textAlign:'center'}} >Theni</h1>
    <h2 style={{textAlign:'center'}}>Tourist Places Visit</h2> 
    <section className='placeimageDetails'>
      <img src={theniDetails[0].placeImg} alt='placeimage'style={{width:'20%' , maxHeight:'32vh'}}className=' placeimg '/>
        <div className='placepara1'>
          <h4>{theniDetails[0].placeHeading}</h4>
          <p>{theniDetails[0].placeDetails1}</p>
          <p>{theniDetails[0].placeDetails2}</p>
        </div>
    </section>   

    <section className='placeimageDetails'>
        <div className='placepara2'>
          <h4 >{theniDetails[1].placeHeading}</h4>
          <p>{theniDetails[1].placeDetails1}</p>
          <p>{theniDetails[1].placeDetails2}</p>
        </div>
        <img src={theniDetails[1].placeImg} alt='placeimage'style={{width:'20%' , maxHeight:'35vh'}}className=' placeimg '/>
    </section>   
      
    <section className='placeimageDetails'>
      <img src={theniDetails[2].placeImg} alt='placeimage'style={{width:'20%' , maxHeight:'35vh'}}className=' placeimg '/>
        <div className='placepara1'>
          <h4>{theniDetails[2].placeHeading}</h4>
          <p>{theniDetails[2].placeDetails1}</p>
          <p>{theniDetails[2].placeDetails2}</p>
        </div>
    </section> 
    <section className='placeimageDetails'>
        <div className='placepara2'>
          <h4>{theniDetails[3].placeHeading}</h4>
          <p>{theniDetails[3].placeDetails1}</p>
          <p>{theniDetails[3].placeDetails2}</p>
        </div>
        <img src={theniDetails[3].placeImg} alt='placeimage'style={{width:'20%' , maxHeight:'35vh'}}className=' placeimg '/>
    </section>      
    </div>

    {/* Hogenakkal */}

    <div className='placeImage pt-5 pb-5'>  
    <h1 style={{textAlign:'center'}} >Hogenakkal</h1>
    <h2 style={{textAlign:'center'}}>Tourist Places Visit</h2> 
    <section className='placeimageDetails'>
      <img src={hogenakkalDetails[0].placeImg} alt='placeimage'style={{width:'20%' , maxHeight:'35vh'}}className=' placeimg '/>
        <div className='placepara1'>
          <h4>{hogenakkalDetails[0].placeHeading}</h4>
          <p>{hogenakkalDetails[0].placeDetails1}</p>
          <p>{hogenakkalDetails[0].placeDetails2}</p>
        </div>
    </section>   

    <section className='placeimageDetails'>
        <div className='placepara2'>
          <h4 >{hogenakkalDetails[1].placeHeading}</h4>
          <p>{hogenakkalDetails[1].placeDetails1}</p>
          <p>{hogenakkalDetails[1].placeDetails2}</p>
        </div>
        <img src={hogenakkalDetails[1].placeImg} alt='placeimage'style={{width:'20%' , maxHeight:'32vh'}}className=' placeimg '/>
    </section>   
      
    <section className='placeimageDetails'>
      <img src={hogenakkalDetails[2].placeImg} alt='placeimage'style={{width:'20%' , maxHeight:'33vh'}}className=' placeimg '/>
        <div className='placepara1'>
          <h4>{hogenakkalDetails[2].placeHeading}</h4>
          <p>{hogenakkalDetails[2].placeDetails1}</p>
          <p>{hogenakkalDetails[2].placeDetails2}</p>
        </div>
    </section> 
    <section className='placeimageDetails'>
        <div className='placepara2'>
          <h4>{hogenakkalDetails[3].placeHeading}</h4>
          <p>{hogenakkalDetails[3].placeDetails1}</p>
          <p>{hogenakkalDetails[3].placeDetails2}</p>
        </div>
        <img src={hogenakkalDetails[3].placeImg} alt='placeimage'style={{width:'20%' , maxHeight:'36vh'}}className=' placeimg '/>
    </section>      
    </div>
    </>
  )
}

export default PlaceImageContent