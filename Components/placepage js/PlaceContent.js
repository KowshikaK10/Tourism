import React from 'react';
import '../css/place.css';
import placeimg from '../images/Content/Place.jpeg';
import PlaceImageContent from './PlaceImageContent';
const PlaceContent = () => {
  return (
    <div className='placeDetails pt-5'>
    <div className='placeContent pb-4'>
        <div className="placeContentDetails">
            <h3 className='pb-3'>Tourist Places To Visit In Tamil Nadu</h3>
            <p>Chennai, Ooty, Pondicherry, Kodaikanal, Coimbatore, Yelagiri, Masinagudi, Conoor, Madumalai, Yercaud, Madurai, Thanjavur, Mahabalipuram, Kanyakumari, Kotagiri, Nilgiri, Krishnagiri, Auroville, Theni, Hullathy, Rameshwaram, Kalhatty Ghat and more.</p>
            <p>Enjoy a vacation to remember and cherish some amazing experiences while touring the most gorgeous places to visit in Tamil Nadu. With many serene beaches, beautiful temples known for Dravidian architecture, bustling shopping bazaars and adventurous wildlife places, these places offer a splendid mix to help you make superb travel itinerary.</p>
            <p>Looking forward to visiting the most stunning places to see in Tamil Nadu?Well, then you are in for a great time. From the thriving cosmopolitan vibes of Chennai to the emerald tea plantations of Ooty and the French style houses of Pondicherry to the scenic beauty of Kodaikanal, these places will leave you overwhelmed. There is an awesome experience in store, whether you are going for leisure, backpacking or looking for an adventure.</p>
        </div>
        <div className="placeContentImage">
            <img src={placeimg} alt="placeimg" />
            <p style={{textAlign:'center'}}>Tourist Places To Visit In Tamil Nadu</p>
        </div>
    </div>
    <p style={{textIndent : '2.5em'}}>The variety of tourist places in Tamil Nadu offers you a glimpse of all kinds of sightseeing and adventures. Tourists here can choose among many offbeat places like Yelagiri and Yercaud to the famous cultural citadels like Mahabalipuram and Madurai. Tamil Nadu is also home to the southernmost land of India- Kanyakumari and one of the char dhams- Rameshwaram. Whether it is an adventure you are looking for or a religious respite in the temples, these places are a delight for anyone wishing to escape the hustle and bustle of life.</p>
    <PlaceImageContent/>
    </div>
  )
}

export default PlaceContent